const express = require('express')
const router = express.Router()

const newController = require('../controllers/NewController')

router.get('/:detail', newController.show)
router.get('/', newController.index)

module.exports = router