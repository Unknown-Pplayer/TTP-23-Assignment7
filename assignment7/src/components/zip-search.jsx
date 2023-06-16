import React, {useState} from 'react';
import axios from 'axios';

const ZipSearch = () => {
    const [zipState, setZipState] = useState();

        async function fetchzipCodeData(zipCode) {
            try {
                const dataResponse = await axios.get("https://zip-api.eu/api/v1/info/US-" + zipCode + "");
                console.log(dataResponse);
                const state = dataResponse.data.state;
                console.log(state);
                setZipState(state);
            } catch (error) {
                console.error(error);
            }
        }
        
    const handleSubmit = (event) => {
        event.preventDefault();
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
            <div>{zipState}</div>
        </div>

    );
}

export default ZipSearch;
