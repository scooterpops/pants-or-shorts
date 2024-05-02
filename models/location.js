const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    city: {type: String},
    country: {type: String},
    zip_code: {type: Number},
    // date: {type: Date},
    // temperature: {type: Number},
    // humidity: {type: Number},
    // precipitation_chance: {type: Number},
    // precipitation_amount: {type: Number},
    // sunshine_duration: {type: Number},
    // wind_speed: {type: Number},
    // weather_condition: {type: String},
    // sunglasses: {type: Boolean},
    // shoes_or_sandals: {type: Boolean},
    // bring_umbrella: {type: Boolean},
    // short_or_long_sleeves: {type: Boolean},
    // pants_or_shorts: {type: Boolean},
  }, {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
        return ret;
      }
    }
  });