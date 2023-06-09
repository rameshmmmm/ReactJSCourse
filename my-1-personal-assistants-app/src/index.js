// 1. Import the React and ReactDOM packages
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2. Get a ref to the root div
const rootElement = document.getElementById("root");

// 3. Let React take control of that element
const root = ReactDOM.createRoot(rootElement);

// 5. Show the component on the screen
root.render(<App />);
