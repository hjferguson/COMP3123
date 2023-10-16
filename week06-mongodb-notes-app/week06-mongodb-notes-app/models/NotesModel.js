const mongoose = require('mongoose');

const noteSchmea = new mongoose.Schema({
    title: String,
    description: String,
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    },
    dateAdded: Date,
    dateUpdated: Date
});

module.exports = mongoose.model("note", noteSchmea)