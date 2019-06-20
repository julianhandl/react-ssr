import React from "react";
import { IProductPageConfig, IProductPageConfigVariant } from "./ProductPage";
import "./ProductPageVisualStyles.scss";

interface IProductPageVisualProps {
    configuration: IProductPageConfig;
}

class ProductPageVisual extends React.Component<IProductPageVisualProps> {
    renderImages = () => {
        const { images } = this.props.configuration;

        if(images && images.length > 1) {
            return <div className="product-page__images">
                Slider
            </div>
        }
        else if(images && images.length === 1) {
            return <div className="product-page__images">
                {images[0]}
            </div>
        }
        else return null;
    }
    render() {
        const {activeVariantKey, variants} = this.props.configuration;
        const activeSelectionItem = variants.find((v) => v.key === activeVariantKey) || variants[0];
        const activeSelectionKey = activeSelectionItem ? activeSelectionItem.key : undefined;

        return <div className="product-page__visual">
            {this.renderImages()}
            <div className="product-page__timetable">
                <h3>Preisübersicht</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Variante</th>
                            <th>1 Tag</th>
                            <th>2 Tage</th>
                            <th>3 Tage</th>
                            <th>1 Woche</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.configuration.variants.map((v: IProductPageConfigVariant, i: number) => {
                            return <tr key={`pricetable-${i}-${v.key}`} className={v.key === activeSelectionKey ? "active" : ""}>
                                <td>{`${v.title}`}</td>
                                <td>{`${(v.priceTableDays.one / 100).toFixed(0)}€`}</td>
                                <td>{`${(v.priceTableDays.two / 100).toFixed(0)}€`}</td>
                                <td>{`${(v.priceTableDays.three / 100).toFixed(0)}€`}</td>
                                <td>{`${(v.priceTableDays.seven / 100).toFixed(0)}€`}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default ProductPageVisual;