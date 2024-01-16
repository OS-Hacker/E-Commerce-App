import React, { useEffect, useState } from "react";
import Adminlist from "../Component/Adminlist";
import { styled } from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Category_form from "../Component/Category_form";

const Create_Category = () => {
  const [category, setCategorys] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_REACT_API}/get-category`);
    setCategorys(data.category);
  };

  useEffect(() => {
    getData();
  }, []);

  const [name, setName] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_REACT_API}/create-category`, { name });
      if (data.success) {
        toast.success(data.msg);
        getData();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_REACT_API}/delete-category/${id}`);

      if (data.success) {
        toast.success(data.msg);
        getData();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  // Modle
  const [Modle, setModle] = useState(false);

  // update
  const [value, setvalue] = useState("");
  const [Id, setId] = useState("");

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${import.meta.env.VITE_REACT_API}/update-category/${Id}`, {
        name: value,
      });

      if (data.success) {
        toast.success(data.msg);
        getData()
        setModle(false)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Wrapper>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-sm-4">
            <Adminlist />
          </div>
          <div className="col-sm-8 text-center mt-5">
            <Category_form handleSubmit={submitHandler} setChnage={setName} />

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Categorys</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {category.map((categorys) => {
                  const { _id, name } = categorys;
                  return (
                    <tr key={_id}>
                      <td>{name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info text-uppercase me-3"
                          onClick={() => 
                           { setModle(true), setvalue(name), setId(_id);}
                          }
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger text-uppercase"
                          onClick={() => deleteHandler(_id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Modal open={Modle} footer={null} onCancel={()=>setModle(false)}>
          <Category_form
            handleSubmit={updateHandler}
            setChnage={setvalue}
            value={value}
          />
        </Modal>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  table {
    font-size: 1.7rem;
  }
  .btn {
    font-size: 1.5rem;
  }
  #inp {
    height: 6vh;
    font-size: 1.6rem;
    width: 500px;
    margin: auto;
    display: inline-block;
  }
`;

export default Create_Category;
