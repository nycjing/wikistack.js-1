const express = require('express');
const app = express();
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
const models = require('../models');
const Page = models.Page;
const User = models.User;
module.exports = router;
// ...
router.use('/wiki', wikiRouter);
// or, in one line: router.use('/wiki', require('./wiki'));
router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/wiki/', function (req, res, next) {
 // console.log('submit a new page to the DB');
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
  res.send('got to GET /wiki/add');
});

