import React from "react";
import "./BasketItemsStyles.scss";
import { Link } from "react-router-dom";
import { urls } from "../../../Routes";
import { IBasketItem } from "../../../reducers/basket";
import { products } from "../../../../../data/products";
import IProduct from "../../../../../core/interfaces/IProduct";

interface IBasketItemsProps {
    items?: IBasketItem[];
    changeItemQuantity: (quantity: number, productKey: string, variantKey?: string) => void;
    removeItem: (productKey: string, variantKey?: string) => void;
}

export class BasketItems extends React.Component<IBasketItemsProps> {
    renderItem = (item: IBasketItem) => {
        const product = products.find((product: IProduct) => product.key === item.productKey);
        const variant = product && product.variants && item.variantKey ? product.variants[item.variantKey] : undefined;
        if (product) {
            return <div className="basket-item">
                <div className="basket-item__data">
                    <Link to={variant ? variant.url : ""}>
                        <h2>{product.title}{variant ? `: ${variant.title}` : ""}</h2>
                    </Link>
                    <p>{variant ? variant.description : product.description}</p>
                    <div className="basket-item__data-actions">
                        <button onClick={(e: any) => this.props.removeItem(item.productKey, item.variantKey)}>Löschen</button>
                        <input
                            type="number"
                            defaultValue={item.quantity.toString()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changeItemQuantity(parseInt(e.target.value), item.productKey, item.variantKey)}
                        />
                        <div className="basket-item__data-price">
                            {variant ? `${(variant.priceCents / 100).toFixed(0)}€` : null}
                            {variant ? <small>/ Tag</small> : null}
                        </div>
                    </div>
                </div>
            </div>
        }
        else {
            return null;
        }
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