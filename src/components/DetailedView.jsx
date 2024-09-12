import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "./BlogContext";

const DetailedView = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const data = blogs.find((a) => a.id === parseInt(id));
  const navigate = useNavigate();

  if (!data) return <h1>Blog Not Found</h1>;
  return (
    <div className="detailedview-container">
      <div>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">Go back</button>
    </div>
  );
};

export default DetailedView;
