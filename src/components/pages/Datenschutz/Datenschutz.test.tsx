import Datenschutz from "./Datenschutz";
import { mount } from "enzyme";
import React from "react";

describe("Datenschutz", () => {
    const wrapper = mount(<div>
        <Datenschutz key="datenschutz" name="datenschutz" contentTitle="Datenschutz" metaTitle="Datenschutz | Party Partner" metaDescription="" />
    </div>)

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});