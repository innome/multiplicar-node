const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
}
// console.log(process.argv);

//let argv2 = process.argv;
// let parametro = arvg[2];
// let base = parametro.split('=')[1];