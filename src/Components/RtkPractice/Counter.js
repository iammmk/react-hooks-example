import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAmount,
  depositAmount,
  withdrawAmount,
} from "../../Store/Slices/AmountSlice";

const Counter = () => {
  const amount = useRef(0);
  const dispatch = useDispatch();

  const currentAmount = useSelector((state) => {
    return state.amount;
  });

  const depositMoney = (money) => {
    console.log(money);
    dispatch(depositAmount(Number(money)));
  };
  const withdrawMoney = (money) => {
    if (currentAmount < Number(money)) {
      alert("You dont have sufficient amount in ur account");
    } else {
      dispatch(withdrawAmount(Number(money)));
    }
  };
  const clearMoney = () => {
    dispatch(clearAmount());
  };

  return (
    <>
      <input type="number" placeholder="Enter amount" ref={amount} />
      <br />
      <button onClick={() => depositMoney(amount.current.value)}>
        Deposit Money
      </button>
      &nbsp;
      <button
        disabled={currentAmount === 0}
        onClick={() => withdrawMoney(amount.current.value)}
      >
        Withdraw Money
      </button>
      &nbsp;
      <button disabled={currentAmount === 0} onClick={clearMoney}>
        Clear Account
      </button>
    </>
  );
};

export default Counter;
