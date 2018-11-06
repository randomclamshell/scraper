//Dependencies
const express = require("express");
const mongojs = require("mongojs");
const logger = require("logger");
const mongoose = require("mongoose");

//The Scraping tools
const cheerio = require("cheerio");
const axio = require("axios");

//Models
const db = require("./models");

var PORT = 3000;

//Initializing Express
const app = express();

//Middleware configuration

//Morgan for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

//ROUTES

//GET route for scraping
app.get("/scrape", function (req, res) {
  axios.get("https://www.goodreads.com/quotes")
    .then(function (response) {

//I took the body of the html and assigned it to a variable
      var $ = cheerio.load(response.data);

//Targeting anything in a div that has a class of quoteText, looping, and putting into an object
      $("div.quoteText").each(function (i, element) {
        
        var result = {};



      })
  })
})
