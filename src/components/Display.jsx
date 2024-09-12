import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { BlogContext } from "./BlogContext";

const Display = () => {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  return (
    <div className="display-outer">
      <h1>Explore  !!</h1>
      <div className="display-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="display-item">
            <h2>{blog.title}</h2>
            <button onClick={() => navigate(`/display/${blog.id}`)}>view blog</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="back-button display-back">Go back</button>
    </div>
  );
};

export default Display;
