import React from "react";
import "./ProductSelectionStyles.scss";
import { Link } from "react-router-dom";

export interface IProductSelectionItem {
    key: string;
    url: string;
    title: string;
    image?: React.ReactNode;
    price: string;
    hint?: string;
}

interface IProductSelectionProps {
    items: IProductSelectionItem[];
    selectedKey?: string;
}

class ProductSelection extends React.Component<IProductSelectionProps> {
    shouldComponentUpdate(nextProps: IProductSelectionProps) {
        return this.props.items !== nextProps.items
            || this.props.selectedKey !== nextProps.selectedKey;
    }
    render() {
        return <nav className="product-selection">
            {this.props.items.map((item: IProductSelectionItem, i: number) => {
                let classes = `product-selection__item product-selection__item--${item.key}`;
                if(this.props.selectedKey && this.props.selectedKey === item.key) classes += " product-selection__item--active";

                return <Link key={`productselection-${i}-${item.key}`} to={item.url} itemProp="name" className={classes}>
                    <h2 className="product-selection__item-title">
                        {item.title}
                        { item.hint ? <small>{item.hint}</small> : null }
                    </h2>
                    <div className="product-selection__item-image">{item.image}</div>
                    <div className="product-selection__item-price">{item.price}</div>
                    { item.hint ? <div className="product-selection__item-hint"><span>{item.hint}</span></div> : null }
                </Link>
            })}
        </nav>
    }
}

export default ProductSelection;