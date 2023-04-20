import { useState } from "react";
import CalculatorImg from "../../images/Calculator.png";

export function Menu() {
  const [auth, setAuth] = useState(true);
  const [state, setState] = useState(false);

  function changeState() {
    setAuth(false);
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={CalculatorImg} alt="" />
            Home
          </li>
        </ul>
      </nav>

      <button type="button" onClick={changeState}>
        Click Me!
      </button>
      <p>auth: {auth}</p>
    </>
  );
}
