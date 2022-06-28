const { Router } = require('express')

const ContactController = require('./app/controllers/ContactController')
const CategoryController = require('./app/controllers/CategoryController')

const router = Router()
// Routes Contacts
router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.put('/contacts/:id', ContactController.update)
router.post('/contacts', ContactController.store)
// Routes Categorys
router.get('/categories', CategoryController.index)
router.get('/categories/:id', CategoryController.show)
router.post('/categories', CategoryController.store)
router.delete('/categories/:id', CategoryController.delete)
router.put('/categories/:id', CategoryController.update)

module.exports = router
