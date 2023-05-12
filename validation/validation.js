const {check, validationResult} = require('express-validator')

exports.categoryCheck = [
    check('category_name',"Category name is required").notEmpty()
    .isLength({min:3, max:20}).withMessage('category name must be between 3 and 20 characters')
]

exports.productCheck = [
    check('product_name', "product name is required").notEmpty()
    .isLength({min:3, max:20}).withMessage('product name must be between 3 and 20 characters'),
    
    check('product_price','Product price is required').notEmpty()
    .isNumeric().withMessage("Price must be a number"),

    check('count_in_stock', 'Count in stock is required').notEmpty()
    .isNumeric().withMessage("Count in stock must be a number"),

    check('product_description','Product description is required').notEmpty()
    .isLength({min:25}).withMessage("Description must be at least 25 characters"),

    check('category','Category is required').notEmpty()
]



exports.userCheck = [
    check('username', 'Username is required').notEmpty()
    .isLength({min:3}).withMessage("Username must be at least 3 characters")
    .isLength({max: 30}).withMessage("Username must not be more than 30 characters"),

    check('email', 'Email is required').notEmpty()
    .isEmail().withMessage("Email format incorrect"),

    check('password',"Password is required").notEmpty()
    .not().isIn(['asdf1234', 'password' , 'kathmandu']).withMessage("Cannot use common words for password")
    .matches(/[a-z]/).withMessage("Password must contain at least one lowercase alphabet")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase alphabet")
    .matches(/[0-9]/).withMessage("Password must contain at least one number")
    .matches(/[!@#$+_-]/).withMessage("Password must contain at least one speacial character(!@#$+_-)")
    .isLength({min:8,max:20}).withMessage("Password must be between 8 to 20 characters")
]

exports.validationCheck = (req, res, cb) => {
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()[0].msg})
        // return res.status(400).json({error:errors.array().map(err=>err.msg)})
    }
    cb()
}