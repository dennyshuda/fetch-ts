import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostProps } from "../types/types";

export function Post() {
  const params = useParams();
  const id = params.id;
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState<PostProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchPosts() {
    try {
      const response = await axios.get(`${url}/${id}`);
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
      {loading && <h1>loading...</h1>}
      {error && <h1>error</h1>}
      {post && (
        <div>
          <h1>No: {id}</h1>
          <h2>Title: {post?.title}</h2>
          <h3>Post: {post?.body}</h3>
        </div>
      )}
    </div>
  );
}
