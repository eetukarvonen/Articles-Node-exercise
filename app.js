const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const uuid = require('uuid');
const articles = require('./models/Articles.js');

const app = express();

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to /
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        articles
    });
});

// Route to get add article
app.get('/articles/add', (req, res) => {
    res.render('add_article', {
        title:'Add article'
    });
});


// Route to post add article
app.post('/articles/add', (req, res) => {
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
app.get('/articles/edit/:id', (req, res) => {
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
app.post('/articles/edit/:id', (req, res) => {
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
app.delete('/articles/:id', (req, res) => {
    for (i=0; i<articles.length; i++) {
        if (articles[i].id === req.params.id) {
            articles.splice(i, 1);
            res.send('Succes');
        }
    }
})

// Get single article
app.get('/articles/:id', (req, res) => {
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



PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started at port: ' + PORT));