import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import BlogInput from "./components/BlogInput";
import Display from "./components/Display";
import DetailedView from "./components/DetailedView";
import { BlogProvider } from "./components/BlogContext";

function App() {

  return (
    <>
      <BlogProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<BlogInput />} />
          <Route path="/display" element={<Display />} />
          <Route path="/display/:id" element={<DetailedView />} />
        </Routes>
      </BlogProvider>
    </>
  );
}

export default App;
