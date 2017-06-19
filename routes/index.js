'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
// const models = require('../models');
// const Page = models.Page;
// const User = models.User;
// ...
router.use('/wiki', wikiRouter);

//router.use('/', router);
// customizing the behavior of router.param()
// router.param(function(param, option) {
//   return function (req, res, next, val) {
//     if (val == option) {
//       next();
//     }
//     else {
//       res.sendStatus(403);
//     }
//   }
// });

// using the customized router.param()
// router.param('id', function (req, res, next, id) {
//   console.log('CALLED ONLY ONCE');
//   next();
// });
// router.use('/wiki', wikiRouter);
// // or, in one line: router.use('/wiki', require('./wiki'));


router.get('/', function (req, res, next) {
  //console.log('submit a new page to the DB');
 //   res.redirect('/');
 res.send('home page');
});



module.exports = router;
