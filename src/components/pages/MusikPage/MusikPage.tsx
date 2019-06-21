import React from "react";
import ProductPage, { IProductPageConfig, IProductPageConfigVariant } from "../ProductPage/ProductPage";
import ProductSelection, { IProductSelectionItem } from "../ProductPage/ProductSelection";
import { packageMusik } from "../../../../../data/products";
import { urls } from "../../../Routes";
import { IState } from "../../../reducers/root-reducer";
import { connect } from "react-redux";
import MusikIcon from "../../widgets/Icons/Musik";
import "./MusikPageStyles.scss";
import Helmet from "react-helmet";

interface IMusikPageProps {
    variant: string;
}

class MusikPage extends React.Component<IMusikPageProps> {
    render(){
        const configuration : IProductPageConfig = {
            name: "musik",
            title: "Musikanlagen",
            className: "musik-page",
            images: [
                <MusikIcon />
            ],
            productKey: packageMusik.key,
            activeVariantKey: this.props.variant,
            variants: Object.keys(packageMusik.variants)
                .map((key: string) : IProductPageConfigVariant => {
                    return {
                        ...packageMusik.variants[key],
                        hint: key === "mittel" ? "oft gewählt" : undefined,
                        selectionImage: <MusikIcon />
                    }
                }
            ),
        }

        return [
            <Helmet>
                <title>Musikanlagen | Party Partner</title>
                <meta name="description" content="Musikanlagen für Ihre Veranstaltung. Von Gartenparty bis Firmenevent in der perfekten Größe für ihre Gäste." />
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

export default connect(mapStateToProps)(MusikPage);