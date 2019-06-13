import React from "react";
import { mount } from "enzyme";
import HomeDescription from "./HomeDescription";
import HomeIntro from "./HomeIntro";
import { packageMusik, partyZelt } from "../../../../../data/products";

describe("HomeIntro", () => {
    const wrapper = mount(<div><HomeIntro /></div>)

    it("should render correctly", () => {
        expect(wrapper.find(".container").length).toBe(1);
        expect(wrapper.find(".container > .home-intro").length).toBe(1);

        // slogan
        expect(wrapper.find(".container > .home-intro > .home-intro__slogan").length).toBe(1);
        const slogan = wrapper.find(".home-intro__slogan");
        expect(slogan).toMatchSnapshot();

        //boxes
        expect(wrapper.find(".container > .home-intro > .home-intro__boxes").length).toBe(1);
        const boxes = wrapper.find(".home-intro__box");
        expect(boxes.length).toBe(2);

        const musik = packageMusik.variants[Object.keys(packageMusik.variants)[0]];
        const zelt = partyZelt.variants[Object.keys(partyZelt.variants)[0]];

        // musik
        expect(boxes.at(0).find("h2").length).toBe(1);
        expect(boxes.at(0).find("h2").text()).toBe(packageMusik.shortTitle);
        expect(boxes.at(0).find("p").length).toBe(1);
        expect(boxes.at(0).find("p").text()).toBe(packageMusik.description);
        expect(boxes.at(0).find(".home-intro__box-price").length).toBe(1);
        expect(boxes.at(0).find(".home-intro__box-price span").text()).toBe(`${(musik.priceCents / 100).toFixed(0)}€`);

    })
});