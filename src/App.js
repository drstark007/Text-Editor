import "./App.css";
import React, { useState } from "react";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={ */}
        {/* <About /> */}
        {/* } /> */}

        {/* <Route
              exact
              path="/"
              element={ */}
        <TextFrom heading="Enter Text Here" mode={mode} showAlert={showAlert} />
        {/* }
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
