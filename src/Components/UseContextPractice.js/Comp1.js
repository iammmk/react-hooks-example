import React, { createContext } from "react";
import Comp2 from "./Comp2";

const FirstName = createContext();
const LastName = createContext();

const Comp1 = () => {
  return (
    <>
      <FirstName.Provider value={"Mahabub"}>
        <LastName.Provider value={"khan"}>
          <Comp2 />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default Comp1;
export { FirstName, LastName };
