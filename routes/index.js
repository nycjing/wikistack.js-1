'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
// ...


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
    res.send('got to GET /wiki/');
});

router.post('/wiki/', function (req, res, next) {
 // console.log('submit a new page to the DB');
  res.send('got to POST /wiki/');
  //res.redirect('/');
});

router.get('/wiki/add/', function (req, res, next) {
//  console.log('retrieve the "add a page" form');
   res.render('addpage');
  // res.send('got to GET /wiki/add');
});

module.exports = router;
