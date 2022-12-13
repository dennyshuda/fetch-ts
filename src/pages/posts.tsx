import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { PostProps } from "../types/types";

export function Posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchPosts() {
    try {
      const response = await axios.get(`${url}`);
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
    <div>
      <h1>Home</h1>
      <div>
        {loading && <h1>loading...</h1>}
        {error && <h1>error</h1>}
        {post.map(({ id, title }: PostProps, index) => (
          <>
            <Card title={title} id={id} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
