import express, { Router } from "express";
import { isAdmin, requiredSignIn } from "../middleware/AuthProtect.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSimilarProduct,
  searchFilterController,
  singleProductController,
  updateProductController,
} from "../controllers/ProductController.js";
import expressformidable from "express-formidable";

const productRouter = express.Router();

productRouter.post(
  "/create-product",
  requiredSignIn,
  isAdmin,
  expressformidable(),
  createProductController
);

productRouter.get("/get-product", getProductController);

productRouter.get("/single-product/:slug", singleProductController);

productRouter.put(
  "/update-product/:id",
  requiredSignIn,
  expressformidable(),
  isAdmin,
  updateProductController
);

productRouter.delete(
  "/delete-product/:id",
  requiredSignIn,
  isAdmin,
  deleteProductController
);

productRouter.get("/search-filter/:keyword", searchFilterController);

productRouter.get("/similar-product/:pId/:cId", getSimilarProduct);

export default productRouter;
