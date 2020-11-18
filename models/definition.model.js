const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DefinitionSchema = new Schema({
  term: String,
  definition: String,
});

console.log("Getting ready to model 'Definition'!");
module.exports = mongoose.model("Definition", DefinitionSchema);
console.log("Finished modeling 'Definition'!");
