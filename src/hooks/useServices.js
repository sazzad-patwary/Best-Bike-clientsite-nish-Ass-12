import { useState, useEffect } from 'react';

const useServices = () => {
    const [services, setBikeServices] = useState([])
    useEffect(() => {
        fetch('https://desolate-earth-84933.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setBikeServices(data))
    }, [])
    return [services];
};
export default useServices;

/* {
    const [packages, setTourPackages] = useState([])
    useEffect(() => {
        fetch('https://aqueous-tundra-41879.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setTourPackages(data))
    }, [])
    return [packages];
}; */