import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor( private paisService : PaisService ) { }

  ngOnInit(): void {
  }

  paises : Country[] = [];
  hayError : boolean = false;
  termino : string	= '';

  buscar( termino :string){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPorCapital(termino)
      .subscribe( resp =>{
        this.paises = resp;
      },
      (err)=>{
        this.hayError = true;
        this.paises = [];

      })

  }



}
