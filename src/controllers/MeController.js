const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../util/mongoose')

class MeController {
    // [GET] /me/store/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/store-courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
}

module.exports = new MeController