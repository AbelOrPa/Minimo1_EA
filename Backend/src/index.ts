import { skipPartiallyEmittedExpressions } from 'typescript';
import app from './app';
import {startConnection} from './database'


//Funció principal que arrenca el servidor en el port desitjat i activa les possibles connexions
async function main(){
    startConnection();//Inicio conexión Base de Datos
    await app.listen(app.get('port'));//escucha por el puerto 25000
    console.log('Server on port',app.get('port'))
    console.log('Cors-enabled for all origins')
}

main();