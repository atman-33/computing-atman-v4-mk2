// ---- Constants ---- //
const FOLDER_PATH = './libs/api/prisma/data-access-db/src/lib';
const FILE_NAME = 'schema.prisma';
// ------------------- //

const fs = require('fs');
const path = require('path');

const readFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf-8');
};

const parsePrismaSchema = (schemaContent) => {
  const models = [];
  let currentModel = null;

  // Split the schema content into lines
  const lines = schemaContent.split('\n').filter((line) => !line.trim().startsWith('//'));

  // Iterate over each line
  lines.forEach((line) => {
    // Check if the line defines a new model
    const modelMatch = line.match(/^model\s+(\w+)\s+\{/);
    if (modelMatch) {
      // If a new model is found, push the current model to the models array
      if (currentModel) {
        models.push(currentModel);
      }
      // Create a new model object
      currentModel = { model: modelMatch[1], columns: [] };
    } else {
      // Check if the line contains the @id or @relation annotation
      const idMatch = line.match(/@id/);
      const relationMatch = line.match(/@relation/);

      // If there is no current model or the line contains a relation annotation, skip to the next line
      if (!currentModel || relationMatch) {
        return;
      }

      // Split the line into column name and type
      const columnMatch = line.split(/\s+/).filter(Boolean);
      if (columnMatch && columnMatch.length >= 2) {
        const columnName = columnMatch[0];
        const type = columnMatch[1];
        // Set the key value based on whether the line contains the @id annotation
        const key = idMatch ? 1 : 0;
        // Add the column object to the current model's columns array
        currentModel.columns.push({ name: columnName, type, key });
      }
    }
  });

  // Push the last current model to the models array
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

const filePath = path.join(FOLDER_PATH, FILE_NAME);
const schemaContent = readFile(filePath);
const models = parsePrismaSchema(schemaContent);
const modelJson = generateModelJson(models);

console.log(JSON.stringify(modelJson, null, 2));
