export const SET_WEBSITE_DATE = 'SET_WEBSITE_DATE';

export function setWebsiteDate(date){
    return {
        type: SET_WEBSITE_DATE,
        value: date
    }
}