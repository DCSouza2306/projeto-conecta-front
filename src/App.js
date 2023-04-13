import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { ExploreGroups } from "./pages/ExploreGroups/index";
import { Group } from "./pages/Group";
import { ExploreBooks } from "./pages/ExploreBooks";
import { Book } from "./pages/Book";
import { User } from "./pages/User";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";


function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore/groups" element={<ExploreGroups />} />
    <Route path="/explore/group/:groupId" element={<Group />} />
    <Route path="/explore/books/offset?/limit?" element={<ExploreBooks />} />
    <Route path="/explore/book/:bookId" element={<Book />} />
    <Route path="/user/:userName" element={<User />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
