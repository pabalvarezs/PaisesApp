import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises : Country[] = [];


  constructor( private paisService : PaisService) { }

  buscar( termino :string){
    this.termino = termino;
    this.hayError =false;            

    console.log(this.termino);


    this.paisService.buscarPais(this.termino)
      .subscribe( resp => {
        // console.log(resp); 
        this.paises = resp;
      }, (err)=>{
        this.hayError =true;
        this.paises = [];
      }  
      );
  }

  sugerencias( termino :string)    {

    this.hayError = false;
    //TODO: crear sugernecia



  }
}
