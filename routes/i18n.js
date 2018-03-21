var express = require('express');
var router = express.Router();

router.get('/:locale', function (req, res, next) {
    if (req.params.locale) {
        res.setLocale(req.params.locale);
        res.locals.locale = req.getLocale();
        res.cookie("lang", req.params.locale);
    }
    
    /*res.render('index', {
        title: res.__('index.title'),
        welcome: res.__('index.welcome')
    });*/

    res.redirect("../..");
});

module.exports = router;