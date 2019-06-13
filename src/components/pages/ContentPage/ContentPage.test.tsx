import React from "react";
import { mount } from "enzyme";
import ContentPage from "./ContentPage";

describe("ContentPage", () => {
    const wrapper = mount(<div>
        <ContentPage
            name="test"
            contentTitle="Test"
            metaTitle="Test"
            metaDescription="Description"
        />
    </div>)

    it("should render correctly", () => {
        expect(wrapper.find(".page.content-page.page--test").length).toBe(1);
        expect(wrapper.find(".content-page__title").length).toBe(1);
        expect(wrapper.find(".content-page__title").text()).toBe("Test");
    });
});