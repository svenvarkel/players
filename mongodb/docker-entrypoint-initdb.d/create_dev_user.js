db.createUser({
  user: 'dev',
  pwd: 'dev',
  roles: [{ role: 'readWriteAnyDatabase', db: 'admin' }]
});
