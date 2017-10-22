const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

passport.serializeUser((user, fn) => {
  fn(null, user);
});

passport.deserializeUser((id, fn) => {
  User.findOne({_id: id._id}, (err, user) => {
    fn(err, user);
  });
});

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('Twitter info', profile.displayName, profile.id);
    // const {displayName, id} = profile;

    User.findOrCreate(
      {name: profile.displayName},
      {name: profile.displayName, userid: profile.id},
      (err, user, created) => {
        if(err){
          console.error(err);
          return done(err);
        }
        console.log(`Did we create ${user.displayName}: ${created}`);
        done(null, user);
      }
    );
  }
));

module.exports = passport;