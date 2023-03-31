import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Explore } from "./pages/Explore/index";
import { Group } from "./pages/Group";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/explore/:groupId" element={<Group />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
