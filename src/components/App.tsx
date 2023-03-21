import GlobalStyle from "./Global-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement("#root")

function App() {
 return (
  <BrowserRouter>
   <GlobalStyle />
   <Routes>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
