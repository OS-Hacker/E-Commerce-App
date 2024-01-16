import express from "express";
import {
  loginController,
  registionController,
  userPrivetController,
  adminPrivetController,
  updateProfileController,
} from "../controllers/UserController.js";
import { isAdmin, requiredSignIn } from "../middleware/AuthProtect.js";

const UserRouter = express.Router();

UserRouter.post("/registion", registionController);

UserRouter.post("/login", loginController);

// privet Routes

UserRouter.get("/user-privet", requiredSignIn, userPrivetController);

UserRouter.get("/admin-privet", requiredSignIn, isAdmin, adminPrivetController);

// profile update 

UserRouter.post("/profile", requiredSignIn, updateProfileController);

export default UserRouter;
