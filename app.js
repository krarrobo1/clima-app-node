const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);
        return `El clima en: ${coors.direccion} es de ${temperatura} grados celsius`
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}
getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err));