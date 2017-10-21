const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) =>{
  response.send('VEHICLES: respond with a resource');
});

module.exports = router;