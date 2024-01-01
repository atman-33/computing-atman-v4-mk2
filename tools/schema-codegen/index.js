const fs = require('fs');
const path = require('path');

const readFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf-8');
};

const parsePrismaSchema = (schemaContent) => {
  const models = [];
  let currentModel = null;

  const lines = schemaContent.split('\n').filter((line) => !line.trim().startsWith('//'));
  lines.forEach((line) => {
    const modelMatch = line.match(/^model\s+(\w+)\s+\{/);
    const idMatch = line.match(/@id/);
    const defaultMatch = line.match(/@default/);

    if (modelMatch) {
      if (currentModel) {
        models.push(currentModel);
      }
      currentModel = { model: modelMatch[1], columns: [] };
    } else if (idMatch || defaultMatch) {
      const columnMatch = line.match(/\s+(\w+)\s+(\w+)\s+/);
      if (columnMatch) {
        const columnName = columnMatch[1];
        const type = columnMatch[2].toLowerCase();
        const key = idMatch ? 1 : 0;
        currentModel.columns.push({ name: columnName, type, key });
      }
    }
  });

  if (currentModel) {
    models.push(currentModel);
  }

  return models;
};

const generateModelJson = (models) => {
  return models.map((model) => {
    return {
      model: model.model,
      columns: model.columns.map((column) => ({
        name: column.name,
        type: column.type,
        key: column.key
      }))
    };
  });
};

const filePath = path.join('./libs/api/prisma/data-access-db/src/lib', 'schema.prisma');
const schemaContent = readFile(filePath);
const models = parsePrismaSchema(schemaContent);
const modelJson = generateModelJson(models);

console.log(JSON.stringify(modelJson, null, 2));
