import {useState, useEffect} from 'react'  //using hooks 

export default function GetDataFromAPI(url) {
    const [dataFromAPI, setDataFromAPI] = useState()
    useEffect(() => {
        async function fetchData(){  //async call to api
            console.log('fetching data')
            const data = await fetch(url)
            .then(res=>res.json() //i don't wanna use axios to fetch data, so doing extra steps to format data to json :P
            .catch(e=>console.log('error fetching data')))
            console.log('data fetching completed')
            setDataFromAPI(data);
        }
        fetchData();
    }, [url])
    return dataFromAPI;
}
