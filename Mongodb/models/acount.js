const mongoose = require('mongoose');

const accountSchema  = mongoose.Schema({
  username: String,
  password: String
});

accountSchema.statics.loginTk = function(item) {
  return this.find(item).lean();
}

module.exports = mongoose.model('Account', accountSchema);
