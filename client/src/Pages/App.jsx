import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "../Component/Navbar";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/Globale_Style";

import { Provider } from "react-redux";
import { store } from "../ReduxStore.jsx/Store";
import Error_Page from "../Component/Error_Page";
import Footer from "../Component/Footer";
import Appcontext from "../context/Appcontext";
import Register from "./Register";
import Login from "./Login";

// for notification

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDeshbored from "../user/UserDeshbored";
import UserPrivet from "../user/UserPrivet";
import Adminprivet from "../Admin/Adminprivet";
import Admindeshbored from "../Admin/Admindeshbored";
import Create_Category from "../Admin/Create_Category";
import Create_Product from "../Admin/Create_Product";
import Show_Product from "../Admin/Show_Product";
import UpdateProductPage from "../Component/UpdateProductPage";
import SingleProduct from "./SingleProduct";
import SearchContext from "../context/SearchContext";
import SearchProduct from "../Component/SearchProduct";

const App = () => {
  const theme = {
    color: {
      main: "#833bda",
      bg: "#fadbfa",
      text: "#111",
      footer_bg: "#181d2c",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <>
      <SearchContext>
        <Appcontext>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <GlobalStyle />

                <Navbar />

                <ToastContainer style={{ fontSize: "1.8rem" }} />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contect" element={<Contect />} />
                  <Route path="/Product" element={<Product />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/SearchProduct" element={<SearchProduct />} />
                  <Route
                    path="/SingleProduct/:slug"
                    element={<SingleProduct />}
                  />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="*" element={<Error_Page />} />

                  {/* Privet Routes  */}
                  <Route path="/Deshbored" element={<UserPrivet />}>
                    <Route path="user" element={<UserDeshbored />} />
                  </Route>

                  <Route path="/Deshbored" element={<Adminprivet />}>
                    <Route path="admin" element={<Admindeshbored />} />
                    <Route
                      path="admin/Create_Category"
                      element={<Create_Category />}
                    />
                    <Route
                      path="admin/Create_Product"
                      element={<Create_Product />}
                    />
                    <Route
                      path="admin/Show_Product"
                      element={<Show_Product />}
                    />
                    <Route
                      path="admin/UpdateProductPage/:slug"
                      element={<UpdateProductPage />}
                    />
                  </Route>
                </Routes>

                <Footer />
              </BrowserRouter>
            </ThemeProvider>
          </Provider>
        </Appcontext>
      </SearchContext>
    </>
  );
};

export default App;
