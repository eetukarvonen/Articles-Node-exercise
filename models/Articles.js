const uuid = require('uuid');

const articles = [
    {
        id:uuid.v4(),
        title:'Article one',
        author: 'Eetu Karvonen',
        body: 'This is article one'
    },
    {
        id:uuid.v4(),
        title:'Article two',
        author: 'John Doe',
        body: 'This is article two'
    },
    {
        id:uuid.v4(),
        title:'Article three',
        author: 'Linda Loe',
        body: 'This is article three'
    },
];

module.exports = articles;