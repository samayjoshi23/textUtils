import React, { useState } from "react";

export default function TextForm(props) {

  // Upper case
  const uppercase = () => {
    setText(text.toUpperCase());
  };

  // Lower Case
  const lowercase = () => {
    setText(text.toLowerCase());
  };

  // Camel Case
  const camelcase = () => {
      let newText = text.split(" ").map((currentValue) => {
          let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
          return newText;
      });
      setText(newText.join(" "));
  };

  // Copy to clipboard
  const copyText = () => {
    let copiedText = document.getElementById('myBox');
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
  }

  // ON change event
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text";  ----wrong way
  // setText = ("new text"); ---right way for updation of state
  return (
    <>
      <div className="container">
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'light':'dark'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={uppercase}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowercase}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={camelcase}>
          Camelcase
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words, {text.length} characters</p>
        <p>Reading time: {0.008*text.split(' ').length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
