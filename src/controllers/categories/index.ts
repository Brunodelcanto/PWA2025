import { Request, Response } from "express";
import Category from "../../models/category";
import { error } from "console";

const  getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      message: "Categories obtained successfully",
      data: categories,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCategoriesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      res.status(404).json({
        message: "Category not found",
        error: true,
      });
      return;
    }
    res.status(200).json({
      message: "Category obtained successfully",
      data: category,
      error: false,
    })
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    })
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!category) {
      res.status(404).json({
        message: "Category not found",
        error: true,
      });
      return
    }
    res.status(200).json({
      message: "Category updated successfully",
      data: category,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
}

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({
      message: "Category created successfully",
      data: category,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      res.status(404).json({
        message: "Category not found",
        error: true,
      });
      return;
    }
    res.status(200).json({
      message: "Category deleted successfully",
      error: false,
    })
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
}

export { getCategories, createCategory, getCategoriesById, updateCategory,deleteCategory };