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
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from './hooks/useAuth';
function App() {
    const [searchNumber, setSearchNumber] = useState('');

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Homepage setSearchNumber={setSearchNumber} />} />
                <Route path="search" element={<Categories setSearchNumber={setSearchNumber} searchNumber={searchNumber} />} />
                <Route path="login" element={<Loginpage />} />
                <Route path="register" element={<Loginpage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route element={<RequireAuth />}>
                    <Route path="reportanumber" element={<ReportaNumberpage />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>

            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
