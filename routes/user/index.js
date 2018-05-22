var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.cookies.lang) {
    res.setLocale(req.cookies.lang);
    res.locals.locale = req.getLocale();
  }

  res.render('user/index', {
    title: res.__('users.title'),
    welcome: res.__('users.welcome'),
    name: res.__('users.name'),
    username: res.__('users.username'),
    password: res.__('users.password'),
    reenterpassword: res.__('users.reenterpassword')
  });
});

module.exports = router;