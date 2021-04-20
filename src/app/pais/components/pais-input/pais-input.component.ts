import { Component, OnInit, Output,EventEmitter } from '@angular/core';

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

  @Output() onEnter : EventEmitter<string> = new EventEmitter();

  termino : string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
