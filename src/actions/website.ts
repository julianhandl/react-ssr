export const WEBSITE_TOGGLE_MENU = 'WEBSITE_TOGGLE_MENU';

interface IWebsiteToggleMenuAction {
    type: typeof WEBSITE_TOGGLE_MENU;
}
interface IWebsiteRouterChangeAction {
    type: string;
}

export type WebsiteActions = IWebsiteToggleMenuAction
    | IWebsiteRouterChangeAction;

export function toggleMenu(){
    return {
        type: WEBSITE_TOGGLE_MENU
    };
}