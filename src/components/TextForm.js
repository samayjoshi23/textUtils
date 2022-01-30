import React, {useState} from "react";


export default function TextForm(props) {
    const uppercase = ()=> {
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
    }
    const lowercase = ()=> {
        console.log("uppercase was clicked");
        setText(text.toLowerCase());
    }
    const handleOnChange = (event)=> {
        console.log("On Changed");
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter text here');
    // text = "new text";  ----wrong way
    // setText = ("new text"); ---right way for updation of state
    return (
    <>
      <h1 className="my-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={uppercase}>To Uppercase</button>
      <button className="btn btn-primary" onClick={lowercase}>To Lowercase</button>
    </>
  );
}
