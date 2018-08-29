var express = require('express');
var router = express.Router();


var hobbies = [
  { id: 1, title: 'Piano' },
  { id: 2, title: 'Mtn biking' },
  { id: 3, title: 'hiking' }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('hobbies',{hobbies:hobbies});
});

module.exports = router;
