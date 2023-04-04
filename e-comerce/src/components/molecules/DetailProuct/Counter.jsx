import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  incrementByAmont,
  decrementByAmount,
} from "../../../config/redux/reducer/counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter w-56 grid grid-cols-2 items-center gap-0 mb-8">
      {props.use !== "cart" ? (
        <div className="title">
          <h4 className="text-slate-800 text-lg mr-5 font-extralight">
            Kuantitas
          </h4>
        </div>
      ) : null}
      <div className="counterChange flex">
        <button
          className="px-1 py-[0] md:px-2 border-t border-b border-l border-slate-500 text-lg text-slate-800 font-extralight"
          onClick={count > 1 ? () => dispatch(decrementByAmount(1)) : null}
        >
          -
        </button>
        <input
          type="text"
          className="border border-slate-500 sm:py-[0] py-[0] inline-block w-20 text-center text-slate-800 font-extralight max-w-[3rem]"
          value={count}
          disabled
          autoComplete="off"
        />
        <button
          className="md:px-2 py-[0] px-1 border-r border-t border-b border-slate-500 text-lg text-slate-800 font-extralight"
          onClick={() => dispatch(incrementByAmont(1))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
