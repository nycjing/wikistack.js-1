'use strict';

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:1987/wikistack');

var Page = db.define('page', {
  title: { type: Sequelize.STRING },
  urlTitle: { type: Sequelize.STRING },
  content: { tyep: Sequelize.TEXT},
  status : { type: Sequelize.ENUM('open', 'closed') }
});

var User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

// module.exports = {
//   Page: Page,
//   User: User
// };

module.exports =  db;
