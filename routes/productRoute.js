const express = require('express')
const { addProduct, getAllProducts, getProductsByCategory, updateProduct } = require('../controller/productController')
const { authorize } = require('../controller/userController')
const upload = require('../utils/fileUpload')
const router = express.Router()

router.post('/addproduct', upload.single('product_image'), authorize, addProduct)
router.get('/getallproducts',getAllProducts)
router.get('/productdetails/:id', getProductsByCategory)
router.put('/updateproduct/:id', authorize, updateProduct)

// product detail
// delete product


module.exports = router