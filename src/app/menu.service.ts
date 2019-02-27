import { Injectable } from '@angular/core';
import { VistaMenu } from './vistaMenu';

@Injectable()
export class MenuService 
{
  vm : number;

  constructor() 
  { 
    //this.vm = new VistaMenu();
    this.vm = 0;
  }

  public elegirVista(vista) : void
  {
    // alert("Has elegido " + vista); // Funciona
    this.vm = vista;
  }

  public GetVista() : number
  {
    return this.vm;
  }
}
