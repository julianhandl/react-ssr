import React from "react";
import { mount } from "enzyme";
import { Map } from "./Map";

describe("Map", () => {
    it("should render an svg", () => {
        const wrapper = mount(<Map />);
        expect(wrapper.find("svg").length).toBe(1);
    })
    it("should render an 2 polygons", () => {
        const wrapper = mount(<Map />);
        expect(wrapper.find("polygon").length).toBe(2);
    })
    it("should render an 2 polylines", () => {
        const wrapper = mount(<Map />);
        expect(wrapper.find("polyline").length).toBe(2);
    })
    it("should render an 1 circle", () => {
        const wrapper = mount(<Map />);
        expect(wrapper.find("circle").length).toBe(1);
    })
});