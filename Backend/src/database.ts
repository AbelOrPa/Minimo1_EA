import mongoose from 'mongoose'
import { isJSDocAugmentsTag } from 'typescript'


export async function startConnection(){

    //Accedemos a la BBDD
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/Minimo1EA',{ 
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Connection with DATABASE (Minimo1EA) established')
}