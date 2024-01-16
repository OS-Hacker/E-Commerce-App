import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const Spinner2 = () => {
  const [count, setcount] = useState(3000);

  const goHome = useNavigate();

  useEffect(() => {
    const Time = setInterval(() => {
      goHome("/");
    }, count);

    return () => clearInterval(Time);
  }, [count, goHome]);
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

export default Spinner2;
