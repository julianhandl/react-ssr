import React from "react";
import "./ProductPageStyles.scss";
import ProductPageVisual from "./ProductPageVisual";
import ProductPageData from "./ProductPageData";
import { IProductVariant } from "../../../../../core/interfaces/IProduct";

export interface IProductPageConfigVariant extends IProductVariant {
    selectionImage: React.ReactNode;
    hint?: string;
}

export interface IProductPageConfig {
    name: string;
    title: string;
    className: string;
    images?: React.ReactNode[],
    productKey: string;
    activeVariantKey: string;
    variants: IProductPageConfigVariant[]
}

interface IProductPageProps {
    configuration: IProductPageConfig;
}

class ProductPage extends React.Component<IProductPageProps> {
    render(){
        const {name, title, className, variants, activeVariantKey} = this.props.configuration;
        const activeSelectionItem = variants.find((v) => v.key === activeVariantKey) || variants[0];
        const activeSelectionKey = activeSelectionItem ? activeSelectionItem.key : undefined;

        return [
            <section className={`page page--${name} product-page ${className}`} key={`page-${name}-key`}>
                <div className="container">
                    <h1 className="product-page__title">{title}</h1>
                    <div className="product-page__content">
                        <ProductPageVisual configuration={this.props.configuration} />
                        <ProductPageData configuration={this.props.configuration} />
                        <ProductPageVisual configuration={this.props.configuration} />
                    </div>
                    <div className="product-page__special">
                        <div className="product-page__special-text">
                            <h2>Spezielle Anfragen</h2>
                            <p>Sie haben nichts gefunden? Kontaktieren Sie uns direkt und wir finden eine Lösung fur Ihre Anforderung.</p>
                        </div>
                    </div>
                </div>
            </section>
        ]
    }
}

export default ProductPage;