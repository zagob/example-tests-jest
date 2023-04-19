import CalculatorImg from "../../images/Calculator.png";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <img src={CalculatorImg} alt="" />
          Home
        </li>
      </ul>
    </nav>
  );
}
