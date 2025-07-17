const express = require('express');

const app = express()

// hello world route
// http method --> get
// path argument --> first argument, always a string
// callback function -->
//    every one has to reference a request object and response object in the params

// //Exercise 1
// app.get('/:greetings', (req, res) => {
//     const username = req.query.username;

//     res.send(`What a delight to see you again, ${username}!`)
// });

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
app.get('/collectibles/item', (req,res) => {
    
    const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ]

    const item = req.params.index;

    if (!item) {
        res.send(`This item is not yet in stock. Check back soon!`)
    } else
        res.send(`So you want the ${item.name}? For ${price}, it can be yours!`)
    
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
// parseInt?

const minPrice = req.query['min-price'];
const maxPrice = req.query['max-price'];
const shoeType = req.query.type;

if (minPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= Number(minPrice))
}
//res.send(`Shoes over $50: ${minPrice}`)

if (maxPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(maxPrice))
}
//res.send(`Shoes under ${maxPrice}`)

if (shoeType) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === shoeType);
}

res.send(`Shoes over $50: ${minPrice}`)
});

