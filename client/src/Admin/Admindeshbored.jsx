import React from "react";
import Adminlist from "../Component/Adminlist";
import { authHook } from "../context/Appcontext";

const Admindeshbored = () => {
  const [state, setState] = authHook();
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-sm-4">
            <Adminlist />
          </div>
          <div className="col-sm-8 text-center alert alert-primary text-dark mt-5 mt-5">
            <h2>Name : {state.user.fname} {state.user.lname}</h2>
            <h2>Email: {state.user.email}</h2>
            <h2>Number: {state.user.number}</h2>
            <h2>Address: {state.user.address}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindeshbored;
