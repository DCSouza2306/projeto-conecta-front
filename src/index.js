import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

import { GroupProvider } from "./context/groupContext";
import { BookProvider } from "./context/bookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <GroupProvider>
  <BookProvider>
   <App />
  </BookProvider>
 </GroupProvider>
);
