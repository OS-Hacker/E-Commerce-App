import React from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <HashLoader color="#8c36d7" />
      </div>
    </>
  );
};

export default Spinner;
