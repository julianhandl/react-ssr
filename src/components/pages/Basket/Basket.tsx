import React from "react";
import Helmet from "react-helmet";
import BasketData from "./BasketData";
import { connect } from "react-redux";
import { IState } from "../../../reducers/root-reducer";
import { basketActions } from "../../../actions/basket";
import { IBasketState } from "../../../reducers/basket";
import "./BasketStyles.scss";

interface IBasketStateProps {
    basket: IBasketState;
}

interface IBasketActionProps {
    changeField: (field: string, value: any) => void;
    changePickup: (value: boolean) => void;
    changeDelivery: (value: boolean) => void;
}

interface IBasketProps extends IBasketStateProps, IBasketActionProps {}

export class Basket extends React.Component<IBasketProps> {
    renderContent = () => {
        const basket = this.props.basket;

        return <section className="page page--basket" key="page-basket-key">
            <div className="container">
                <div className="basket">
                    <h1>Warenkorb</h1>
                    <div className="basket__content">
                        <div className="basket__items"></div>
                        <BasketData
                            firstname={basket.firstname}
                            lastname={basket.lastname}
                            startDate={basket.startDate}
                            endDate={basket.endDate}
                            street={basket.street}
                            city={basket.city}
                            email={basket.email}
                            text={basket.text}
                            delivery={basket.delivery}
                            pickup={basket.pickup}
                            changeField={this.props.changeField}
                            changeDelivery={this.props.changeDelivery}
                            changePickup={this.props.changePickup}
                        />
                    </div>
                </div>
            </div>
        </section>
    }
    render() {
        return[
            <Helmet key='helmet-key-basket'>
                <title>Warenkorb | Party Partner</title>
                <meta name="description" content="Ihr Event Warenkorb" />
            </Helmet>,
            this.renderContent()
        ];
    }
}

function mapDispatchToProps(dispatch: Function) : IBasketActionProps {
    return {
        changeField: (field: string, value: any) => dispatch(basketActions.setBasketField(field, value)),
        changeDelivery: (value: any) => dispatch(basketActions.setBasketDelivery(value)),
        changePickup: (value: any) => dispatch(basketActions.setBasketPickup(value)),
    }
}

function mapStateToProps(state: IState) : IBasketStateProps {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);