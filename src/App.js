import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Kristy-Ann Gaor and is open-sourced on{" "}
          <a
            href="https://github.com/kag0224/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/celadon-gingersnap-578713/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
