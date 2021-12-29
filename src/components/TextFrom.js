import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleULoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleUClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="bt btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="bt btn-primary mx-1" onClick={handleULoClick}>
          Convert To Lowercase
        </button>
        <button className="bt btn-primary mx-1" onClick={handleUClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here:"}</p>
      </div>
    </>
  );
}
