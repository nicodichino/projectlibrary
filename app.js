const express = require('express');

const app = express();

const sequelize = require ('./config/database');

app.use(express.json());

const librariesRouter = require('./routes/libraries');

const booksRouter = require('./routes/books');

const authRouter = require('./routes/auth');


app.use('/libraries', librariesRouter);

app.use('/books', booksRouter);

app.use('/auth', authRouter);



app.get('/', (req, res) => {
    res.send('Bookstore API');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});