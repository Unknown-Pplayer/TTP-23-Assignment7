import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ZipSearch = () => {
    const [zipCodeDataState, setzipCodeDataState] = useState();
    // const [zipCode, setZipCodeState] = useState();

    // useEffect(() => {
        async function fetchzipCodeData(zipCode) {
            try {
                const dataResponse = await axios.get("https://zip-api.eu/api/v1/info/US-" + zipCode + "");
                console.log(data);
                // setzipCodeDataState(data);
                // this.setState(list.data.results)
            } catch (error) {
                console.error(error);
            }
        }
        
    // }, );
    const handleSubmit = (event) => {
        event.preventDefault();
        // setZipCodeState(event.target[0].value);
        const zipCode = event.target[0].value;
        fetchzipCodeData(zipCode);
    }
    
    
    return (
        <div>
            <h1>Please Enter ZipCode</h1>
            <form onSubmit={handleSubmit}> 
                <label>ZipCode</label>
                <input type="text" />
                <button id="Submit" type="submit">Submit</button>
            </form>
            {/* {zipCodeDataState.map(zipCodeData=>{
                return <p>{zipCodeData.place_name}</p>
            })} */}
        </div>

    );
}

export default ZipSearch;
