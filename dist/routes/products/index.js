"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../../controllers/products/");
const router = express_1.default.Router();
router.get("/", products_1.getProducts);
// metodo post para crear
router.post("/", products_1.createProduct);
router.get("/:id", products_1.getProductById);
router.get("/:id", products_1.getProductsByCategory);
exports.default = router;
