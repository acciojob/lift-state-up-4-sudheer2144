
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./Parent"
import Child from "./Child"

const App = () => {

  let [itemArr, setItemArr] = useState([]);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");

  let newItem = {};

  function getName(e) {
    setName(e.target.value)
  }

  function getPrice(e) {
    setPrice(e.target.value)
  }

  function addItem(e) {
    newItem.name = name
    newItem.price = price;
    setItemArr((prevItemArr) => {
      return [...prevItemArr, newItem]
    })
    setName("")
    setPrice("")
  }

  function removeItem(e) {
    let itemName = e.target.name
    let newItemArr = itemArr.filter((item) => {
      if (item.name !== itemName) {
        return item
      }
    })
    setItemArr(newItemArr)
  }

  return (
    <div>
      <Parent addItem={addItem} getName={getName} getPrice={getPrice} nameState={name} priceState={price} />
      <Child itemArr={itemArr} removeItem={removeItem} />
    </div>
  )
}

export default App
