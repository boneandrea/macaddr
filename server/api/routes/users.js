var express = require('express');
var router = express.Router();
var models = require('../models');
var bodyParser = require('body-parser');


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.macaddress.all().then(macaddrs => {
    res.send({macaddrs: macaddrs});
  });
});


router.post('/', function(req, res, next) {
  const mac = models.macaddress.create(req.body)
  res.send('""');
  res.status(201).end();
});

router.put('/:id', function(req, res, next) {
  models.macaddress.findById(req.params.id)
    .then((user) => {
      user.update(req.body)
    })
  res.status(200).end();
});

router.delete('/:id', function(req, res, next) {
  models.macaddress.findById(req.params.id)
    .then((user)=>{
      user.destroy()
    })
  res.status(200).end();
});

module.exports = router;
