const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var mongoosePaginate = require("mongoose-paginate");

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String
});
UserSchema.plugin(mongoosePaginate);
const User = mongoose.model("users", UserSchema);

module.exports = User;
