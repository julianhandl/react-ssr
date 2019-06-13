import React from "react";
import { shallow } from "enzyme";
import Kontakt from "./Kontakt";
import KontaktIntro from "./KontaktIntro";
import KontaktItems from "./KontaktItems";

describe("Kontakt", () => {
    it("should render correct", () => {
        const wrapper = shallow(<Kontakt />);
        expect(wrapper.find(".page--kontakt").length).toBe(1);
        expect(wrapper.find(KontaktIntro).length).toBe(1);
        expect(wrapper.find(KontaktItems).length).toBe(1);
    })
})