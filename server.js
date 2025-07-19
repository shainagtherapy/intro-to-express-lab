const express = require('express');

const app = express()

// hello world route
// http method --> get
// path argument --> first argument, always a string
// callback function -->
//    every one has to reference a request object and response object in the params

//Exercise 1
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`What a delight to see you again, ${username}!`) //http://localhost:3000/greetings/ShainaG
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});


// Exercise 2
app.get('/roll/:number', (req,res) => {
    const roll = req.params.number;
    console.log(roll)
    const number = Math.floor(Math.random() * parseInt(roll))
    console.log(number)
    if (number === NaN) {
        res.send('You must specify a number.');
    }
    res.send(`You rolled ${number}`);
})



// Exercise 3
app.get('/collectibles/:item', (req,res) => {
    
    const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ]

    const index = Number(req.params.item);
    const item = collectibles[index];

    if (!item) {
        res.send(`This item is not yet in stock. Check back soon!`)
    } else
        res.send(`So you want the ${item.name}? For ${item.price}, it can be yours!`)
    
})

// Exercise 4
app.get('/shoes', (req,res) => {
    const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ]


let filteredShoes = shoes;

const minPrice = Number(req.query['min-price']);
const maxPrice = Number(req.query['max-price']);


if (minPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice)
}


if (maxPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice)
}
//res.send(`Shoes under ${maxPrice}`)
const shoeType = req.query.type;
if (shoeType) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === shoeType);
}

res.json(filteredShoes); // This shows a dark screen and I looked this up but still not sure, is this an error?!

});

// localhost:3000/hello?name=Christy&age=32
// app.get('/hello', (req, res) => {
//     res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
// });