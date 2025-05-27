import { Request, Response } from "express";
import Category from "../../models/category";
import Product from "../../models/product";
import { error } from "console";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products obtained successfully",
      data: products,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
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
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      message: "Product created successfully",
      data: product,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id).populate("products");

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
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!product) {
      res.status(404).json({
        message: "Product not found",
        error: true,
      });
      return;
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: product,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({
        message: "Product not found",
        error: true,
      });
      return;
    }
    res.status(200).json({
      message: "Product deleted successfully",
      error: false,
    })
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
}

const deactivateProduct = async (req: Request, res: Response) =>{
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    )
    if (!product) {
      res.status(404).json({
        message: "Product not found",
        error: true,
      });
      return;
    }
    res.status(200).json({
      message: "Product deactivated successfully",
      data: product,
      error: false,
    })
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const activateProduct = async (req: Request, res: Response) =>{
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      { isActive: true },
      { new: true }
    )
    if (!product) {
      res.status(404).json({
        message: "Product not found",
        error: true,
      });
      return;
    }
      res.status(200).json({
      message: "Product activated successfully",
      data: product,
      error: false,
    })
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const searchProductsByName = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const products = await Product.find({
      name: { $regex: name, $options: "i"}
    })
    res.status(200).json({
      message: "Products obtained successfully",
      data: products,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export { 
    getProducts,
    getProductById,
    createProduct,
    getProductsByCategory,
    updateProduct,
    deleteProduct,
    deactivateProduct,
    activateProduct,
    searchProductsByName
  };