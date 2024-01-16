import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const context = createContext();

const Appcontext = ({ children }) => {
  const [state, setState] = useState({
    loading:false,
    user: "",
    token: "",
  });

  // token & user get in storeg

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (data) {
      setState({
        ...state,
        user: data.user,
        token: data.token,
      });
    }
  }, []);

  // send token in headers by Default

  if (state?.token) {
    axios.defaults.headers.common['Authorization'] = `${state?.token}`;
  }


  return (
    <>
      <context.Provider value={[state, setState]}>{children}</context.Provider>
    </>
  );
};

export const authHook = () => useContext(context);

export default Appcontext;