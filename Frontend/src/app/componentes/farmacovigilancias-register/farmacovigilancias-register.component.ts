import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Farmacovigilancia } from 'src/app/Modelos/farmacovigilancia.interface';
import { FarmacovigilanciaService } from 'src/app/services/farmacovigilancia.service';

@Component({
  selector: 'app-farmacovigilancias-register',
  templateUrl: './farmacovigilancias-register.component.html',
  styleUrls: ['./farmacovigilancias-register.component.css']
})
export class FarmacovigilanciasRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private farmaSvc: FarmacovigilanciaService,private router:Router) { }

  registro = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    descripcion: new FormControl(''),
    responsable: new FormControl('',[Validators.required]),
    telefono: new FormControl('')
  })
  ngOnInit(): void {
    try{
      this.registro = this.fb.group({
        nombre: new FormControl(''),
        descripcion: new FormControl(''),
        responsable: new FormControl(''),
        telefono: new FormControl('')
      })
    }
    catch{
      throw new Error('Method not implemented.');
    }
  }
  addUnidad(nombreValue:string, descripcionValue:string, responsableValue:string,telefonoValue:string):void {

    if(this.registro.valid){


      //const fileUpload: this.fileUpload.nativeElement;


      let farmacovigilancia: Farmacovigilancia;
      this.farmaSvc.registerFarmacovigilancia(nombreValue, descripcionValue, responsableValue,telefonoValue)
      .pipe(take(1)).subscribe((res: any) =>{
        //Miramos que respuesta nos envia 
        if(res.code = "200"){
          //si es correcte tornarem a la pagina de tots els usauris
          this.router.navigate(['/farmacovigilancias-list']);
        }
        else{
          alert("Usuario no creado correctamente")
        }
      });
      

    }

    else{
      
    }

  }

}
