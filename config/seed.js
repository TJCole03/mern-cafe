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
    {name: '80s hair metal snare', imageURL: '/img/80s-snare.png', description: 'For when you turn 55 and join a Motley Crue tribute band', category: categories[0], price: 8000.00},
    {name: 'House kit from River City Blues in Harrisburg, PA', imageURL: '/img/punk-set.png', description: 'Sabian B8 series cymbals from 2000, Ludwig hardware from the 70s, brand new 2018 Evans hydraulic heads both top and bottom', category: categories[0], price: 200.00},
    {name: 'The top screwy thing of a cymbal stand that always falls off', imageURL: '/img/cymbal-top.png', description: '"Where did the bloody thing go??? I just had it!!"', category: categories[1], price: 200.00},
    {name: 'Trash can lid cymbal', imageURL: '/img/trash-can-lid.png', description: 'Goes with Lars Ulrichs snare drum in St. Anger', category: categories[2], price: 200.00},
    {name: 'Broken crash', imageURL: '/img/broken-crash.png', description: 'Doubles as a ninja star!', category: categories[2], price: 200.00},
    {name: 'The kick drum Keith Moon filled with cherry bombs', imageURL: '/img/moon-kit.png', description: 'Look it up. It really happened.', category: categories[3], price: 4000.00},
    {name: 'Neil Pearts bike', imageURL: '/img/neil-bike.png', description: 'Traveled only over 100,000 miles', category: categories[3], price: 2112.00},
    {name: 'Questloves hair pick', imageURL: '/img/amir-pick.png', description: 'The mans iconic look must not go unnoticed', category: categories[3], price: 750.00},
    {name: 'Animal puppet', imageURL: '/img/animal-puppet.png', description: 'This is the real deal. Time to be an adult and buy yourself an Animal from The Muppets puppet', category: categories[3], price: 2100.00},
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