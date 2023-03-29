import React, { useContext } from "react";
import { LastName } from "./Comp1";
import Comp3 from "./Comp3";

function Comp2() {
  const lName = useContext(LastName);
  return (
    <>
      <Comp3 />
      <div>My last name is {lName}</div>
    </>
  );
}

export default Comp2;
