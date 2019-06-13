import React from "react";
import { mount } from "enzyme";
import HomeDescription from "./HomeDescription";

describe("HomeDescription", () => {
    const wrapper = mount(<div><HomeDescription /></div>)

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })
});