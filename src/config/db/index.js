const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, // fix unique
        })
        console.log('Connect successfully!!!')
    } catch(err) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect } 