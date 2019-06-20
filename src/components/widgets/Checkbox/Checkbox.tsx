import React from "react";
import "./CheckboxStyles.scss";

interface ICheckboxProps {
    required?: boolean;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox : React.FC<ICheckboxProps> = ({checked, required, onChange}) => {
    return <span className="checkbox">
        <input type="checkbox" required={required} defaultChecked={checked} onChange={onChange} />
        <div className="checkbox__visual">
            <span className="checkbox__visual-background"></span>
            <span className="checkbox__visual-yes">Ja</span>
            <span className="checkbox__visual-no">Nein</span>
        </div>
    </span>
}

export default Checkbox;