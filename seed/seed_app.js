var seed = require('../server/db/seed');
var db = require('../server/db');

seed()
.then(function(){
  return db.disconnect();
})
.then(function(){
  console.log('db has been seeded');
});
