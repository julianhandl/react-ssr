import { mount } from "enzyme";
import React from "react";
import Impressum from "./Impressum";

describe("Datenschutz", () => {
    const wrapper = mount(<div>
        <Impressum key="impressum" name="impressum" contentTitle="Impressum" metaTitle="Impressum | Party Partner" metaDescription="" />
    </div>)

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});