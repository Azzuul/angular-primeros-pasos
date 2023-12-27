import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl:'./list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  //@Input('aqui puedo cambiarle el nombre, o si no toma el de la propiedad')
  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }

  @Output()
  onDelete:EventEmitter<string> = new EventEmitter();

 }
