import React, { useEffect, useState } from 'react'
import { Card } from '../Card';
import './Main.scss';
import { v4 as uuidv4 } from 'uuid'; 
import useDebounce from '../../Hooks/debounce';

export const Main = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then( (res) => res.json())
        .then((data) => setData(data))
    }, []);

      const [searchValue, setSearchValue] = useState('');
      const [searchResult, setSearchResult] = useState([]);
      const [ isSearching, setIsSearching ] = useState(false);
      const debounceSearchItem = useDebounce(searchValue, 400);
      useEffect(() => {
        if(debounceSearchItem) {
          setIsSearching(true);
          searchFetch(debounceSearchItem)
          .then(res => {
            setIsSearching(false)
            setSearchResult(res)
          })
        } else{
          setSearchResult([]);
        }
      }, [debounceSearchItem]);

      const searchFetch = (name) => {
       return fetch('https://restcountries.com/v2/name/' + name).then( res => res.json());
    } 
  return (
    <>
   <div className="container">
   <div className="form">
        <input type="search" id='search' placeholder='Enter country name' onChange={(evt) => setSearchValue(evt.target.value)}/>
        <select id="region">
            <option disabled selected>Sort by region</option>
        </select>
    </div>
   </div>
   <div className="container wrapper">
    {
       searchValue.length > 0 ? searchResult?.map( item => <Card props={item} key={uuidv4()}/>) : data?.map( item => <Card props={item}  key={uuidv4()}/>)
    }
   </div>
    </>
  )
}
