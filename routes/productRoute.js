const express = require('express')
const { addProduct, getAllProducts, getProductsByCategory, updateProduct, getProductDetails, getFilteredProducts, getRelatedProducts } = require('../controller/productController')
const { authorize } = require('../controller/userController')
const upload = require('../utils/fileUpload')
const { productCheck, validationCheck } = require('../validation/validation')
const router = express.Router()

router.post('/addproduct', upload.single('product_image'), authorize, productCheck, validationCheck,addProduct)
router.get('/getallproducts',getAllProducts)
router.get('/productbycategory/:id', getProductsByCategory)
router.get('/getproductdetails/:id', getProductDetails)
router.put('/updateproduct/:id', authorize, updateProduct)
router.post('/getfilteredproducts', getFilteredProducts)
router.get('/getrelatedproducts/:id', getRelatedProducts)

// product detail
// delete product


module.exports = router