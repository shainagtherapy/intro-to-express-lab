const express = require('express');

const app = express()






// hello world route
// http method --> get
// path argument --> first argument, always a string
// callback function -->
//    every one has to reference a request object and response object in the params

app.get('/:greetings', (req, res) => {
    const username = req.query.username;

    res.send(`Hello there, ${username}!`)
});


app.listen(3000, () => {
    console.log('listening on port 3000')
});


























// return Math.random() * (max-min) + min;