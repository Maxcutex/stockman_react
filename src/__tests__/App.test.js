import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render App correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Home correctly", () => {
    const home = wrapper.find("Home");
    expect(home.length).toBe(1);
  });
});
