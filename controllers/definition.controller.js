const { query } = require("express");
const mongoose = require("mongoose");

const definitionModel = mongoose.model("Definition");

// POST - CREATE ONE
exports.createDefinition = (req, res) => {
  console.log("Received a post request.");
  console.log(req.body);
};

// GET - ALL
exports.getAll = (req, res) => {
  console.log("Received a getAll request.");
  definitionModel.find({}, (err, docs) => {
    res.json(docs);
  });
};

// GET - ONE BY ID
exports.getOneById = (req, res) => {
  console.log("Received a getOneById request.");
  definitionModel
    .findOne({ _id: req.params.id })
    .then((item) => res.json(item));
};

// UPDATE - ONE BY ID
exports.updateOneById = (req, res) => {
  console.log("Received a updateOneById request.");
  console.log("REQUEST BODY:");
  console.log(req.body);
  console.log("req.params.id: " + req.params.id);
  definitionModel.updateOne({ _id: req.params.id }, req.body).then((item) => {
    res.send("Success!");
  });
};

// DELETE - ONE BY ID
exports.deleteOneById = (req, res) => {
  console.log("Received a deleteOnByID request.");
  console.log("ID: " + req.params.id);
};
