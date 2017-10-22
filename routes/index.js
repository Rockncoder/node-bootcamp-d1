const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('index', {title: "Node Camp"});
});

module.exports = router;