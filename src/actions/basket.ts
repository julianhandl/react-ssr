import { push } from "react-router-redux";
import { urls } from "../Routes";

export const BASKET_SET_FIELD = "BASKET_SET_FIELD";
export const BASKET_SET_DELIVERY = "BASKET_SET_DELIVERY";
export const BASKET_SET_PICKUP = "BASKET_SET_PICKUP";
export const BASKET_ADD_ITEM = "BASKET_ADD_ITEM";
export const BASKET_REMOVE_ITEM = "BASKET_REMOVE_ITEM";
export const BASKET_SET_ITEM_QUANTITY = "BASKET_SET_ITEM_QUANTITY";

export interface BASKET_SET_FIELD_ACTION {
    type: typeof BASKET_SET_FIELD;
    field: string;
    value: any;
}

export interface BASKET_SET_DELIVERY_ACTION {
    type: typeof BASKET_SET_DELIVERY;
    value: boolean;
}

export interface BASKET_SET_PICKUP_ACTION {
    type: typeof BASKET_SET_PICKUP;
    value: boolean;
}

export interface BASKET_ADD_ITEM_ACTION {
    type: typeof BASKET_ADD_ITEM;
    productKey: string;
    variantKey?: string;
    quantity: number;
}

export interface BASKET_REMOVE_ITEM_ACTION {
    type: typeof BASKET_REMOVE_ITEM;
    productKey: string;
    variantKey?: string;
}

export interface BASKET_SET_ITEM_QUANTITY_ACTION {
    type: typeof BASKET_SET_ITEM_QUANTITY;
    productKey: string;
    variantKey?: string;
    quantity: number;
}

export type BasketActionTypes =
    BASKET_SET_FIELD_ACTION |
    BASKET_SET_DELIVERY_ACTION |
    BASKET_SET_PICKUP_ACTION |
    BASKET_ADD_ITEM_ACTION |
    BASKET_REMOVE_ITEM_ACTION |
    BASKET_SET_ITEM_QUANTITY_ACTION;

export const basketActions = {
    setBasketField,
    setBasketDelivery,
    setBasketPickup,
    addBasketItem,
    removeBasketItem,
    setBasketItemQuantity
}

export function setBasketField(field: string, value: any) {
    return {
        type: BASKET_SET_FIELD,
        field,
        value
    }
}

export function setBasketDelivery(value: boolean) {
    return {
        type: BASKET_SET_DELIVERY,
        value
    }
}

export function setBasketPickup(value: boolean) {
    return {
        type: BASKET_SET_PICKUP,
        value
    }
}

export function addBasketItem(quantity: number, productKey: string, variantKey?: string) {
    return (dispatch: Function) => {
        dispatch({
            type: BASKET_ADD_ITEM,
            quantity,
            productKey,
            variantKey
        });
        dispatch(push(urls.warenkorb));
    }
}

export function removeBasketItem(productKey: string, variantKey?: string) {
    return{
        type: BASKET_REMOVE_ITEM,
        productKey,
        variantKey
    }
}

export function setBasketItemQuantity(quantity: number, productKey: string, variantKey?: string) {
    return {
        type: BASKET_SET_ITEM_QUANTITY,
        quantity,
        productKey,
        variantKey
    }
}
