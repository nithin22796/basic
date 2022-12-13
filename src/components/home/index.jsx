import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.home);
  console.log(data);
  const [drop1, setDrop1] = useState(data.drop1Value);
  const [drop2, setDrop2] = useState(data.drop2Value);
  const [input, setInput] = useState(data.inputValue);
  const dispatch = useDispatch();

  const handleChange = (evt, type) => {
    if (type === "drop1") {
      setDrop1(evt.target.value);
    } else if (type === "drop2") {
      setDrop2(evt.target.value);
    } else if (type === "input") {
      setInput(evt.target.value);
    }
    dispatch({
      type: type,
      value: evt.target.value,
    });
    if (type === "drop2") {
      dispatch({
        type: "tab_disabled",
        value: !evt.target.value.length > 0,
      });
    }
  };

  return (
    <>
      <h1>Home Tab</h1>
      <div className={`flex`}>
        <p>Dropdown1: </p>
        <select value={drop1} onChange={(e) => handleChange(e, "drop1")}>
          <option value={"Item 1"}>Item 1</option>
          <option value={"Item 2"}>Item 2</option>
          <option value={"Item 3"}>Item 3</option>
        </select>
      </div>
      {drop1 !== "Item 2" ? (
        <div>
          <input
            type="text"
            placeholder="Enter string"
            value={input}
            onChange={(e) => handleChange(e, "input")}
          />
        </div>
      ) : null}
      <div className="flex">
        <p>Dropdown2: </p>
        <select value={drop2} onChange={(e) => handleChange(e, "drop2")}>
          <option value={""}>-</option>
          <option value={"Item 1"}>Item 1</option>
          <option value={"Item 2"}>Item 2</option>
          <option value={"Item 3"}>Item 3</option>
        </select>
      </div>
    </>
  );
}
