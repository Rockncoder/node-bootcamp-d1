const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new mongoose.Schema({
  name: String,
  userid: String,
  updated_at: {type: Date, default: Date.now}
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);