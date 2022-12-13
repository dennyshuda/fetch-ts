import { Link } from "react-router-dom";
import { PostProps } from "../types/types";

export function Card({ title, id }: PostProps) {
  return (
    <div key={id}>
      <h2>
        {title}
        <span>
          <Link to={`/post/${id}`}> More</Link>
        </span>
      </h2>
    </div>
  );
}
