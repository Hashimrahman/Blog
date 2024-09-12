import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const addBlog = (title, content) => {
    const newBlog = { id: blogs.length + 1, title, content };
    setBlogs([...blogs, newBlog]);
    navigate("/display");
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );

};

// BlogProvider.PropTypes = {
//     children: PropTypes.node,
// }

// export default BlogProvider;

