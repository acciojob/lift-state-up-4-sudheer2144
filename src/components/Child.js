
import React from "react";

const Child = (props) => {

    const { itemArr } = props

    return (
        <div className="child">
            <h2>Child Component</h2>
            {
                itemArr.map((item) => {
                    return (
                        <li key={item.name}>
                            {item.name}-${item.price}
                            <button name={item.name} onClick={props.removeItem}>Remove</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Child;