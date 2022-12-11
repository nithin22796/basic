import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.drop2Value);
  const [dropValue, setDropValue] = useState(data);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setDropValue(evt.target.value);
    dispatch({
      type: "input_data2",
      value: evt.target.value,
    });
  };

  return (
    <>
      <h1>Home Tab</h1>
      <div className={`flex`}>
        <p>Dropdown1: </p>
        <select>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="Enter string" />
      </div>
      <div className="flex">
        <p>Dropdown2: </p>
        <select value={dropValue} onChange={handleChange}>
          <option value={""}>-</option>
          <option value={"Item 1"}>Item 1</option>
          <option value={"Item 2"}>Item 2</option>
          <option value={"Item 3"}>Item 3</option>
        </select>
      </div>
    </>
  );
}
