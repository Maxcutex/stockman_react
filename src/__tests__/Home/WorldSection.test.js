import React from "react";
import { shallow } from "enzyme";

import WorldSection from "../../components/Home/WorldSection";
describe("WorldSection Component", () => {
  it("renders without crashing", () => {
    let component = shallow(<WorldSection />);
  });
});
