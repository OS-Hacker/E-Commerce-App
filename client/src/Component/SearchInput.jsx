import React from "react";
import { styled } from "styled-components";
import { FilterHook } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchInput = () => {
  // search filter

  const [value, setValue] = FilterHook();

  const goSearchProduct = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_REACT_API}/search-filter/${value.keyword}`);

      setValue({ ...value, resalt: data });

      goSearchProduct("/SearchProduct");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSearch}>
        <div className="search">
          <i className="bi bi-search" style={{ fontWeight: "900" }}></i>
          <input
            type="search"
            className="form-control mb-4"
            placeholder="search..."
            name=""
            value={value.keyword}
            id="input"
            onChange={(e) => setValue({ ...value, keyword: e.target.value })}
          />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #input {
    height: 6vh;
    font-size: 18px;
    border-radius: 15px;
    background-color: #f6f4f7;
    padding-left: 25px;
  }

  .bi-search {
    color: #b300ff;
    font-size: 15px;
    font-weight: bolder;
    position: absolute;
    left: 0px;
    padding: 7px;
  }

  .search {
    position: relative;
  }
`;

export default SearchInput;
