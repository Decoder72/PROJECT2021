const mongoose = require("mongoose");

const sentenceModel = mongoose.Schema({
  sentence: { type: String },
  subject: {
    value: { type: String },
    modifiers: [
      {
        type: { type: String },
        value: { type: String },
      },
      {
        type: { type: String },
        value: {type: String},
        modifiers: [
          {
            type: { type: String },
            value: {type: String},
            modifiers: [
              {
                type: { type: String },
                value: { type: String },
              }
            ]
          }
        ]
      }
    ]
  },
  verb: {
    value: { type: String }
  }

}   


);
module.exports = mongoose.model('Sentence', sentenceModel);