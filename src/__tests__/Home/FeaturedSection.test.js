import React from "react";
import { shallow } from "enzyme";

import FeaturedSection from "../../components/Home/FeaturedSection";

describe("Featured Component", () => {
  it("renders without crashing", () => {
    let component = shallow(<FeaturedSection />);
  });
});
