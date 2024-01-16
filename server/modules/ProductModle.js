import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cloudinary_id: {
    type: String,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "category",
    required: true,
  },
  shipping: {
    type: Boolean,
    required: true,
  },
});

export const productModle = mongoose.model("product", ProductSchema);
