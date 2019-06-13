import React from "react";
import { mount } from "enzyme";
import Home from "./Home";
import HomeIntro from "./HomeIntro";
import HomeDescription from "./HomeDescription";
import HomeDelivery from "./HomeDelivery";

describe("Home", () => {
    const wrapper = mount(<div><Home /></div>);

    it("should render a page", () => {
        expect(wrapper.find(".page.page--home").length).toBe(1);
    })
    it("should render the intro", () => {
        expect(wrapper.find(HomeIntro).length).toBe(1);
    })
    it("should render the description", () => {
        expect(wrapper.find(HomeDescription).length).toBe(1);
    })
    it("should render the delivery", () => {
        expect(wrapper.find(HomeDelivery).length).toBe(1);
    })
});