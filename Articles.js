const uuid = require('uuid');

const articles = [
    {
        id:uuid.v4(),
        title:'Article one',
        author: 'John Doe',
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
        author: 'John Doe',
        body: 'This is article three'
    },
];

module.exports = articles;