import Banner from '../components/Banner';
import Main from '../components/Main';
import Middle from '../components/Middle';
import HowItWorks from '../components/HowItWorks';
import Search from '../components/SearchCompnent/Search';


function Homepage({ setSearchNumber }) {

    return (
        <>
       
            <Banner />
            <Middle />
            <Main />
            <HowItWorks />
            <Search setSearchNumber={setSearchNumber} />
        </>
    );
}

export default Homepage;
