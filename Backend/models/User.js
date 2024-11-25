const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  fullName: { type: String},
  gender: { type: String  },
  birthday: { type: Date },
  height: { type: Number },
  weight: { type: Number },
  specialNote: { type: String },
  photoLink: { type: String },
  registerDate: { type: Date, default: Date.now },
  homePhone: { type: String },
  homeAddress: { type: String},
  batchNumber: { type: String },
  email: { type: String , required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
  guardianDetails: {
    name: { type: String },
    phoneNumber: { type: String },
    id: { type: String},
    job: { type: String },
    address: { type: String },
  },
});

module.exports = mongoose.model('User', userSchema);
