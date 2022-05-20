import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  nombre: string = 'Nicolas Olaya';
  cargo: string = 'Admin';

  ngOnInit(): void {
  }

}
