import bcrypt, { compare } from "bcrypt";
import Jwt  from "jsonwebtoken";

// hesh password
export const heshPassword = async (password) => {
  try {
    const salt = 10;
    const hesh = bcrypt.hash(password, salt);
    return hesh;
  } catch (error) {
    console.log(error);
  }
};

// compair Password
export const compairPassword = async (password, ExistPass) => {
  try {
    const comparedPass = await bcrypt.compare(password, ExistPass);
    return comparedPass;
  } catch (error) {
    console.log(error);
  }
};

// take JWT
export const Token = async (user) => {
  try {
    const token = await Jwt.sign({_id:user._id},process.env.SECRIT_KEY,{expiresIn:"7d"})
    return token
  } catch (error) {
    console.log(error);
  }
};
