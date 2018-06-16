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

  console.log(req.body)
  // const mac = macaddress.build({
  //   macaddr: req.body.macaddr,
  //   description: req.body.description
  // });

  // console.log(mac)
  // console.log(mac.save())
  
  res.send('""');
  res.status(201).end();
});

module.exports = router;
