const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const articles = require('../models/Articles.js');

// Route to get add article
router.get('/add', (req, res) => {
    res.render('add_article', {
        title:'Add article'
    });
});


// Route to post add article
router.post('/add', (req, res) => {
    const newArticle = {
        id: uuid.v4(),
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    }

    if (!newArticle.body || !newArticle.author) {
        return res.status(400);
    }

    articles.push(newArticle);
    res.redirect('/');
});

// Route to edit article
router.get('/edit/:id', (req, res) => {
    var article = {}
    for (i=0; i<articles.length; i++) {
        if (articles[i].id === req.params.id) {
            article = articles[i];
            res.render('edit_article', {
                article
            });
        }
    }
})

// Route to post edit article
router.post('/edit/:id', (req, res) => {
    for (i=0; i<articles.length; i++) {
        if (articles[i].id === req.params.id) {
            articles[i].author = req.body.author;
            articles[i].title = req.body.title;
            articles[i].body = req.body.body;
            res.redirect('/');
        }
    }
});

// Delete route
router.delete('/:id', (req, res) => {
    for (i=0; i<articles.length; i++) {
        if (articles[i].id === req.params.id) {
            articles.splice(i, 1);
            res.send('Succes');
        }
    }
})

// Get single article
router.get('/:id', (req, res) => {
    var article = {}
    for (i=0; i<articles.length; i++) {
        if (articles[i].id === req.params.id) {
            article = articles[i];
            res.render('article', {
                article
            });
        }
    }
})

module.exports = router;