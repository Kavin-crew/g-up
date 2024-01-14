import { useState } from 'react';
import SearchBoxes from '../components/SearchBoxes';
function Categories({ searchNumber, setSearchNumber }) {
    const [tempNumber, setTempNumber] = useState(searchNumber);
    const [totalNumber, setTotalNumber] = useState(1784);

    const sampleData = [
        { id: 1, date: 'January 1, 2024', category: '1E-Games', amount: 1000 },
        { id: 2, date: 'January 2, 2024', category: '2E-Games', amount: 2000 },
        { id: 3, date: 'January 3, 2024', category: '3E-Games', amount: 3000 },
        { id: 4, date: 'January 4, 2024', category: '4E-Games', amount: 4000 },
        { id: 5, date: 'January 5, 2024', category: '5E-Games', amount: 5000 },
        { id: 6, date: 'January 6, 2024', category: '6E-Games', amount: 6000 },
    ];

    const submitSearch = (e) => {
        e.preventDefault();
        setSearchNumber(tempNumber);
    };

    return (
        <>
            <div className="categories helper-banner">
                <div className="wrapper">
                    <div className="categories_con">
                        <div className="categories_con_info">
                            {searchNumber && (
                                <h2>
                                    There are <span className="blue">{totalNumber}</span> reports found for{' '}
                                    <span className="blue">{searchNumber}</span>.
                                </h2>
                            )}

                            <form action="" method="post" onSubmit={submitSearch} className="categories_con_info_form">
                                <input
                                    type="number"
                                    placeholder="09XX-XXX-XXXX"
                                    value={tempNumber}
                                    onChange={(e) => setTempNumber(e.target.value)}
                                    required
                                />
                                <button type="submit" className="categories_con_info_form_btn">
                                    Search
                                </button>
                            </form>
                        </div>

                        {searchNumber ? <SearchBoxes sampleData={sampleData} /> : <h1 class="noData">No Data Found</h1>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
