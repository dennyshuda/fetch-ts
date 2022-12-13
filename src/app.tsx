import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchPosts() {
    try {
      const response = await axios.get(`${url}`);
      console.log(response.data);
      setPost(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      {loading && <h1>loading...</h1>}
      {error && <h1>error</h1>}
      {post.map(({ id, title, body, userId }: Post) => {
        return (
          <>
            <li key={id}>
              <h1>{title}</h1>
              <h2>{body}</h2>
            </li>
            ;
          </>
        );
      })}
    </div>
  );
}

export default App;
