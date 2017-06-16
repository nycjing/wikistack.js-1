var express = require('express');
var app = express();
var router = express.Router();

// customizing the behavior of router.param()
router.param(function(param, option) {
  return function (req, res, next, val) {
    if (val == option) {
      next();
    }
    else {
      res.sendStatus(403);
    }
  }
});

// using the customized router.param()
// router.param('id', function (req, res, next, id) {
//   console.log('CALLED ONLY ONCE');
//   next();
// });

router.get('/', function (req, res, next) {
  console.log('although this matches');
  next();
});

router.get('/', function (req, res) {
  console.log('and this matches too');
  res.end();
});

app.use(router);

app.listen(1987, function () {
  console.log('Ready');
});