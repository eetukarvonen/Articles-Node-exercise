const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
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


// Route files
let articlesRoute = require('./routes/articles');
app.use('/articles', articlesRoute);


PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started at port: ' + PORT));