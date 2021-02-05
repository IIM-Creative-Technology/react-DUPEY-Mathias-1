import axios from 'axios'

const URL  = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = '11ba4a144916b9f0574c9e80c7c71e50';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units : 'metric',
            APPID : API_Key,
        }
    });

    return data;
}