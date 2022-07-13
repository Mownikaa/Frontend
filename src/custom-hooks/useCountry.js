import {useEffect, useState} from 'react';

export default function useCountry(url) {
    const [countryData, setCountryData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async function () {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setCountryData(data)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url])
    return {countryData, error, loading}
}