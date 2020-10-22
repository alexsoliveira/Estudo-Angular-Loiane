import { getTestBed } from '@angular/core/testing';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkPortal: string;

  // cursos: string[] = [
  //   'NodeJS',
  //   'NPM',
  //   'Angular CLI',
  //   'VS Code',
  //   'Git',
  //   'GitHub',
  // ];

  cursos: string[];

  constructor(
    private cursosService: CursosService
  ) {
    this.linkPortal = 'https://linkdeteste.com.br';
    this.cursos = this.cursosService.getCursos();
   }

  ngOnInit(): void {
  }

}
