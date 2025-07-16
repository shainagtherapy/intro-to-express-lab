const express = require('express');

const app = express()






// hello world route
// http method --> get
// path argument --> first argument, always a string
// callback function -->
//    every one has to reference a request object and response object in the params

app.get('/:greetings', (req, res) => {
    const username = req.query.username;

    res.send(`What a delight to see you again, ${username}!`)
});


app.listen(3000, () => {
    console.log('listening on port 3000')
});



app.get('/roll', (req,res) => {
    const dice = [1, 2, 3, 4, 5, 6]
    const roll = req.query.number;
    let i = 0
    const number = dice[Math.floor(Math.random() * dice.length)];

    res.send(`You rolled ${number}`);
})