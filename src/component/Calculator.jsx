import React from "react";
import "./css/calculator.css";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends React.Component {
  state = {
    //value to be displayed in <Display />
    displayValue: "0",
    //keys numbers list for <Key />
    numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"],
    //operator key list for <Key />
    operators: ["+", "-", "*", "/"],
    //operator selected for operation
    selectedOperator: "",
    //value stored for the operation
    storedValue: "",
  };
  //to update the display of the screen
  updateDisplay = () => {
    console.log("update display");
  };
  //to call the operator for operation
  callOperator = () => {
    console.log("call operator");
  };
  //to set the operator for operation
  setOperator = () => {
    console.log("set operator");
  };
  render = () => {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  };
}
export default Calculator;
