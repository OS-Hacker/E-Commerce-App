import React, { useEffect, useState } from "react";
import axios from "axios";
import { authHook } from "../context/Appcontext";
import { Outlet } from "react-router-dom";
import Spinner2 from "../Component/Spinner2";

const UserPrivet = () => {
  const [ok, setOk] = useState(false);
  const [state, setState] = authHook();

  useEffect(() => {
    const chekeState = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_API}/user-privet`
      );

      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (state?.token) {
      chekeState();
    }
  }, [state?.token]);

  return ok ? <Outlet /> : <Spinner2 />;
};

export default UserPrivet;
