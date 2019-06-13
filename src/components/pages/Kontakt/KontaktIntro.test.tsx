import React from "react";
import { mount } from "enzyme";
import KontaktIntro from "./KontaktIntro";

describe("KontaktIntro", () => {
    it("should render normal", () => {
        const wrapper = mount(<KontaktIntro />);
        expect(wrapper).toMatchSnapshot();
    })
})