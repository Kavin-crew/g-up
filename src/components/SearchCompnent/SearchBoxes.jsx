import SearchItem from './SearchItem';

function SearchBoxes({ sampleData }) {
    return (
       
            <>
            
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
            </>
         
    );
}

export default SearchBoxes;
