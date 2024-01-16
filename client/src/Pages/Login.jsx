import axios from "axios";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { authHook } from "../context/Appcontext";
import { Button } from "../style/Button";
import Spinner2 from '../Component/Spinner2'

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const formData = { email, password };

  const Navigate = useNavigate();

  // context
  const [state, setState] = authHook();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_API}/login`,
        formData
      );

      if (res.data.success) {
        toast.success(res.data.msg, {
          position: "bottom-left",
        });

        setState({
          ...state,
          user: res.data.user,
          token: res.data.token,
        });

        //  user & token store in localStorage
        localStorage.setItem("user", JSON.stringify(res.data));

        // Navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg, {
        position: "bottom-left",
      });
    }
  };

  state?.token && Navigate("/");

  console.log(state.loading);
  return (
    <Wrapper>
      {state.loading ? (
        <Spinner2 />
      ) : (
        <>
          <div className="register-container alert alert-light">
            <form onSubmit={loginSubmitHandler}>
              <h1 className="text-center">Login</h1>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  name="email"
                  id="inp"
                  placeholder=" "
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Email</label>
              </div>

              <div className="form-floating ">
                <input
                  type="password"
                  name="password"
                  id="inp"
                  placeholder=" "
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="">Password</label>
              </div>
              <div
                className=""
                style={{
                  fontSize: "1.7rem",
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "10px",
                }}
              >
                <span> Not registered ? </span>
                <NavLink to="/Register" className="ms-2">
                  Create an account
                </NavLink>
              </div>
              <Button type="submit" className="mt-3 w-100">
                Login
              </Button>
            </form>
          </div>
        </>
      )}
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
    width: 400px;
    border: 2px solid black;
    padding: 20px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 10px 10px 2px 5px;
  }
  #inp {
    height: 57px;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  #register-btn {
    width: 100%;
    font-size: 1.8rem;
  }
`;

export default Login;
