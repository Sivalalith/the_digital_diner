const express = require("express");
const Menu = require("../models/menu.js");

const menuRouter = express.Router();

menuRouter.get("/", async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.json({
      success: true,
      menu: menu,
    });
  } catch (err) {
    console.error("Error occurred while fetching menu data from the database.");
  }
});

module.exports = menuRouter;
