import React from "react";
import { useSelector } from "react-redux";

export default function Questions() {
  const questions = useSelector((state) => state.questions.data);
  return (
    <>
      <h1>Questions</h1>
      {questions.map((item) => (
        <div key={item.id}>
          <h5>{item.question}</h5>
          <input type="text" placeholder="enter your answer" />
        </div>
      ))}
    </>
  );
}
