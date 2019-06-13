import React from "react";
import { mount } from "enzyme";
import KontaktItems from "./KontaktItems";

describe("KontaktIntro", () => {
    it("should render normal", () => {
        const wrapper = mount(<KontaktItems />);
        expect(wrapper).toMatchSnapshot();
    })
})