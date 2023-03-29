import React, { useContext } from "react";
import { FirstName, LastName } from "./Comp1";

function Comp3() {
  const fName = useContext(FirstName);
  const lName = useContext(LastName);
  return (
    <div>
      My name is {fName} {lName}
    </div>
  );
}

export default Comp3;
