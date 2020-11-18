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
  console.log("ID: " + req.params.id);
};

// UPDATE - ONE BY ID
exports.updateOneById = (req, res) => {
  console.log("Received a updateOneById request.");
  console.log(req.body);
  console.log("ID: " + req.params.id);
};

// DELETE - ONE BY ID
exports.deleteOneById = (req, res) => {
  console.log("Received a deleteOnByID request.");
  console.log("ID: " + req.params.id);
};
