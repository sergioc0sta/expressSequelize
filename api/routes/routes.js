const router = require('express').Router()

const user = require('../controllers/userController')

router.get('/posts', user.userController.getAllUsers)
router.post('/find', user.userController.findOneUser)
router.post('/delete', user.userController.deleteUser)
router.post('/post/:id', user.userController.updateUser)
router.post('/post', user.userController.newUser)

module.exports = router


