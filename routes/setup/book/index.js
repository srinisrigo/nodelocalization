var express = require('express');
var router = express.Router();
books = [
  { name: 'book1', author: 'author1', price: 150.00 },
  { name: 'book2', author: 'author2', price: 151.00 },
  { name: 'book3', author: 'author3', price: 152.00 },
  { name: 'book4', author: 'author4', price: 153.00 },
  { name: 'book5', author: 'author5', price: 154.00 },
  { name: 'book6', author: 'author6', price: 155.00 }
];

/* GET books listing. */
router.get('/', function (req, res, next) {
  if (req.cookies.lang) {
    res.setLocale(req.cookies.lang);
    res.locals.locale = req.getLocale();
  }

  res.render('setup/book/index', {
    title: res.__('index.title'),
    welcome: res.__('index.welcome'),
    edit: res.__('index.edit'),
    create: res.__('index.create'),
    name: res.__('setup.book.name'),
    author: res.__('setup.book.author'),
    price: res.__('setup.book.price'),
    nobooks: res.__('setup.book.nobooks'),
    books: books
  });
});

/* GET books edit. */
router.get('/edit/:bookindex', function (req, res, next) {
  if (req.cookies.lang) {
    res.setLocale(req.cookies.lang);
    res.locals.locale = req.getLocale();
  }

  res.render('setup/book/edit', {
    title: res.__('index.title'),
    welcome: res.__('index.welcome'),
    name: res.__('setup.book.name'),
    author: res.__('setup.book.author'),
    price: res.__('setup.book.price'),
    update: res.__('index.update'),
    cancel: res.__('index.cancel'),
    book: books[req.params.bookindex] || { name: '', author: '', price: '0.00' },
    bookindex: req.params.bookindex
  });
});

/* POST books update. */
router.post('/update/:bookindex', function (req, res, next) {
  if (req.cookies.lang) {
    res.setLocale(req.cookies.lang);
    res.locals.locale = req.getLocale();
  }

  if (req.body.update) {
    var book = books[req.params.bookindex];
    if (book) {
      book.name = req.body.name;
      book.author = req.body.author;
      book.price = req.body.price;
      console.log(book.name + ':' + book.author);
    }
    else books.push({
      name: req.body.name,
      author: req.body.author,
      price: req.body.price
    });
  }

  res.redirect("/setup/book");
});

module.exports = router;