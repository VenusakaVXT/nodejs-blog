const express = require('express')
const router = express.Router()

const meController = require('../controllers/MeController')

router.get('/store/courses', meController.storeCourses)

module.exports = router