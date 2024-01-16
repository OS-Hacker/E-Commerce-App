import React, { useEffect, useState } from "react";
import Adminlist from "../Component/Adminlist";
import axios from "axios";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Show_Product = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_REACT_API}/get-product`);
      setProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [product, setProduct] = useState([]);

  // delete Product
  const deleteProductHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_REACT_API}/delete-product/${id}`);

      if (data.success) {
        toast.success(data.msg);
        getProduct();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Wrapper>
      <div className="container" >
        <div className="row">
          <div className="col-sm-4">
            <Adminlist />
          </div>
          <div className="col-sm-8 text-center mt-5"  style={{ height: "100%" }}>
            <div className="grid">
              {product.map((products) => {
                const {
                  _id,
                  title,
                  slug,
                  description,
                  image,
                  price,
                  quantity,
                } = products;
                return (
                  <div className="" key={_id}>
                    <div className="p-2 m-2 row text-center">
                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-body">
                            
                              <img
                                src={image}
                                alt="Img"
                                width="100px"
                                height="100px"
                                style={{ borderRadius: "50%" }}
                              />
                              <h1 className="mt-2 font">{title}</h1>
                              <h5 className="Cfont">{description}</h5>
                              <div className="">
                                <i className="me-4 Cfont">{price}</i>
                                <i className="Cfont">{quantity}</i>
                              </div>
                            <Link
                              type="button"
                               className="btn btn-info mt-2 text-uppercase Cfont"
                              to={`/Deshbored/admin/UpdateProductPage/${slug}`}
                            >
                              update
                            </Link>
                            <button
                              type="button"
                              className="btn btn-danger ms-2 mt-2 text-uppercase Cfont"
                              onClick={() => deleteProductHandler(_id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .font{
    font-size: 2rem;
  }
  .Cfont{
    font-size: 1.6rem;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1fr;
  }

  .container{
    height: 100%;
  }
`;

export default Show_Product;
