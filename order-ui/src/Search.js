import React, {useState, useEffect} from "react";

const Search=(props)=>{
    const {searchTextReader,searchToggle} = props

    const [srcTxt,setSrcText] = useState('')

    const handleSrcTxtChange=(e)=>{
        setSrcText(e.target.value)
        // searchTextReader(srcTxt)
    }

    useEffect(()=>{
        searchTextReader(srcTxt)
    },[srcTxt])

    return(
        <div>
            Search: &nbsp;
            <input type='text' placeholder="enter item name to search" value={srcTxt} onChange={handleSrcTxtChange} />
            &nbsp;
            {
                searchToggle && <span>Found nothing against entered text, showing all items</span>
            }
        </div>
    )
}

export default Search