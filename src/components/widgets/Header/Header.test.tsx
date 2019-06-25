import React from "react";
import { Header, mapStateToProps, mapDispatchToProps } from "./Header";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Link } from "react-router-dom";
import { IState } from "../../../reducers/root-reducer";
import { WEBSITE_TOGGLE_MENU } from "../../../actions/website";

describe("Header", () => {
    it("should render als usual in various states", () => {
        const clickMock = jest.fn();

        const wrapper = mount(<MemoryRouter>
            <Header
                menuOpen={false}
                path="/kontakt"
                toggleMenu={clickMock}
                headerCount={0}
            />
        </MemoryRouter>)
        const wrapperOpen = mount(<MemoryRouter><Header menuOpen={true} path="/" toggleMenu={() => {}} headerCount={0} /></MemoryRouter>)

        expect(wrapperOpen.find(".header__menu-list--open").length).toBe(1);

        expect(wrapper.find(".header__menu-list--open").length).toBe(0);
        expect(wrapper.find(".header__menu-list li").length).toBe(3);
        expect(wrapper.find(Link).length).toBe(4);
        expect(wrapper.find(".header__menu-list li.active").length).toBe(1);
        expect(wrapper.find(".header__menu-list li.active a").text()).toBe("Kontakt");

        wrapper.find(".header__menu-trigger").simulate("click");
        expect(clickMock.mock.calls.length).toBe(1);
    })

    describe("mapStateToProps", () => {
        const state : Partial<IState> = {
            website: {
                menuOpen: true,
                device: ""
            },
            router: {
                location: {
                    pathname: "/asdf",
                    hash: "",
                    key: "",
                    search: "",
                    state: ""
                },
            }
        }

        it("should give correct values", () => {
            const result = mapStateToProps(state as IState, {});
            expect(result.menuOpen).toBe(true);
            expect(result.path).toBe("/asdf");
        })
    });

    describe("mapDispatchToProps", () => {
        it("should give correct values", () => {
            const mock = jest.fn();
            const result = mapDispatchToProps(mock, {});
            result.toggleMenu();

            expect(mock.mock.calls.length).toBe(1);
            expect(mock.mock.calls[0][0]).toEqual({
                type: WEBSITE_TOGGLE_MENU
            });
        })
    });
})