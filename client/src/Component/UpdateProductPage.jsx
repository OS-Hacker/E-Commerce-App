import React, { useEffect, useState } from "react";
import Adminlist from "../Component/Adminlist";
import { Select } from "antd";
import axios from "axios";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../style/Button";

const UpdateProductPage = () => {
  const [category, setCategorys] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_REACT_API}/get-category`);
    setCategorys(data.category);
  };

  useEffect(() => {
    getData();
  }, []);

  const [categoryId, setCategoryId] = useState("");

  //  image

  const [image, setImage] = useState("");

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // tital

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");

  // getData

  // getId
 const {slug} = useParams()


  // setEmage 
  const [Image, setEmage] = useState()

  //  Update for id 
  const [id,setId] = useState("")
  

  const IdData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_REACT_API}/single-product/${slug}`);
    setCategoryId(data.product.category);
    setTitle(data.product.title);
    setDescription(data.product.description);
    setPrice(data.product.price);
    setQuantity(data.product.quantity);
    setEmage(data.product.image)
    setShipping(data.product.shipping)
    setId(data.product._id)
  };

  useEffect(() => {
    IdData();
  }, [slug]);


  const goProductPage = useNavigate();

  // btn spinner 
  const [spinner,setSpinner] = useState(false)

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();

      productData.append("image", image); 
      productData.append("category", categoryId);
      productData.append("title", title);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);

      setSpinner(true)

      const { data } = await axios.put(`${import.meta.env.VITE_REACT_API}/update-product/${id}`, productData);

      if (data.success) {
        toast.success(data.msg);
        setSpinner(false)
        goProductPage("/Deshbored/admin/Show_Product");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
      setSpinner(false)
    }
  };


  
  return (
    <Wrapper>
      <div
        className="container"
        style={{ height: "100%", marginBottom: "10px" }}
      >
        <div className="row">
          <div className="col-sm-4">
            <Adminlist />
          </div>
          <div className="col-sm-8 text-center mt-5">
            <form onSubmit={HandleSubmit}>
              <Select
                bordered={null}
                placeholder="Select Category"
                className="form-select"
                showSearch
                value={categoryId}
                style={{ width: "100%", marginTop: "8px" }}
                onChange={(value) => setCategoryId(value)}
              >
                {category.map((categorys) => {
                  return (
                    <Option value={categorys._id} key={categorys._id}>
                      {categorys.name}
                    </Option>
                  );
                })}
              </Select>
              <label
                htmlFor="inp1"
                className="form-control mt-4 alert alert-info"
                style={{ height: "6vh", fontSize: "1.5rem", cursor: "pointer" }}
              >
                {image ? (
                  image.name
                ) : (
                  <i
                    className="bi bi-cloud-arrow-up-fill"
                    style={{
                      fontSize: "35px",
                      position: "relative",
                      bottom: "15px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  ></i>
                )}
                <input
                  type="file"
                  name="image"
                  id="inp1"
                  onChange={imageHandler}
                />
              </label>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="image"
                  className="img"
                />
              ) : (
                <img
                  src={Image}
                  alt="image"
                  className="img"
                />
              )}

              {/* title */}

              <input
                type="text"
                className="form-control mt-4"
                name="title"
                id=""
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                style={{ height: "7vh", marginBottom: "3px", fontSize: "15px" }}
                value={title}
              />
              <textarea
                name=""
                id=""
                cols="130"
                rows="2"
                className="form-control mt-4"
                placeholder="Enter Description"
                style={{ fontSize: "15px" }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
              <input
                type="text"
                className="form-control mt-4"
                name="price"
                id=""
                value={price}
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
                style={{ height: "7vh", marginBottom: "3px", fontSize: "16px" }}
              />
              <input
                type="text"
                className="form-control mt-4"
                name="quantity"
                value={quantity}
                id=""
                placeholder="Enter Quantity"
                onChange={(e) => setQuantity(e.target.value)}
                style={{ height: "7vh", marginBottom: "3px", fontSize: "15px" }}
              />
              <Select
                onChange={(value) => setShipping(value)}
                className="form-select mt-3"
                placeholder="Enter Shipping"
                bordered={null}
                value={shipping}
              >
                <Option value={true}>YES</Option>
                <Option value={false}>NO</Option>
              </Select>
              <Button type="submit" className="mt-3 w-100">
              {spinner ?  <span className="spinner-border spinner-border-lg"  role="status" aria-hidden="true"></span> : "UPDATE"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #inp1 {
    display: none;
  }
  .img {
    width: 180px;
    height: 100px;
    margin-top: 5px;
    box-shadow: 4px 3px 4px black;
  }
`;

export default UpdateProductPage;
