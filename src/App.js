import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Explore } from "./pages/Explore/index";
import { Group } from "./pages/Group";
import { Books } from "./pages/Books";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/explore/:groupId" element={<Group />} />
    <Route path="/books/offset?/limit?" element={<Books />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
