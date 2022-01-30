import "./AppNew.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <Navbar/> */}
      <div className="container mt-3">
        <TextForm heading="Enter the text to annalyze below"/>
      </div>
    </>
  );
}

export default App;
