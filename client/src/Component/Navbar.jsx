import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authHook } from "../context/Appcontext";
import { toast } from "react-toastify";
import { Button, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [IsMobile, SetMobile] = useState(false);

  const Navstyle = ({ isActive }) => {
    return {
      color: isActive ? "#833bda" : "black",
      fontSize: isActive ? "1.9rem" : "1.8rem",
      fontWeight: isActive ? "bold" : "",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const { cartProduct } = useSelector((state) => state.cartData);

  const [state, setState] = authHook();

  console.log(state);

  const navigat = useNavigate();

  const logoutHandler = async () => {
    try {
      await setState({
        user: "",
        token: "",
      });

      localStorage.clear("user");

      navigat("/");

      toast.success("Logout Successfully", {
        position: "bottom-left",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const items = [
    {
      key: "1",
      label: (
        <NavLink
          style={{ fontSize: "18px" }}
          to={`/Deshbored/${state?.user.role === 1 ? "admin" : "user"}`}
        >
          {state?.user.role === 1 ? "Deshbored" : "My Profile"}
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink style={{ fontSize: "18px" }} onClick={logoutHandler}>
          Logout
        </NavLink>
      ),
      icon: <UserOutlined style={{ color: "red", fontWeight: "lighter" }} />,
    },
  ];

  return (
    <Wrapper>
      <div className="Navbar">
        <div className="Main_logo">
          <h4 className="Logo-Size">
            🛍️<span className="">Global</span>-
            <span className="text-danger">Bazaar🛒</span>
          </h4>
        </div>

       {/* search */}
        <div
          className="search-bar"
          style={{ position: "relative", top: "10px" }}
        >
          <SearchInput />
        </div>

        <ul
          className={IsMobile ? "Mobile_nav_Links" : "Nav_Links"}
          onClick={() => SetMobile(false)}
        >
          <li>
            <NavLink to="/" className="Links" style={Navstyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/About" className="Links" style={Navstyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/Contect" className="Links" style={Navstyle}>
              Contect
            </NavLink>
          </li>

          <li>
            <NavLink to="/Product" className="Links" style={Navstyle}>
              Product
            </NavLink>
          </li>

          <div className="trolly">
            <NavLink to="/Cart">
              <i className="bi bi-cart4"></i>
              <span className="number">{cartProduct.length}</span>
            </NavLink>
          </div>
        </ul>

        <div className="Mobile_Icons" onClick={() => SetMobile(!IsMobile)}>
          {IsMobile ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
        {!state?.user ? (
          <>
            <div className="">
              <NavLink
                to="/Login"
                style={{
                  fontSize: "1.8rem",
                  padding: "3px",
                  borderRadius: "6px",
                  color: "white",
                }}
                className="login"
              >
                Login
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Button className="px-2">
                  <Space style={{ fontSize: "17px", cursor: "pointer" }}>
                    <h1 style={{ fontSize: "17px" }}>{state.user.fname}</h1>
                    <UserOutlined
                      style={{
                        marginBottom: "8px",
                        color: "green",
                        fontWeight: "lighter",
                      }}
                    />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .Main_logo {
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .Main_logo:hover {
    transform: scale(1.1);
  }

  .Logo-Size {
    font-size: 2.5rem;
    text-decoration: underline;
    font-weight: 600;
  }

  .Navbar {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 0rem 5rem;
    background-color: #f1f3fa;
  }

  .Nav_Links {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }

  .Nav_Links li {
    list-style-type: none;
  }

  .Links {
    text-decoration: none;
    margin: 0rem 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
    /* text-transform: uppercase; */
  }

  .Mobile_Icons {
    display: none;
    z-index: 99999;
  }

  .trolly {
    font-size: 2.5rem;
    color: white;
    position: relative;
    color: black;
    display: grid;
    text-align: center;
  }

  .number {
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.color.main};
    font-size: 1.8rem;
    color: white;
    left: 2rem;
    bottom: 2rem;
  }

  .first {
    width: 40px;
    font-weight: 900;
    font-size: 2rem;
    border: 2px solid black;
    padding: 5px;
    border-radius: 50%;
  }

  .login {
    border: 3px solid #bc86fd;
    font-weight: bold;
    background-color: #bc86fd;
  }

  .login:hover {
    border: 3px solid black;
    box-shadow: 2px 3px 4px #a98ace;
    padding: 10px;
    transition: all 0.8s;
  }

  .first:hover {
    box-shadow: 1px 2px 3px 1px #a98ace;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.main};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .Nav_Links {
      display: none;
    }

    .Navbar {
      padding: 0rem 2rem;
    }

    .Mobile_nav_Links {
      position: absolute;
      top: 9vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f1f3fa;
      left: 0;
      text-align: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: 0.8s ease;
      z-index: 999999;
      transition: 0.8s;
    }

    li {
      padding: 2rem 0rem;
      list-style-type: none;
    }

    .shopping-trolly {
      cursor: pointer;
    }

    .Mobile_Icons {
      display: block;
      font-size: 4rem;
      font-weight: 800;
    }

    .Logo-Size {
      font-size: 1.8rem;
    }
  }
`;

export default Navbar;
