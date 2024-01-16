import JWT from "jsonwebtoken";
import { userModle } from "../modules/UserModal.js";

export const requiredSignIn = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const decode = await JWT.verify(
      req.headers.authorization,
      process.env.SECRIT_KEY
    );

    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(402).send({
      success: false,
      msg: "Invalid Token",
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModle.findById(req.user._id);

    if (user.role === 1) {
      return next();
    } else {
      return res.status(402).send({
        success: false,
        msg: "Anauthoriz User",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(402).send({
      success: false,
      msg: "Error in Admin",
    });
  }
};
