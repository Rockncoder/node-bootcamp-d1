const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');
const vehicles = require('./routes/vehicles');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_CONNECTION, {useMongoClient: true}).then(() => {
  console.log('connection successful');


  const Cat = mongoose.model('Cat', { name: String });

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save( (err, cat) => {

    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(cat));
      console.log('meow');
    }
  });
}).catch((err) => console.error(err));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);
app.use('/vehicles', vehicles);

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'? err: {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



