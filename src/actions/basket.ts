export const BASKET_SET_FIELD = "BASKET_SET_FIELD";
export const BASKET_SET_DELIVERY = "BASKET_SET_DELIVERY";
export const BASKET_SET_PICKUP = "BASKET_SET_PICKUP";

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

export type BasketActionTypes =
    BASKET_SET_FIELD_ACTION |
    BASKET_SET_DELIVERY_ACTION |
    BASKET_SET_PICKUP_ACTION;

export const basketActions = {
    setBasketField,
    setBasketDelivery,
    setBasketPickup
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