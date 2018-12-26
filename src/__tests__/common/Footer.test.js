import React from "react";
import { shallow } from "enzyme";

import Footer from "../../components/common/Footer";
describe("Footer Component", () => {
  it("renders without crashing", () => {
    let component = shallow(<Footer />);
  });
});
