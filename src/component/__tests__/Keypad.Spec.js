import React from "react";
import { shallow, mount } from "enzyme";
import Keypad from "../Keypad";

describe("test Keypad Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });
  it("should render all <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });
  it("should render an instance of the Key component for each index of numbers, operators, and the submit Key", () => {
    const numbers = ["0", "1"];
    const operators = ["+", "-"];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});
describe("mount Keypad", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });
  it("renders the values of numbers", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });
  it("renders the value of operators", () => {
    wrapper.setProps({ operators: ["+", "-", "/"] });
    expect(wrapper.find(".operators-container").text()).toEqual("+-/");
  });
});
