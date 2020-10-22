import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      'NodeJS',
      'NPM',
      'Angular CLI',
      'VS Code',
      'Git',
      'GitHub',
    ];
  }
}
