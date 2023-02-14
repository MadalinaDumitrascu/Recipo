import { useEffect } from 'react'
import { useState } from 'react'
import { usePosition } from "use-position";
import axios from 'axios'



const Supermarkets = () => {
    const { latitude, longitude, error } = usePosition();
    const [location, setLocation] = useState([{
        loaded: false,
        coordinates: { lat: 0, lng: 0 },
        label: 'supermarket'
    }])

    useEffect(() => {
        axios.get(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=supermarket%20par&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`, { withCredentials: true, baseURL: 'http://localhost:3000' })
            .then(res =>
                console.log(res.data))
    }, [])
    // useEffect(() => {
    //     if (latitude && longitude && !error) {
    //         setLocation({ loaded: true, coordinates: { lat: latitude, lng: longitude } });
    //     }
    // }, [latitude, longitude, error]);


    return (
        location
    )
}

export default Supermarkets