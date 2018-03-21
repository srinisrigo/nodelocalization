var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.cookies.lang) {
    res.setLocale(req.cookies.lang);
    res.locals.locale = req.getLocale();
  }

  res.render('index', {
    title: res.__('index.title'),
    welcome: res.__('index.welcome')
  });
});

module.exports = router;