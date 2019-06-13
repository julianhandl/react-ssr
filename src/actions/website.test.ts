import { toggleMenu, WEBSITE_TOGGLE_MENU } from "./website";

describe("website.actions", () => {
    it("should create a toggleMenu action", () => {
        const result = toggleMenu();
        expect(result.type).toBe(WEBSITE_TOGGLE_MENU);
    })
});