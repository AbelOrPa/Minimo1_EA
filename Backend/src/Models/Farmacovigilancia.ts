import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    nombre: { type: String , unique: true, required : true},
    descripcion: String,
    responsable: String,
    telefono: String,

});

interface IUser extends Document {
    nombre: string ;
    descripcion: string;
    responsable: string;
    telefono: string;

};

export default model<IUser>('User',schema);