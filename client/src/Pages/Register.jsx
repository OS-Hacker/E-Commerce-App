import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { authHook } from "../context/Appcontext";

const Register = () => {
  const [fname, setfName] = useState(null);
  const [lname, setlName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [address, setAddress] = useState(null);

  const formData = { fname, lname, email, number, password,address };
  const Navigate = useNavigate();

  const [state, setState] = authHook();

  const registerSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios.post(`${import.meta.env.VITE_REACT_API}/registion`, formData);

      if (data.success) {
        toast.success(data.msg);
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  state?.token && Navigate("/");

  return (
    <Wrapper>
      <div className="register-container alert alert-success">
        <form className="m-3" onSubmit={registerSubmitHandler}>
          <h1 className="text-center">Sign Up</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control mb-3"
                id="inp"
                name="fname"
                placeholder="First name"
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="inp"
                name="lname"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control mb-3"
                id="inp"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="inp"
                className="form-control"
                name="number"
                placeholder="Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="form-floating mb-4">
            <input
              type="text"
              name="password"
              id="inp2"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            <label htmlFor="">Password</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="text"
              name="address"
              id="inp2"
              placeholder=" "
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="">Address</label>
            <button
              type="submit"
              className="btn btn-success mt-4 text-uppercase"
              id="register-btn"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  label {
    font-size: 1.6rem;
  }
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  form {
    width: 500px;
    border: 2px solid black;
    padding: 20px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 10px 10px 2px 5px;
  }
  #inp {
    height: 57px;
    font-size: 1.5rem;
    border-radius: 20px;
  }

  #register-btn {
    width: 100%;
    font-size: 1.8rem;
    border-radius: 20px;
  }
  #inp {
    height: 45px;
    font-size: 1.5rem;
  }
  #inp2 {
    height: 57px;
    font-size: 1.5rem;
  }
`;

export default Register;
