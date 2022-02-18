import axios from 'axios'
import { useState, useEffect } from 'react';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            error.response ? console.log(error.response.data)
            :
            <p>Erro inesperado</p>
        })
    }, [url]);

    return data;
}

export default useRequestData;
