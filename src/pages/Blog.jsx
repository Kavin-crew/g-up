import Header from '../components/Header';
import Banner from '../components/Banner';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Blog() {
    return (
        <>
            <Header />

            <div className="blogs helper-banner">
                <div className="wrapper">
                    <div className="blogs">
                        <h1 className="heading">Blog</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
