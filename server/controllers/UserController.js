import { Token, compairPassword, heshPassword } from "../helper/UserAuth.js";
import { userModle } from "../modules/UserModal.js";

export const registionController = async (req, res) => {
  try {
    const { fname, lname, email, number, password, address } = req.body;

    if (!fname || !lname || !email || !number || !password || !address) {
      return res.status(402).send({
        success: false,
        msg: "All Fileds Required",
      });
    }

    const ExistUser = await userModle.findOne({ email });

    if (ExistUser) {
      return res.status(500).send({
        success: false,
        msg: "User Already Exist",
      });
    }

    //     password hesh
    const heshedPass = await heshPassword(password);

    const user = await new userModle({
      fname,
      lname,
      email,
      number,
      password: heshedPass,
      address,
    }).save();

    return res.status(201).send({
      success: true,
      user,
      msg: "Registration Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(201).send({
      success: false,
      msg: "Registration Failed Try Again",
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(402).send({
        success: false,
        msg: "All Fileds Required",
      });
    }

    const user = await userModle.findOne({ email });

    if (!user) {
      return res.status(401).send({
        success: false,
        msg: "Invalid Email & Password",
      });
    }

    // Match password /compa
    const matchPass = await compairPassword(password, user.password);

    if (!matchPass) {
      return res.status(401).send({
        success: false,
        msg: "Invalid Email & Password",
      });
    }

    // token
    const token = await Token(user);

    return res.status(201).send({
      msg: "Login Successfully",
      success: true,
      user: {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        number: user.number,
        address: user.address,
        role: user.role,
      },
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
};

// privet Routes

export const userPrivetController = async (req, res) => {
  try {
    await res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

export const adminPrivetController = async (req, res) => {
  try {
    await res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

// update Profile

export const updateProfileController = async (req, res) => {
  try {
    const { fname, lname, email, number, address } = req.body;

    const user = await userModle.findById(req.user._id);

    const updateUserProfile = await userModle.findByIdAndUpdate(
      user._id,
      {
        fname: fname || user.fname,
        lname: lname || user.lname,
        email: email || user.email,
        number: number || user.number,
        address: address || user.address,
      },
      { new: true }
    );

    res.status(200).send({
      success:true,
      msg:"Profile Successfully Updateed",
      updateUserProfile
    })
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success:false,
      msg:"Something Went Wrong Profile",
      error
    })
  }
};
