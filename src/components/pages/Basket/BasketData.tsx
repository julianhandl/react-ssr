import React from "react";
import "./BasketDataStyles.scss";
import Checkbox from "../../widgets/Checkbox/Checkbox";
import { basket } from "../../../reducers/basket";

interface IBasketDataProps {
    firstname: string;
    lastname: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    street: string;
    city: string;
    email: string;
    text: string;
    delivery: {
        checked: boolean;
        loading: boolean;
        priceCents: number | undefined;
        error?: Error;
    };
    pickup: {
        checked: boolean;
        loading: boolean;
        priceCents: number | undefined;
        error?: Error;
    };
    changeField: (field: string, value: any) => void;
    changeDelivery: (value: any) => void;
    changePickup: (value: any) => void;
}

export class BasketData extends React.Component<IBasketDataProps> {
    handleLocationChange = (field: string, value: any) => {
        this.props.changeField(field, value);
        // TODO Trigger Delivery Price Loading
    }
    render() {
        return <form className="basket__data">
            <table className="basket__data-table">
                <tbody>
                    <tr>
                        <td>Vorname</td>
                        <td>
                            <input
                                type="text"
                                required={true}
                                value={this.props.firstname}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changeField("firstname", e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Nachname</td>
                        <td>
                            <input
                                type="text"
                                required={true}
                                value={this.props.lastname}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changeField("lastname", e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Datum</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Straße</td>
                        <td>
                            <input
                                type="text"
                                required={true}
                                value={this.props.street}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleLocationChange("street", e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Ort</td>
                        <td>
                            <input
                                type="text"
                                required={true}
                                value={this.props.city}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleLocationChange("city", e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>E-Mail</td>
                        <td>
                            <input
                                type="email"
                                required={true}
                                value={this.props.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changeField("email", e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>
                            <textarea
                                value={this.props.text}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.props.changeField("text", e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Lieferung</td>
                        <td>
                            <Checkbox checked={this.props.delivery.checked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changeDelivery(e.target.checked)} />
                            <span title="Wir benötigen Straße und Ort um die Lieferung zu berechnen">Preis: --,--</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Abholung</td>
                        <td>
                            <Checkbox checked={this.props.pickup.checked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changePickup(e.target.checked)} />
                            <span title="Wir benötigen Straße und Ort um die Lieferung zu berechnen">Preis: --,--</span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td>Datenschutz</td>
                        <td>
                            <Checkbox required={true} checked={this.props.pickup.checked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.changePickup(e.target.checked)} />
                            <span className="basket__data-datenschutz">Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.</span>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Angebot holen</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    }
}

export default BasketData;