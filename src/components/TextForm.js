import React, { useState } from "react";

export default function TextForm(props) {

  // Upper case
  const uppercase = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to UpperCase', 'success');
  };

  // Lower Case
  const lowercase = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to LowerCase', 'success');
  };

  // Camel Case
  const camelcase = () => {
      props.showAlert('Converted to CamelCase', 'success');
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
    navigator.clipboard.writeText(copiedText);
    document.getSelection().removeAllRanges();
    props.showAlert('Text Copied', 'warning');
  }

  // ON change event
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text";  ----wrong way
  // setText = ("new text"); ---right way for updation of state
  return (
    <div className="container mt-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black'} }
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={uppercase}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={lowercase}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={camelcase}>
          Camelcase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split('/\s+/').filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>Reading time: {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
