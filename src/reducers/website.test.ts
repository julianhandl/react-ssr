import reducer, { websiteInitialState } from "./website";
import { toggleMenu } from "../actions/website";

describe("website.reducer", () => {
    it("should handle strange action", () => {
        const result = reducer(websiteInitialState, {type: "bla"});
        expect(result === websiteInitialState).toBeTruthy();
    });
    it("should handle action WEBSITE_TOGGLE_MENU", () => {
        const result = reducer(websiteInitialState, toggleMenu());
        expect(result.menuOpen).toBeTruthy();

        const result2 = reducer({...websiteInitialState, menuOpen: true}, toggleMenu());
        expect(result2.menuOpen).toBeFalsy();
    })
    it("should handle action @@router/LOCATION_CHANGE", () => {
        const result = reducer({...websiteInitialState, menuOpen: true}, {type:"@@router/LOCATION_CHANGE"});
        expect(result.menuOpen).toBeFalsy();
    });
});