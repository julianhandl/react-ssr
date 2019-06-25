import { BasketActionTypes, BASKET_SET_FIELD, BASKET_SET_DELIVERY, BASKET_SET_PICKUP, BASKET_ADD_ITEM, BASKET_SET_ITEM_QUANTITY, BASKET_REMOVE_ITEM } from "../actions/basket";

export interface IBasketItem {
    quantity: number;
    productKey: string;
    variantKey?: string;
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

const basketInitialState: IBasketState = {
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
    switch (action.type) {
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
        case BASKET_ADD_ITEM:
            const existingItem = state.items
                ? state.items.find((item: IBasketItem) => item.productKey === action.productKey && item.variantKey === action.variantKey)
                : undefined

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item: IBasketItem) => {
                        if(item.productKey === action.productKey && item.variantKey === action.variantKey) {
                            return {
                                ...item,
                                quantity: item.quantity + 1
                            }
                        }
                        else return item;
                    })
                }
            }
            else {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            productKey: action.productKey,
                            variantKey: action.variantKey,
                            quantity: action.quantity
                        }
                    ]
                }
            }
        case BASKET_REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item: IBasketItem) => item.productKey !== action.productKey && item.variantKey !== action.variantKey)
            }
        case BASKET_SET_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map((item: IBasketItem) => {
                    if(item.productKey === action.productKey && item.variantKey === action.variantKey) {
                        return {...item, quantity: action.quantity}
                    }
                    else return item;
                })
            }
        default:
            return state;
    }
}