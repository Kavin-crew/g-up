import './scss/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
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
                <Route path="*" element={<PageNotFound />} />

                <Route element={<RequireAuth allowed="user" />}>
                    <Route path="reportanumber" element={<ReportaNumberpage />} />
                    <Route path="blog" element={<Blog />} />
                </Route>

                <Route element={<RequireAuth allowed="admin" />}>
                    <Route path="search" element={<Categories setSearchNumber={setSearchNumber} searchNumber={searchNumber} />} />
                    <Route path="dashboard" element={<Admin />} />
                </Route>
            </Routes>

            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
