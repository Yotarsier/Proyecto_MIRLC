import { Component, OnInit } from '@angular/core';
import { MenuService } from 'app/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private servicioM : MenuService) { }

  ngOnInit() {
  }

  public elegirVista(vista) : void
  {
    this.servicioM.elegirVista(vista);
  }
}
