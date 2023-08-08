import React from 'react'
import { useEffect } from 'react';

export default function () {

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6fc7120cb8msh0610504a5afffffp1b6848jsn3d88fcd0628c',
            'X-RapidAPI-Host': 'netflix-original-series-top-100-ranked.p.rapidapi.com'
        },
        body: {
            key1: 'value',
            key2: 'value'
        }
    };
const fetchData = async ()=>{
    try {
        const res = await fetch('https://netflix-original-series-top-100-ranked.p.rapidapi.com/uMEJkR/series', options);

        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    fetchData();
  });
  return (
    <>
   
    </>
    )
}
