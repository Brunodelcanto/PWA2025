"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const category_1 = __importDefault(require("../../models/category"));
const product_1 = __importDefault(require("../../models/product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find();
        res.status(200).json({
            message: "Products obtained successfully",
            data: products,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_1.default.findById(id);
        if (!product) {
            res.status(404).json({
                message: "Product not found",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Product obtained successfully",
            data: product,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new product_1.default(req.body);
        yield product.save();
        res.status(201).json({
            message: "Product created successfully",
            data: product,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.createProduct = createProduct;
const getProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield category_1.default.findById(id).populate("products");
        if (!category) {
            res.status(404).json({
                message: "Category not found",
                error: true,
                data: undefined,
            });
            return;
        }
        res.status(200).json({
            message: "Products obtained successfully",
            error: false,
            data: category.products,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.getProductsByCategory = getProductsByCategory;
