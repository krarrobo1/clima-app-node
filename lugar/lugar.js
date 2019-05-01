const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let lugar = encodeURI(direccion);
    let res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${ lugar }&key=787aa852cf7c4cd6b806a865d8c506bd`)
    if (res.data.results.length == 0) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let info = res.data.results;
    let coordenadas = info[0].geometry;
    return {
        direccion: info[0].formatted,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}