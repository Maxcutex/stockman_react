import React from "react";
import { shallow } from "enzyme";

import OpinionSection from "../../components/Home/OpinionSection";
describe("OpinionSection Component", () => {
  it("renders without crashing", () => {
    let component = shallow(<OpinionSection />);
  });
});
