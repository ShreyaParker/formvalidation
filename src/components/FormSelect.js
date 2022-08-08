import React from 'react';
import "./formSelect.css"
const FormSelect = (props) => {

    const {onChange}=props
    return (
        <div className="FormSelect">
            <label>Gender:</label>
            <select name="gender" onChange={onChange} >
                <option value="select">--Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>

        </div>
    );
};

export default FormSelect;