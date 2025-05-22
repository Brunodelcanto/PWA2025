import express from 'express';

import {
    getProducts,
    createProduct,
    getProductById,
    getProductsByCategory,
} from "../../controllers/products/";

const router = express.Router();

router.get ("/", getProducts);
router.post ("/", createProduct);
router.get ("/:id", getProductById);
router.get ("/category/:id", getProductsByCategory);

export default router;