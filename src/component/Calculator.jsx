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
  updateDisplay = (value) => {
    let { displayValue } = this.state;

    //prevent multiple occurence of  "." operator
    if (value === "." && displayValue.includes(".")) {
      value = "";
    }
    if (value === "ce") {
      //delete last char of displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      if (displayValue === "") displayValue = "0";
    } else {
      //replace displayValue with value if displayValue=0 else concatenate it
      displayValue === "0" ? (displayValue = value) : (displayValue += value);
    }
    this.setState({ displayValue });
  };
  //to call the operator for operation
  callOperator = () => {
    let { displayValue, selectedOperator, storedValue } = this.state;
    const tempStoredValue = displayValue;
    displayValue = parseFloat(displayValue, 10);
    storedValue = parseFloat(storedValue, 10);
    console.log(displayValue);
    console.log(storedValue);
    console.log("******");
    //perform operation
    switch (selectedOperator) {
      case "+":
        displayValue = storedValue + displayValue;
        break;
      case "-":
        displayValue = storedValue - displayValue;
        break;
      case "*":
        displayValue = storedValue * displayValue;
        break;
      case "/":
        displayValue = storedValue / displayValue;
        break;
      default:
        displayValue = "0";
    }
    console.log(displayValue);
    displayValue = displayValue.toString();
    selectedOperator = "";

    if (displayValue === "NaN" || displayValue === "infinity") {
      displayValue = "0";
    }
    this.setState({
      displayValue,
      selectedOperator,
      storedValue: tempStoredValue,
    });
  };
  //to set the operator for operation
  setOperator = (value) => {
    let { displayValue, selectedOperator, storedValue } = this.state;
    if (selectedOperator === "") {
      //when selectedOperator is empty
      //update storedValue to displayValue
      storedValue = displayValue;
      displayValue = "0";
      selectedOperator = value;
    } else {
      //when selectedOperator is not an empty string
      selectedOperator = value;
    }
    this.setState({ displayValue, selectedOperator, storedValue });
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
