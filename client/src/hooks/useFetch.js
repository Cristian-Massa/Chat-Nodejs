import axios from "axios";
import { useEffect } from "react";

export function useFetch (){
    const [contacts, setContacts] = useState({})
    useEffect(()=>{
        axios.get('/contacts')
            .then(res => res.data)
            .then(data =>{
                setContacts(data)
            })
    }, [])
    return contacts
};