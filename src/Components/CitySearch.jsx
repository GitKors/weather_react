import React, { useState } from 'react';
import '../Styles/Input.css'
import '../Styles/search.css'

function CitySearch(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const apiKey = process.env.REACT_APP_API_KEY;
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {

  await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=10&appid=7e47a68c28d68186c6782da3c4266230`)
  .then(response => response.json())
  .then(data1 => {
    console.log('Data 1:', data1);
    let x = data1[0]
    console.log(x.name)
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x.name}&appid=7e47a68c28d68186c6782da3c4266230`);
  })
  .then(response => response.json())
  .then(data2 => {
    console.log('Data 2:', data2);
    props.onChildData(data2);
    setSearchResults(data2);
  })
  .catch(error => console.error(error));
  
  };



  return (
    <div className='search_city'>
      <input type="text" className='input' placeholder='Введите город...' value={searchTerm} onChange={handleChange} />
      <button className='search' onClick={handleSearch}>Найти</button>
    </div>
  );
}

export default CitySearch;