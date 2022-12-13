import { Link, Route, Routes } from "react-router-dom";
import { Book } from "./pages/book";
import { Home } from "./pages/home";
import { Post } from "./pages/post";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/books"}>Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Book />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
    </div>
  );
}

export default App;
