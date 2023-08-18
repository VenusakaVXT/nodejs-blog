const express = require('express')
const router = express.Router()

const newController = require('../controllers/NewController')

router.use('/:detail', newController.show)
router.use('/', newController.index)

module.exports = router