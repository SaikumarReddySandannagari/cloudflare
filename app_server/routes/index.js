var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");


router.get('/', ctrlMain.index);
router.get('/random', ctrlMain.random);


module.exports = router;