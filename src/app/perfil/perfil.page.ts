import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  nombre="Hugo Cesar Galeano";
  profesion:string="";

  constructor() { 

    this.profesion="Desarrollador web"
  }

  ngOnInit() {
  }

  saludar(){
    alert("Hola desde Ionic");
  }

}
