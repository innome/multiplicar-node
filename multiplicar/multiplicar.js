const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`=====tabla de ${base}=====`.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${i} * ${base} = ${base * i}\n`);
    }

}





/**
 * en vez de declararlo con let se declara de la siguiente forma:
module.exports.crearArchivo
 */
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base}: no es un numero`)
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += (`${i} * ${base} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

// se recomienda hacerlo de esta forma, por el tema de que puede que hayan mas funciones 
module.exports = {
    crearArchivo,
    listarTabla
}