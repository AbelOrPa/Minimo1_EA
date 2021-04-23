import { Injectable } from '@angular/core';
import { Farmacovigilancia } from '../Modelos/farmacovigilancia.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmacovigilanciaService {

  constructor(private http: HttpClient) { }

  //Funcion para eliminar una unidad de farmacovigilancia
  deleteFarmacovigilancia(id:string):Observable<any>{
    return this.http.delete(`${environment.baseUrlAPI}/farmacovigilancia/${id}`);
  }

  //Funcion para obtener todas las unidades de Farmacovigilancia
  getFarmacovigilancias(query = ''):Observable<any> {
    return this.http.get(`${environment.baseUrlAPI}/farmacovigilancias`);
  }

//Funcion para registrar una nueva unidad 
  registerFarmacovigilancia(nombre: string, descripcion: string,responsable: string,telefono: string):Observable<any> {
    

    return this.http.post(`${environment.baseUrlAPI}/farmacovigilancia`, {
      nombre: nombre,
      descripcion: descripcion,
      responsable: responsable,
      telefono: telefono
    });
  }
}
