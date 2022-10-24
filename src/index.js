import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Navbar } from "./components/styled/Navbar.style";
import pokeLogo from "./components/images/logo.png";
import { NavPadding, Circle } from "./components/styled/Navbar.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "#eeeeee" }}>
      <Navbar>
        <img src={pokeLogo} alt="pokemon memory game" />
      </Navbar>
      <NavPadding>
        <Circle size="60px">
          <Circle size="40px" />
        </Circle>
      </NavPadding>
      <App />
    </div>
  </React.StrictMode>
);
