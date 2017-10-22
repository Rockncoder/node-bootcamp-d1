const express = require('express');
const router = express.Router();

router.get('/', ensureAuthenticated, (request, response, next) =>{
  response.render('user', {user: request.user});
});

function ensureAuthenticated(request, response, next){
  if(request.isAuthenticated()){
    return next();
  }
  response.redirect('/auth/login');
}

module.exports = router;