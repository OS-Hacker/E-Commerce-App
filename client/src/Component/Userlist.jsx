import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Userlist = () => {
  return (
    <Wrapper>
     <div className="" style={{height:"100vh"}}>

      <div className="list-group text-center bg-info mt-5">
        <h1 className="p-3 mt-2">User Panal</h1>
        <NavLink
          to="/Deshbored/user/Profile"
          className="list-group-item list-group-item-action list-group-item-light"
        >
          Profile
        </NavLink>

      </div>
     </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list-group-item {
    font-size: 1.8rem;
  }
`;

export default Userlist;
