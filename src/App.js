import React, { useState } from "react";
import "./AppNew.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //Wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const tintColors = {
    color1: "rgb(81 18 0)",
    color2: "rgb(3 0 22)",
    color3: "rgb(22 0 0)",
    color4: "rgb(0 12 0)",
  };

  let tintColor = "rgb(40,40,40)";

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = `${tintColor}`;
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(255,255,255)";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
        <BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} tintColors={tintColors}/>
        
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to annalyze below" mode={mode}/>} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
