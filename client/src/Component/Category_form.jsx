import React, { useState } from "react";

const Category_form = ({handleSubmit,setChnage,value}) => {
     
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name=""
          id="inp"
          value={value}
          placeholder="Enter Category"
          onChange={(e) => setChnage(e.target.value)}
          style={{height:"6vh",marginBottom:"3px",fontSize:"16px"}}
        />
        <button
          type="submit"
          className="btn btn-primary text-uppercase ms-2 mb-2"
        >
          create
        </button>
      </form>
    </>
  );
};

export default Category_form;
