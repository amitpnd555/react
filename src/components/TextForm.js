import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case Fired" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };

  const handleLowerClick = () => {
    console.log("Upper case Fired" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleClearText = () => {
    console.log("Clear Text fired");
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared","success");
  };

  const handleCopy = () => {
   
    let text = document.getElementById("myBox");
    console.log(text.value)
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");
  };
  
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}}
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
          <button
            type="button"
            className="btn btn-outline-danger my-1 mx-1"
            onClick={handleUpClick}
          >
            Upper Case
          </button>
          <button
            type="button"
            className="btn btn-outline-danger my-1 mx-1"
            onClick={handleLowerClick}
          >
            Lower Case
          </button>
          <button
            type="button"
            className="btn btn-outline-danger my-1 mx-1"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-outline-danger my-1 mx-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h1 style={{color: props.mode==="dark"?"white":"black"}}>Your text Summary</h1>
        <p style={{color: props.mode==="dark"?"white":"black"}}>
          {text.split(" ").length} words,
          {text.length} characters
        </p>
        <p style={{color: props.mode==="dark"?"white":"black"}}>Time to read {0.008 * text.split(" ").length};</p>
        <h3 style={{color: props.mode==="dark"?"white":"black"}}>Preview</h3>
        <p style={{color: props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Enter text above to preview"}</p>
      </div>
    </>
  );
}
