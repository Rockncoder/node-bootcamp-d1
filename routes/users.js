const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) =>{
  response.send('USERS respond with a resource');
});

module.exports = router;