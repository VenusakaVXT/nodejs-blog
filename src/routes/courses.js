const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.post('/handle-delete-form-action', courseController.handleDeleteFormAction)
router.put('/:id', courseController.update)
router.delete('/:id', courseController.remove)
router.post('/handle-restore-form-action', courseController.handleRestoreFormAction)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id/force', courseController.forceDelete)
router.get('/:slug', courseController.show)

module.exports = router