import React, {useState} from 'react';
import axios from 'axios';

const ZipSearch = () => {
    const [zipCode1, setZipCode1] = useState('');
    const [zipCode2, setZipCode2] = useState('');
    const [distance, setDistance] = useState('');
        
    async function fetchzipCodeData(startZipCode, endZipCode) {
        try {
            const dataResponse = await axios.get("https://zip-api.eu/api/v1/distance/US-" + startZipCode + "/US-" + endZipCode + "/mi");
            console.log(dataResponse);
            const distance = dataResponse.data.distance;
            console.log(distance);
            setDistance(distance);     
        } catch (error) {
            console.error(error);
        }
    }
    // When pressing the submit button   
    const handleSubmit = (event) => {
        event.preventDefault();
        const startZipCode = event.target[0].value;
        const endZipCode = event.target[1].value
        fetchzipCodeData(startZipCode, endZipCode);
        //function to calculate distance here:
    }
    
    
    return (
        <div>
            <h1>Please Enter ZipCode</h1>
            <form onSubmit={handleSubmit}> 
                <label>Start ZipCode</label>
                <input type="text" />
                <label>End ZipCode</label>
                <input type="text" />
                <button id="Submit" type="submit">Submit</button>
            </form>
            <div>{distance}</div>
        </div>

    );
}

export default ZipSearch; 