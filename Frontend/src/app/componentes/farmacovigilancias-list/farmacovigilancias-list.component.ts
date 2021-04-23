import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Farmacovigilancia } from 'src/app/Modelos/farmacovigilancia.interface';
import { FarmacovigilanciaService } from 'src/app/services/farmacovigilancia.service';

@Component({
  selector: 'app-farmacovigilancias-list',
  templateUrl: './farmacovigilancias-list.component.html',
  styleUrls: ['./farmacovigilancias-list.component.css']
})
export class FarmacovigilanciasListComponent implements OnInit {

  farmacovigilancias: Farmacovigilancia[] = [];
  private query: string = '';

  constructor(private farmaSvc: FarmacovigilanciaService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.getFarmacovigilancias();

  }

  getFarmacovigilancias():void{
    this.farmaSvc.getFarmacovigilancias(this.query).pipe(take(1)).subscribe((res:any)=>{
      
      if (res.code == "200"){

        this.farmacovigilancias = res.farmacovigilanciasList;
        console.log(this.farmacovigilancias)
      }
      else{
        this.farmacovigilancias = []
      }
    })
  }
  deleteFarmacovi(id:string):void{

    this.farmaSvc.deleteFarmacovigilancia(id).pipe(take(1)).subscribe(res => {
        if(res.code == "200"){
            
            window.location.reload();
            console.log('Unidad de farmacovigilancia eliminada con exito')

        }

        else{

            console.log('No es posible eliminar la unidad de farmacovigilancia seleccionada')
        }

    });
    
    
}

}
