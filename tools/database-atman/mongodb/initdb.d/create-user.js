db = db.getSiblingDB('admin');
db.createUser({
  user: 'root',
  pwd: 'pass',
  roles: [{ role: 'root', db: 'admin' }]
});

db = db.getSiblingDB('sampledb');
db.createUser({
  user: 'sampleuser',
  pwd: 'pass',
  roles: [
    { role: 'dbOwner', db: 'sampledb' },
    { role: 'dbAdmin', db: 'sampledb' },
    { role: 'readWrite', db: 'sampledb' }
  ]
});
