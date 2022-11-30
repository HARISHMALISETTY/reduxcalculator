import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAns,
  loadBackSpace,
  loadButtons,
  loadClear,
} from "../redux/calculatorRedux/calculator.actions";
import { CALCULATOR_KEY } from "../redux/calculatorRedux/calculator.reducers";

const CalculatorApp = () => {
  const dispatch = useDispatch();

  // handle answer
  const handleAnswer = (e) => {
    e.preventDefault();
    // alert(number)
    dispatch(loadAns());
  };

  // view store
  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });
  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i--) {
      digits.push(
        <button onClick={() => dispatch(loadButtons(i))}>{i}</button>
      );
    }

    return digits;
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
      <section>
        <div>
          <div>
            <h1>CALCULATOR APP</h1>
          </div>

          {/* screen */}

          <div>
            <input
              type="text"
              placeholder="0"
              value={
                viewCalculator.ans.length === 0
                  ? viewCalculator.number
                  : viewCalculator.ans
              }
            />
          </div>

          {/* keypad */}
          <div>
            <div className="operators">
              <button onClick={() => dispatch(loadClear())}>AC</button>
              <button onClick={() => dispatch(loadBackSpace())}>C</button>
              <button onClick={() => dispatch(loadButtons("+"))}>+</button>
              <button onClick={() => dispatch(loadButtons("-"))}>-</button>
              <button onClick={() => dispatch(loadButtons("*"))}>*</button>
              <button onClick={() => dispatch(loadButtons("/"))}>/</button>
            </div>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => dispatch(loadButtons("."))}>.</button>
            <button onClick={() => dispatch(loadButtons(0))}>0</button>
            <button onClick={handleAnswer}>=</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CalculatorApp;
