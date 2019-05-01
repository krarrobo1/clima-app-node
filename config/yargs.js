const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'lugar que desea consultar',
            demand: true
        }
    }).argv;

module.exports = {
    argv
};