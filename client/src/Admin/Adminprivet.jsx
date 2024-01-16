import React, { useEffect, useState } from "react";
import { authHook } from "../context/Appcontext";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner2 from "../Component/Spinner2";

const Adminprivet = () => {
  const [ok, setOk] = useState(false);
  const [state, setState] = authHook();

  useEffect(() => {
    const checkAuth = async () => {

      const { data } = await axios.get(`${import.meta.env.VITE_REACT_API}/admin-privet`);

      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

      if (state?.token) {
          checkAuth()
      }
  }, [state?.token]);

  return ok ? <Outlet/> : <Spinner2/>
};

export default Adminprivet;
