import './scss/main.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import Loginpage from './pages/Loginpage';
import PageNotFound from './components/PageNotFound';
import ReportaNumberpage from './pages/ReportaNumberpage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="categories" element={<Categories />} />
                <Route path="blog" element={<Blog />} />
                <Route path="login" element={<Loginpage />} />
                <Route path="register" element={<Loginpage />} />
                <Route path="reportanumber" element={<ReportaNumberpage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
