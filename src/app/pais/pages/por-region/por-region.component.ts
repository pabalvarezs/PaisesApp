import { Component, Input } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva : string = '';
  @Input() paises : Country[] = [];
  hayError : boolean = false;

  constructor( private paisService:PaisService) { }

  activarRegion( region: string){
    
    if (region === this.regionActiva) { return;  }
    
    this.hayError =false;
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe( paises =>{
      this.paises = paises;
    },
    (err) =>{
      this.hayError =true;
      this.paises = [];
    }
    );

  }



}
