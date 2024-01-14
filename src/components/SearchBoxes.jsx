import SearchItem from './SearchItem';

function SearchBoxes({ sampleData }) {
    return (
        <div className="searchBoxes">
            <div className="searchBoxes_header">
                <h2>Date Reported</h2>
                <h2>Category</h2>
                <h2>Amount</h2>
                <h2>Action</h2>
            </div>

            <div className="searchItems">
                {sampleData.map((item) => (
                    <SearchItem data={item} key={item.id} />
                ))}
            </div>
            <div className="navigation">
                <button className="navigation_btn">prev</button>
                <button className="navigation_btn navigation_btn_box active">1</button>
                <button className="navigation_btn navigation_btn_box">2</button>
                <button className="navigation_btn navigation_btn_box">3</button>
                <button className="navigation_btn navigation_btn_box">4</button>
                <button className="navigation_btn">next</button>
            </div>
        </div>
    );
}

export default SearchBoxes;
