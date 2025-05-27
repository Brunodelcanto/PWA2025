import express from 'express';
import {createCategory, deleteCategory, getCategories, getCategoriesById, updateCategory} from "../../controllers/categories/index";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoriesById)
router.delete("/:id", deleteCategory);
router.patch("/:id", updateCategory)
router.post("/", createCategory);

export default router;
