import React from "react";
import ProductSelection, { IProductSelectionItem } from "./ProductSelection";
import { IProductPageConfig, IProductPageConfigVariant } from "./ProductPage";
import "./ProductPageDataStyles.scss";
import { ProductType } from "../../../../../data/products";
import { Link } from "react-router-dom";
import { urls } from "../../../Routes";
import { connect } from "react-redux";
import { basketActions } from "../../../actions/basket";

interface IProductPageDataActionProps {
    addToBasket: Function;
}

interface IProductPageDataOwnProps {
    configuration: IProductPageConfig;
}

interface IProductPageDataProps extends IProductPageDataOwnProps, IProductPageDataActionProps {}

const typeMapping = {
    [ProductType.package]: "Package",
    [ProductType.zelt]: "Zelt",
}

class ProductPageData extends React.Component<IProductPageDataProps> {
    selectionItems: IProductSelectionItem[];

    constructor(props: IProductPageDataProps) {
        super(props);

        this.selectionItems = props.configuration.variants.map((v : IProductPageConfigVariant) : IProductSelectionItem => {
            return {
                key: v.key,
                url: v.url,
                title: v.title,
                image: v.selectionImage,
                price: `${(v.priceCents / 100).toFixed(0)}€`,
                hint: v.hint
            };
        })
    }
    handleAdd = () => {
        const {activeVariantKey, productKey, variants} = this.props.configuration;
        this.props.addToBasket(productKey, activeVariantKey || variants[0].key, 1);
    }
    render() {
        const {activeVariantKey, variants} = this.props.configuration;
        const activeSelectionItem = variants.find((v) => v.key === activeVariantKey) || variants[0];
        const activeSelectionKey = activeSelectionItem ? activeSelectionItem.key : undefined;

        return <div className="product-page__data">
            <ProductSelection selectedKey={activeSelectionKey} items={this.selectionItems} />
            <div className="product-page__data-purchase">
                <div className="product-page__data-purchase-price">
                    <div className="product-page__data-purchase-price-info">
                        <span>inkl. Steuer</span>
                        <span>Typ: {typeMapping[activeSelectionItem.type]}</span>
                    </div>
                    <div className="product-page__data-purchase-price-value">
                        <span>{`${(activeSelectionItem.priceCents / 100).toFixed(0)}€`}</span>
                        <small>/ Tag</small>
                    </div>
                </div>
                <button onClick={this.handleAdd}>In den Warenkorb</button>
            </div>
            <article className="product-page__data-text">
                <p className="product-page__data-text-short">{activeSelectionItem.description}</p>
                <p className="product-page__data-text-long">{activeSelectionItem.text}</p>
                { activeSelectionItem.descriptionKlein ? <p className="product-page__data-text-sub">{activeSelectionItem.descriptionKlein}</p> : null }
            </article>
        </div>
    }
}

function mapDispatchToProps(dispatch: Function) : IProductPageDataActionProps {
    return {
        addToBasket: (productKey: string, variantKey: string, quantity: number) => dispatch(basketActions.addBasketItem(quantity, productKey, variantKey))
    }
}

export default connect(() => {}, mapDispatchToProps)(ProductPageData);