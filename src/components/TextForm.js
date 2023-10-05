import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("All The Text Are Changed Into Uppercase", "success");
  };
  const handleOnChange = (e) => {
    // console.log(e)
    console.log("On Change");
    setText(e.target.value);
  };
  const clear = () => {
    const clear1 = "";
    setText(clear1);
    props.showAlert("All The Text Are Clear", "success");
  };
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // console.log("I am copy");

    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges()
    props.showAlert("All The Text Are Copy", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear}>
          Clear
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text to preview it here"}</p>
      </div>
    </>
  );
}
