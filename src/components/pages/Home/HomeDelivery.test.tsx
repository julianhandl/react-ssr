import React from "react";
import { mount } from "enzyme";
import HomeDelivery from "./HomeDelivery";

describe("HomeDelivery", () => {
    const wrapper = mount(<div><HomeDelivery /></div>)

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })
});