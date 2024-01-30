import { useNavigate } from 'react-router-dom';

function Search({ setSearchNumber }) {
    const navigate = useNavigate();

    const submitSearch = (e) => {
        e.preventDefault();

        navigate('/search');
    };

    return (
        <div className="search">
            <div className="wrapper">
                <div className="search_con">
                    <div className="search_con_info">
                        <h2 className="heading">Search it now!</h2>
                        <p>
                            <span>Curious if that gcash user is associated with a scam?</span>
                            <b>Enter the number</b> and quickly verify whether a number has been reported as a scammer by our vigilant community.
                        </p>
                    </div>

                    <form action="" method="post" onSubmit={submitSearch} className="search_con_form">
                        <input type="text" placeholder="09XX-XXX-XXXX" onChange={(e) => setSearchNumber(e.target.value)} required />
                        <button type="submit" className="search_con_form_btn">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;
