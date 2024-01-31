import { useEffect, useState } from 'react';
import SearchBoxes from '../components/SearchCompnent/SearchBoxes';
function Categories({ searchNumber, setSearchNumber }) {
    const [tempNumber, setTempNumber] = useState(searchNumber);
    const [totalNumber, setTotalNumber] = useState(1784);
    const [reports,setReports] = useState();
    const sampleData = [
        { id: 1, date: 'January 1, 2024', category: '1E-Games', amount: 1000 },
        { id: 2, date: 'January 2, 2024', category: '2E-Games', amount: 2000 },
        { id: 3, date: 'January 3, 2024', category: '3E-Games', amount: 3000 },
        { id: 4, date: 'January 4, 2024', category: '4E-Games', amount: 4000 },
        { id: 5, date: 'January 5, 2024', category: '5E-Games', amount: 5000 },
        { id: 6, date: 'January 6, 2024', category: '6E-Games', amount: 6000 },
    ];


    useEffect( ()=>{
    
        const getReport = async () =>{
            const res = await fetch("http://127.0.0.1:3000/api/v1/reports");
            const report = await res.json();
            setReports(report);

        }

        getReport()

        
    

    },[])

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


                        <div className="searchBoxes">
            <div className="searchBoxes_header">
                <h2>Date Reported</h2>
                <h2>Category</h2>
                <h2>Amount</h2>
                <h2>Action</h2>
            </div>

                        {searchNumber ? <SearchBoxes sampleData={sampleData} /> :  <figure className='nodata'>
                                <img src="images/formkit_sad.svg" alt="sad face" />
                                <figcaption>no data found. </figcaption>
                            </figure>}


        </div>




                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
