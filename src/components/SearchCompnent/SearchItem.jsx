import { useState } from "react";




function SearchItem({ data }) {
    
    
    const [showDetails,setShowDetails] = useState(false);
    
    return (
        <div className="searchItem">
            {console.log(data)}
            <h2>{data.date}</h2>
            <h2>{data.category}</h2>
            <h2>PHP {data.amount}</h2>
            <div className="searchItem_btn_holder">
                <button>View More Details</button>
            </div>
        </div>
    );
}

export default SearchItem;
