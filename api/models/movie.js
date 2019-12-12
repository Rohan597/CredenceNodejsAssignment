const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    summary: { type: String, required: true },
    movieImage: {type: String, required: true}
});

module.exports = mongoose.model('Movie', movieSchema);