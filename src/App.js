import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import { Home } from "./pages/Home";
Modal.setAppElement("#root")

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
