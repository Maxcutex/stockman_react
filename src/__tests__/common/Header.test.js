import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/common/Header";

describe("Header Component", () => {
  it("has an nav tag", () => {
    const component = shallow(<Header />);
    var node = component.find("nav");
    expect(node.length).toEqual(1);
  });

  it("is wrapped inside a page-header class", () => {
    const component = shallow(<Header />);
    expect(component.find(".page-header")).toBeDefined();
    expect(component.find(".page-header")).toHaveLength(1);
  });
});
