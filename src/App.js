import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Loginpage from "./pages/Loginpage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="categories" element={<Categories />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
