import React from "react";
import { mount } from "enzyme";
import { Footer } from ".";
import { MemoryRouter } from "react-router";

describe("Footer", () => {
    const wrapper = mount(<MemoryRouter>
        <Footer />
    </MemoryRouter>)

    it("should render correctly", () => {
        expect(wrapper.find(Footer)).toMatchSnapshot();
    });
});