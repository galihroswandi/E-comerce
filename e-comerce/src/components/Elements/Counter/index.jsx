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
      {props.use !== "cart" ? (
        <div className="title">
          <h4 className="text-[.8rem] font-medium leading-3 text-slate-700">
            Kuantitas
          </h4>
        </div>
      ) : null}
      <div className="counterChange flex">
        <button
          className="px-1 md:px-2 border-t border-b border-l border-slate-300 text-lg text-slate-700 font-extralight"
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
          className="border border-slate-300 inline-block w-20 text-center text-slate-600 font-extralight max-w-[3rem]"
          value={props.global === true ? globalCounter : count}
          disabled
          autoComplete="off"
        />
        <button
          className="md:px-2 px-1 border-r border-t border-b border-slate-300 text-lg text-slate-700 font-extralight"
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
