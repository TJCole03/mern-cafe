require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Drums', sortOrder: 10},
    {name: 'Hardware', sortOrder: 20},
    {name: 'Cymbals', sortOrder: 30},
    {name: 'Memorabilia', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: '80s hair metal snare', category: categories[0], price: 8000.00},
    {name: 'Hi-hat stand from indie bar in Brooklyn', category: categories[1], price: 200.00},
    {name: 'Trash can lid cymbal', category: categories[2], price: 200.00},
    {name: 'Buddy Richs floor tom that got filled with milk', category: categories[3], price: 4000.00},
    {name: 'Neil Pearts bike', category: categories[3], price: 2112.00},
    {name: 'Questloves hair pick', category: categories[3], price: 750.00},
    // {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
    // {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
    // {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
    // {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
    // {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
    // {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    // {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    // {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    // {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    // {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    // {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    // {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    // {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    // {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    // {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    // {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    // {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();