import React from "react";
import { shallow } from "enzyme";
import Display from "../Display";

describe("test Display Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Display displayValue={""} />);
  });
  it("should render <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("renders the value of displayValue", () => {
    wrapper.setProps({ displayValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
