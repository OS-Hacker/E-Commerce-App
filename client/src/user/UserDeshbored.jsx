import React, { useEffect, useState } from "react";
import Userlist from "../Component/Userlist";
import { authHook } from "../context/Appcontext";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "../style/Button";

const UserDeshbored = () => {
  // getData
  const [fname, setfName] = useState(null);
  const [lname, setlName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [address, setAddress] = useState(null);

  const [state, setState] = authHook();

  useEffect(() => {
    const { fname, lname, email, number, address } = state?.user;
    setfName(fname);
    setlName(lname);
    setEmail(email);
    setNumber(number);
    setAddress(address);
  }, []);

  const formData = { fname, lname, email, number, address };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_API}/profile`,
        formData
      );
      if (data.success) {
        setState({ ...state, user: data?.updateUserProfile });
        let ls = localStorage.getItem("user");
        ls = JSON.parse(ls);
        ls.user = data.updateUserProfile;
        localStorage.setItem("user", JSON.stringify(ls));

        toast.success(data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div
            className="col-md-5 alert alert-light text-center "
            style={{ height: "100vh", borderRadius: "20px" }}
          >
            <div
              className=""
              style={{ height: "100vh", position: "relative", top: "80px" }}
            >
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "100px", color: "green" }}
              ></i>

              <h1 className="text-center" style={{ fontSize: "17px" }}>
                Name: {state.user.fname} {state.user.lname}
              </h1>
              <h1 className="text-center" style={{ fontSize: "17px" }}>
                Email: {state.user.email}
              </h1>
              <h1 className="text-center" style={{ fontSize: "17px" }}>
                Number: {state.user.number}
              </h1>
              <h1 className="text-center" style={{ fontSize: "17px" }}>
                Address: {state.user.address}
              </h1>
            </div>
          </div>
          <div
            className="col-md-7 alert alert-info"
            style={{ height: "100vh", borderRadius: "20px" }}
          >
            <div className="register-container " style={{ height: "80vh" }}>
              <form className="m-3" onSubmit={updateProfile}>
                <h1 className="text-center">Edit Profile</h1>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="inp"
                      name="fname"
                      value={fname}
                      placeholder="First name"
                      onChange={(e) => setfName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="inp"
                      name="lname"
                      value={lname}
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
                      disabled
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="inp"
                      value={number}
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
                    name="address"
                    value={address}
                    id="inp2"
                    placeholder=" "
                    className="form-control"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label htmlFor="">Address</label>
                  <Button className="w-100 mt-4">Update Profile</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
    border-radius: 10px;
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

export default UserDeshbored;
