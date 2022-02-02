import React, {useState} from 'react'
import "./AppNew.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');  //Wether dark mode is enabled or not

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(40,40,40)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'rgb(255,255,255)';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container mt-3">
        <TextForm heading="Enter the text to annalyze below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
