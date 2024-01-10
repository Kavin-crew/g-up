import Header from '../components/Header';
import Banner from '../components/Banner';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Middle from '../components/Middle';
import HowItWorks from '../components/HowItWorks';
import Search from '../components/Search';

function Homepage() {
    return (
        <>
            <Banner />
            <Middle />
            <Main />
            <HowItWorks />
            <Search />
        </>
    );
}

export default Homepage;
