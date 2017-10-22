const express = require('express');
const router = express.Router();
const passportTwitter = require('../auth/twitter');

router.get('/login', (request, response, next) => {
  response.render('login', {title: "Please sign in with"});
});

router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

router.get('/twitter', passportTwitter.authenticate('twitter'));
router.get('/twitter/callback',
  passportTwitter.authenticate('twitter', {failureRedirect: '/login'}),
  (request, response) => {
    response.redirect('/users');
  });

module.exports = router;