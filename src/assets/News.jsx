import axios from 'axios';
import React, { useState } from 'react';

export default function News() {
const url ="https://newsapi.org/v2/everything?q=apple&from=2023-01-24&to=2023-01-24&sortBy=popularity&apiKey=50e30f18960d48d38622c4b9dd822697";
const[data,setData]=useState(null);

React.useEffect(()=>{
    axios.get(`${url}`).then((response)=>{
        setData(response.data);
        console.log(data.articles);

    });
},[]);
    
    return (
        <div>

        </div>
    )
}
