import react, {useState} from 'react';

function SearchBar(){
    const[search,setSearch] = useState('');
    const[category,setCategory] = useState('All');

    const containerStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'30px 20px',
        gap:'10px',
        backgroundColor:'#f5f5f5'

    };

    const inputStyle = {
        padding:'10px 15px',
        fontSize:'16px',
        borderRedious:'5px',
        border:'1px solid #ccc',
        width:'300px'
    };

    const selectStyle = {
        padding:'10px 15px',
        fontSize:'16px',
        borderRedious:'5px',
        border:'1px solid #ccc'
    };

    const buttonStyle={
        padding:'10px 20px',
        fontSize:'16px',
        borderRedius:'5px',
        border:'none',
        backgroundColor:'green',
        color:'white',
        cursor:'pointer',
        fontWeight:'bold'
    };

    const handleSearch = () => {
        alert(`Searching "${search}" in category "${category}"`);
    };

    return(
        <div style={containerStyle}>
            <input
               type="text"
               placeholder="Search Products..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               style={inputStyle}
               />

               <select
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               style={selectStyle}
               >
    
                <option value="All">All</option>
                  <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    </select>
                    <button onClick={handleSearch} style={buttonStyle}>
                    Search
                    </button>
                    </div>


                  
    );

}
export default SearchBar;