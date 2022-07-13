// This hook is used to fetch all countries
import   { useEffect, useState} from 'react'

export default function useCountries(url) {
    const [ countries, setCountries]= useState()
    const [error, setError]=useState(false)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData =async function(){
        try{
            const response = await fetch(url)
            let data = await response.json()
            setCountries(data)
            console.log(data)
        }catch (err){
setError(err)
        }finally {
            setLoading(false);
            }
    }
       fetchData() 
       
    }, [url])
  return { countries,error,loading}
}
