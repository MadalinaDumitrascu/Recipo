import { useEffect } from 'react'
import { useState } from 'react'
import { usePosition } from "use-position";


function MapLocation () {
    const { latitude, longitude, error } = usePosition();
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', lng: '' }
    })

    useEffect(() => {
        if (latitude && longitude && !error) {
            setLocation({ loaded: true, coordinates: { lat: latitude, lng: longitude } });
        }
    }, [latitude, longitude, error]);

    
    return (
        location
    )
}

export default MapLocation