const express = require('express')
const { register, verifyUser, resendVerification, signIn, signOut, forgetPassword, resetPassword, getUserDetails, getUserList, toggleRole, authorize } = require('../controller/userController')
const { userCheck, validationCheck } = require('../validation/validation')
const router = express.Router()

router.post('/register', userCheck, validationCheck, register)
router.get('/verification/:token', verifyUser)
router.post('/resendverification', resendVerification)
router.post('/signin', signIn)
router.get('/signout',signOut)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)
router.get('/getuserdetails/:id', getUserDetails)
router.get('/getuserlist', getUserList)
router.get('/togglerole/:id', authorize, toggleRole)

// userlist
// userdetail
// finduserbyemail
// findduserbyusername
// updateuser
// deleteuser

module.exports = router