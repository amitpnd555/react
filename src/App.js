import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const NavMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode enabled", "success");
      document.title = "Text Util - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
      document.title = "Text Util - Light Mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="Text Util"
        about="About Us"
        mode={mode}
        NavMode={NavMode}
      />
      <div className="container">
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />}/>
        </Routes>
       
      </div>
      </Router>
    </>
  );
}

export default App;
