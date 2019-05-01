const axios = require('axios');


const getClima = async(lat, lng) => {
    let info = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3e09db1448ea5c202250da734e544b3e`);
    return info.data.main.temp;
}

module.exports = {
    getClima
}