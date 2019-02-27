import { Component } from '@angular/core';
import { MenuService } from 'app/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  constructor(private servicioM : MenuService) { }

  public GetVista() : number
  {
    return this.servicioM.GetVista();
  }
  title = 'Mi app en Angular';
  
  public elegirVista(vista) : void
  {
    this.servicioM.elegirVista(vista);
  }
}