const mongoose = require('mongoose');

//Food Items
const foodItem = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    foodType: Array,
    options: Array
})

//Drinks
const drinkItem = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    foodType: Array,
    options: Array
})

//Food Types (alcohol, lunch, dinner?)
//Keeping just in case but will be including foodTypes inside the schema
const foodType = new mongoose.Schema({
    name: String,
});

//Specifications
const specificationDrink = new mongoose.Schema({
    name: String,
    price: Number,
})

const specificationFood = new mongoose.Schema({
    name: String,
    price: Number,
})

//menu base (The matryoshka doll)
const menuSchema = new mongoose.Schema({
    // name: String,
    foodItems: [foodItem],
    drinkItems: [drinkItem],
    foodTypes: [foodType],
    specificationDrinks: [specificationDrink],
    specificationFood: [specificationFood]
});
const Menu = mongoose.model("Menu", menuSchema);

// const drink = new Menu({drinkItems: {name: "Latte", description: "Two shots of espresso topped with steamed milk and foam", price: 5}})

//Examples for visual reminders

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// });

// const Product = mongoose.model('Product', productSchema);

// const orderSchema = new mongoose.Schema({
//     products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
// });

// const Order = mongoose.model('Order', orderSchema);



// const product = new Product([
//     { name: "holy water", price: 500 },
//     { name: "holy stuff", price: 500 },
//     { name: "holy cow", price: 500 },
// ])
// product.save();
// const order = new Order()
// order.products.push(product)
// order.save();

module.exports = Menu;