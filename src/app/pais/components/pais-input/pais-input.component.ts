import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  termino : string = "";

  buscar(){
    console.log(this.termino);
    

  }

}
