'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
 logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        defaultValue: 'title here',
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT.apply,
        defaultValue: 'content here',
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),

    },
     date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},  {
      getURL: {
        urlName () {
          return '/wiki/' + urlTitle;
        }
      },

      });

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        defaultValue: 'Lina',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        defaultValue: 'email',
        allowNull: false,
        validate: {
            isEmail: true
        }
    }


});


module.exports =  db;
