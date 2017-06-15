const express = require( 'express' );
const app = express();
const router = express.Router();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const fs = require('fs');
const bodyParser = require('body-parser');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(1987, function(){
  console.log('listening on port 1987');
});



module.exports = router;
