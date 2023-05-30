import { useState, useEffect } from "react";
import '../Styles/locationButton.css';

function LocationButton(props) {
  const [location, setLocation] = useState(null);
  // const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    if (location) {
      fetchData();
    }
  }, [location]);

  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude.toFixed(2)}&lon=${location.longitude.toFixed(2)}&appid=7e47a68c28d68186c6782da3c4266230`)
      .then(response => response.json())
      .then(data2 => {
        console.log('Data 2:', data2);
        props.onChildData(data2);
      })
      .catch(error => console.error(error));
  }


  const handleClick = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              console.error('Error getting geolocation:', error);
            }
          );
        } else if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            () => {
              alert('Вы можете ввести город вручную...')
            }
          );
        } else if (result.state === 'denied') {
          alert('You have denied geolocation permission. Please manually enter your city.');
        }
      });
    } else {
      alert('Geolocation is not supported in your browser. Please manually enter your city.');
    }
  };

  return (
    <div>
      <button className="butt-loc" onClick={handleClick}></button>
    </div>
  );
}

export default LocationButton;