const express = require('express')

// product controller functions
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

// GET all products
router.get('/', getProducts)

//GET a single product
router.get('/:id', getProduct)

//POST a new product
router.post('/', createProduct)

//DELETE a product
router.delete('/:id', deleteProduct)

//UPDATE a product
router.patch('/:id', updateProduct)

module.exports = router;