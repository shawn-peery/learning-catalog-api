// Using Node.js `require()`
const mongoose = require("mongoose");

const USER_PASS = process.env.USER_PASS;
const ATLAS_CONNECTION = process.env.ATLAS_CONNECTION.replace(
  "<password>",
  encodeURI(USER_PASS)
);

module.exports.connect = () => {
  console.log(`ATLAS_CONNECTION: ${ATLAS_CONNECTION}`);
  return mongoose.connect(ATLAS_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTpology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
