import React from "react";
import ProductPage, { IProductPageConfig, IProductPageConfigVariant } from "../ProductPage/ProductPage";
import { packageMusik, partyZelt } from "../../../../../data/products";
import { IState } from "../../../reducers/root-reducer";
import { connect } from "react-redux";
import MusikIcon from "../../widgets/Icons/Musik";
const zelte = require("../../../resources/images/zelte.svg");
const zelteText = require("../../../resources/images/zelte_text.svg");
import "./ZeltPageStyles.scss";
import Helmet from "react-helmet";

interface IMusikPageProps {
    variant: string;
}

class ZeltPage extends React.Component<IMusikPageProps> {
    render(){
        const configuration : IProductPageConfig = {
            name: "zelt",
            title: "Zelte",
            className: "zelt-page",
            images: [
                <img src={zelte} />
            ],
            productKey: partyZelt.key,
            activeVariantKey: this.props.variant,
            variants: Object.keys(partyZelt.variants)
                .map((key: string) : IProductPageConfigVariant => {
                    return {
                        ...partyZelt.variants[key],
                        hint: key === "4.5x3" ? "oft gewählt" : undefined,
                        selectionImage: <div>
                            <img src={zelteText} />
                            <span>{key === "4.5x3" ? "13,5" : key === "12x5" ? "60" : ""}</span>
                        </div>
                    }
                }
            ),
        }

        return [
            <Helmet>
                <title>Zelte | Party Partner</title>
                <meta name="description" content="Professionelle Zelte für gemütliche Athmosphäre im Freien. Vom einfachen Faltpavillon bis zum klassischen Partyzelt." />
            </Helmet>,
            <ProductPage configuration={configuration} />
        ];
    }
}

function mapStateToProps(state: IState) : IMusikPageProps {
    const query = new URLSearchParams(state.router.location!.search);
    const variant = query.get("variante") || "";

    return {
        variant
    }
}

export default connect(mapStateToProps)(ZeltPage);