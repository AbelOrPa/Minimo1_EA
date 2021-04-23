import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import path from 'path'

const app = express();

import indexRoutes from './Routes/index'


//settings
app.set('port', process.env.PORT || 25000); // Definimos el puerto de nuestro servidor


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Rutas de la API
app.use('/api',indexRoutes); 


app.use('/uploads',express.static(path.resolve('uploads')));



export default app;