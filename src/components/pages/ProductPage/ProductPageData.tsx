import React from "react";
import ProductSelection, { IProductSelectionItem } from "./ProductSelection";
import { IProductPageConfig, IProductPageConfigVariant } from "./ProductPage";
import "./ProductPageDataStyles.scss";
import { ProductType } from "../../../../../data/products";
import { Link } from "react-router-dom";
import { urls } from "../../../Routes";

interface IProductPageDataProps {
    configuration: IProductPageConfig;
}

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
                <Link to={urls.kontakt}>Anfrage</Link>
            </div>
            <article className="product-page__data-text">
                <p className="product-page__data-text-short">{activeSelectionItem.description}</p>
                <p className="product-page__data-text-long">{activeSelectionItem.text}</p>
                { activeSelectionItem.descriptionKlein ? <p className="product-page__data-text-sub">{activeSelectionItem.descriptionKlein}</p> : null }
            </article>
        </div>
    }
}

export default ProductPageData;