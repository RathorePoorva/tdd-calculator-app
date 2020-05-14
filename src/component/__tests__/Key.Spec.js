import React from "react";
import Key from "../Key";
import { shallow } from "enzyme";

describe("test Key Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Key />);
  });

  it("should render <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
  it("should render the value of keyValue", () => {
    wrapper.setProps({ keyValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
