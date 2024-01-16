import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

const search = createContext();

export const FilterHook = () => useContext(search);

const SearchContext = ({ children }) => {
  const [value,setValue ] = useState({
     keyword:"",
     resalt:[]
  });

 
  return (
    <>
      <search.Provider value={[value,setValue]}>{children}</search.Provider>
    </>
  );
};

export default SearchContext;
