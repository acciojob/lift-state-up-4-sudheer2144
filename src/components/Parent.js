
import React from "react";

const Parent = (props) => {
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <label htmlFor="item">Item Name:</label>
            <input type="text" name="item" id="itemName" onChange={props.getName} value={props.nameState} />
            <label htmlFor="price">Item Price:</label>
            <input type="text" name="price" id="itemPrice" onChange={props.getPrice} value={props.priceState} />
            <button onClick={props.addItem}>Add Item</button>
        </div>
    )
}

export default Parent;