const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req,res) => {
    res.send('This is an about page')
})

app.post('/users',(req, res) => {
    const {name} = req.body;
    // Create user based name
})


app.get('/web', (req,res) => {

    res.send('www.sevenseasmotors.ca')
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})