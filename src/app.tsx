import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Post } from "./pages/post";
import { Posts } from "./pages/posts";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
    </div>
  );
}

export default App;
