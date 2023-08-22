const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 250, required: true},
    description: { type: String, maxLength: 600},
    image: { type: String, maxLength: 450},
    videoId: { type: String, maxLength: 250, required: true},
    level: { type: String, maxLength: 250},
    sumVd: { type: String, maxLength: 250},
    time: { type: String, maxLength: 250},
    slug: { type: String, slug: 'name', unique: true} // unique: used to specify that each slug value must be unique in the database.
    // createdAt: { type: Date, default: Date.now},
    // updatedAt: { type: Date, default: Date.now},
}, { timestamps: true })

Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Course', Course)