import { useEffect } from "react"
import axios from 'axios';

export const Axios = () => {
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/api/login/getmethod`)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
        <p>Login succes</p>
        </>
    )
}