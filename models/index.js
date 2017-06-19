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
        type: Sequelize.TEXT,
        defaultValue: 'content here',
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open','close')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW

    }
},
  {
      getURL: {
        urlName () {
          return '/wiki/' + urlTitle;
        }
      }

      }, {
          hooks: {
              beforeValidate: function generateUrlTitle (title) {
                if (title) {
                    // Removes all non-alphanumeric characters from title
                    // And make whitespace underscore
                    urlTitle = title.replace(/\s+/g, '_').replace(/\W/g, '');
                } else {
                    // Generates random 5 letter string
                    urlTitle =  Math.random().toString(36).substring(2, 7);
                }
              }
          }
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
