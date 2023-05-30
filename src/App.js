import React, { useState } from 'react';
import './Styles/App.css';
import './Styles/Header.css';
import './Styles/search.css';
import './Styles/searchCity.css';
import './Styles/mobile.css';

import Header from './Components/Header';
import LocationButton from './Components/LocationButton';
import CitySearch from './Components/CitySearch';
import WeatherComponent from './Components/WeatherComponent';
import Button5Days from "./Components/Button5Days";

function App() {
  const [parentData, setParentData] = useState(null);
  const [fivedays, setFivedays] = useState(null);
  const [coords, setCoords] = useState(null);

  const handleChildData = (childData) => {
    setParentData(childData);
    setCoords(childData.coord)
    // setFivedays(null);
  };

  const handle5days = (childData) => {
    setFivedays(childData);
    // setCoords(childData.coord)
    // setParentData(null);
  };

  return (
    <>
      <Header />
      <Button5Days onChildData={handle5days} data={coords} />
      <CitySearch onChildData={handleChildData} />
      <LocationButton onChildData={handleChildData} />

      {parentData && <WeatherComponent data={parentData} />}

      <div className='days_mobile' style={{display: 'flex', justifyContent: 'center', gridGap: '20px'}}>
        {fivedays && fivedays.map((data, index) => (
          <WeatherComponent key={index} data={data} />
        ))}
      </div>
  </>
  );
}

export default App;