const Course = require('../models/Course')

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({})
            .exec()
            .then(courses => {
                res.json(courses)
            })
            .catch(err => {
                res.status(400).json({ error: 'ERROR!!!' })
            })

        // res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController