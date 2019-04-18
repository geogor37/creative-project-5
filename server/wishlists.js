const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const wishlistSchema = new mongoose.Schema({
  name: String,
  items: [{ type: String }]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

// Get all the wishlists that have been created.
router.get('/api/wishlists', async (req, res) => {
  try {
    let wishlists = await Wishlist.find();
    res.send(wishlists);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a new wishlist; takes a title for the list.
router.post('/api/wishlists', async (req, res) => {
  const wishlist = new Wishlist({
    name: req.body.title,
    items: []
  });
  try {
    await wishlist.save();
    res.send(wishlist);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/api/wishlists/:id', async (req, res) => {
  let id = req.params.id;
  let newName = req.body.name;
  console.log("ID to modify: " + id);
  let list = await Wishlist.findOne({
    _id: id
  });
  list.name = newName;
  list.save();
  res.send(list);
});

// Delete the wishlist with the given ID.
router.delete('/api/wishlists/:id', async (req, res) => {
  let id = req.params.id;
  console.log("ID to delete: " + id);
  await Wishlist.deleteOne({
    _id: id
  });
  res.sendStatus(200);
});

module.exports = {
  model: Wishlist,
  routes: router,
};
