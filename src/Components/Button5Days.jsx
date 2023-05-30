// import { useState } from "react";
import '../Styles/days5.css';

function Button5Days(props) {

    const fetchData = async () => {
        // const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.data.lat}&lon=${props.data.lon}&cnt=40&appid=7e47a68c28d68186c6782da3c4266230`);
        const data = await response.json();
        const filteredData = data.list.filter((item, index) => index % 8 === 0);
        props.onChildData(filteredData);
    };


    return (
        <div>
            <button className='butt_5' onClick={fetchData}>5 дней</button>
        </div>
    );
}

export default Button5Days;