import { BasketActionTypes, BASKET_SET_FIELD, BASKET_SET_DELIVERY, BASKET_SET_PICKUP } from "../actions/basket";

export interface IBasketItem {
    key: string;
    quantity: number;
}

export interface IBasketState {
    items: IBasketItem[];
    firstname: string;
    lastname: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    street: string;
    city: string;
    email: string;
    text: string;
    delivery: {
        checked: boolean;
        loading: boolean;
        priceCents: number | undefined;
        error?: Error;
    };
    pickup: {
        checked: boolean;
        loading: boolean;
        priceCents: number | undefined;
        error?: Error;
    };
    datenschutzAccepted: boolean;
}

const basketInitialState : IBasketState = {
    items: [],
    firstname: "",
    lastname: "",
    startDate: undefined,
    endDate: undefined,
    street: "",
    city: "",
    email: "",
    text: "",
    delivery: {
        checked: false,
        loading: false,
        priceCents: undefined,
    },
    pickup: {
        checked: false,
        loading: false,
        priceCents: undefined,
    },
    datenschutzAccepted: false
}

export function basket(state: IBasketState = basketInitialState, action: BasketActionTypes) {
    switch(action.type) {
        case BASKET_SET_FIELD:
            return {
                ...state,
                [action.field]: action.value
            }
        case BASKET_SET_DELIVERY:
            return {
                ...state,
                delivery: {
                    ...state.delivery,
                    checked: action.value
                }
            }
        case BASKET_SET_PICKUP:
            return {
                ...state,
                pickup: {
                    ...state.pickup,
                    checked: action.value
                }
            }
        default:
            return state;
    }
}