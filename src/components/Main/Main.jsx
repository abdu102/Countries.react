import React, { useEffect, useState } from 'react'
import { Card } from '../Card';
import './Main.scss';
import { v4 as uuidv4 } from 'uuid';

export const Main = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then( (res) => res.json())
        .then((data) => setData(data))

        console.log(data);
    }, []);
  return (
    <>
   <div className="container">
   <div className="form">
        <input type="search" id='search' placeholder='Enter country name'/>
        <select id="region">
            <option disabled selected>Sort by region</option>
        </select>
    </div>
   </div>
   <div className="container wrapper">
    {data?.map( item => <Card props={item} key={uuidv4()}/>)}
   </div>
    </>
  )
}
