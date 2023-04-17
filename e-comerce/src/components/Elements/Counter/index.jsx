import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementByAmount,
  incrementByAmont,
} from "./../../../config/redux/reducer/counterSlice";
import { updateKuantitas } from "../../../config/cart";

const Counter = (props) => {
  const dispatch = useDispatch();
  const globalCounter = useSelector((state) => state.counter.value);

  const [count, setCount] = useState(
    props.defaultValue ? props.defaultValue : 1
  );

  useEffect(() => {
    if (!props.global) {
      if (count !== props.defaultValue) {
        const id_cart = props.id_cart;
        const data = {
          kuantitas: count,
        };

        setTimeout(() => {
          updateKuantitas(id_cart, data).then((res) => {
            props.getAllCart();
          });
        }, 2000);
      }
    }
  });

  return (
    <div className="counter w-56 grid grid-cols-2 items-center">
      <div className="counterChange flex max-h-5">
        <button
          className="text-[.7rem] px-[.17rem] flex justify-center items-center md:px-2 border-t border-b border-l border-slate-300 text-lg text-slate-700 font-extralight"
          onClick={() =>
            props.global
              ? globalCounter > 1 && dispatch(decrementByAmount(1))
              : count > 1 && setCount(count - 1)
          }
        >
          -
        </button>
        <input
          type="text"
          className="text-[.8rem] border border-slate-300 inline-block w-8 text-center text-slate-600 font-extralight max-w-[3rem]"
          value={props.global === true ? globalCounter : count}
          disabled
          autoComplete="off"
        />
        <button
          className="text-[.89rem] px-[.17rem] flex justify-center items-center md:px-2 border-t border-b border-r border-slate-300 text-lg text-slate-700 font-extralight"
          onClick={() =>
            props.global ? dispatch(incrementByAmont(1)) : setCount(count + 1)
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
