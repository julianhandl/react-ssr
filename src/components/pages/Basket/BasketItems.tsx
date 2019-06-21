import React from "react";
import "./BasketItemsStyles.scss";
import { Link } from "react-router-dom";
import { urls } from "../../../Routes";
import { IBasketItem } from "../../../reducers/basket";

interface IBasketItemsProps {
    items?: IBasketItem[];
}

export class BasketItems extends React.Component<IBasketItemsProps> {
    renderItem = (item: IBasketItem) => {
        return <div>{item.productKey}</div>
    }
    renderEmpty = () => {
        return <div className="basket__items-empty">
            <span>Ihr Event Warenkorb ist noch leer.</span>
            <span>Befüllen Sie ihn mit einer Musikanlage und den passenden Zelt um ihre Feier Perfekt zu machen.</span>
            <div className="basket__items-empty-actions">
                <Link to={urls.musik}>Musikanlagen</Link>
                <Link to={urls.zelt}>Zelte</Link>
            </div>
        </div>
    }
    render() {
        return <div className="basket__items">
            {this.props.items && this.props.items.length > 0
                ? <div className="basket__items-content">
                    {this.props.items.map((item: IBasketItem) => this.renderItem(item))}
                </div>
                : this.renderEmpty()
            }
        </div>
    }
}

export default BasketItems;