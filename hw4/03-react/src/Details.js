import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router'
const Details = () => {
    const [chData,setData]=useState({});
    const location=useLocation();
    useEffect(()=>{
        setData(location.data);
        console.log("Data",location.data)
    },[location])
    return (
        <div>
            <h1>Welcome to Character detail page</h1><br/>
            <img src={chData.imageUrl} alt={chData.image} width="300px" height="400px"/>
            <h1>Character Details</h1>
            <h2>Family: {chData.family}</h2>
            <h2>Full Name: {chData.fullName}</h2>
        </div>
    )
}

export default Details;
