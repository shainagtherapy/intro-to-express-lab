const express = require('express');

const app = express()


// hello world route
// http method --> get
// path argument --> first argument, always a string
// callback function -->
//    every one has to reference a request object and response object in the params

app.get('/greetings/<username-parameter>', (req, res) => {
    res.send(`Hello there, ${username}!`)
});


application.listen(3000, () => {
    console.log('listening on port 3000')
})


// return Math.random() * (max-min) + min;