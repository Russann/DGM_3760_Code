//Json object that lays out what a book looks like
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//lay out in Json what a book looks like
var bookModel = new Schema({
    title: {
      type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default: false}
});
//load this model into mongoose and call it book, using bookModel as an instance
module.exports = mongoose.model('Book', bookModel);
