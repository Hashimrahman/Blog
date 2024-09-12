import { useState,useContext } from "react";
import { BlogContext } from "./BlogContext";

const BlogInput = () =>{

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const {addBlog} = useContext(BlogContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        addBlog(title,content);
    }

    return(

       

        <div className="input-container">
            <form className="input-inner" onSubmit={handleSubmit}>
                <h1>Blog Entry</h1>
                <div className="input-section">
                    <input type="text" placeholder="Blog Title" className="input-elements" onChange={(e) => setTitle(e.target.value)}/>
                    <textarea type="text" placeholder="Blog Content" className="input-elements" onChange={(e) => setContent(e.target.value)}/>
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )

}

export default BlogInput