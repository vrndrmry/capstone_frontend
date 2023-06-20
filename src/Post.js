import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div>
      <div className="post" >
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"https://car-blog-community-backend.onrender.com/" + cover} alt="postImg"></img>
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <Link className="author">{author.name}</Link>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}
