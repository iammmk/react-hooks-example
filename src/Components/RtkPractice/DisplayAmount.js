import React from "react";
import { useSelector } from "react-redux";

const DisplayAmount = () => {
  const amount = useSelector((state) => {
    return state.amount;
  });

  return <div>Your current account balance is : {amount}</div>;
};

export default DisplayAmount;
