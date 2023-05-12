const express = require('express')
const { sendStripeKey, processPayment } = require('../controller/paymentController')
const { authorize } = require('../controller/userController')
const router = express.Router()

router.get('/getStripeKey', sendStripeKey)
router.post('/processpayment', authorize, processPayment)

module.exports = router