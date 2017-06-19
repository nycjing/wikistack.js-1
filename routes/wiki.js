const express = require('express');
// const app = express();
 const router = express.Router();
// const wikiRouter = require('./wiki');
// const userRouter = require('./user');
const models = require('../models');
const Page = models.Page;
console.log(Page);
const User = models.User;
// ...
//router.use('/wiki', wikiRouter);
// or, in one line: router.use('/wiki', require('./wiki'));
router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function (req, res, next) {
 // console.log('submit a new page to the DB');
 console.log(req.body.title,req.body.content);
 let page = Page.build({
   title: req.body.title,
   content: req.body.content
 });
 page.save()
 .then(function(result) {
   console.log(result);
   res.redirect('/');
 });
});

router.get('/add', function(req, res, next) {
  //res.send('got to GET /wiki/add');
   res.render('addpage');
});

module.exports = router;
