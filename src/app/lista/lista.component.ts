import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from 'app/portfolios.service';
import { Portfolio } from 'app/portfolio';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrayPortfolios: Array<Portfolio>;

  constructor(private servicio : PortfoliosService) { }

  ngOnInit() 
  {
    this.listar();
  }

  public listar() : void
  {
    this.arrayPortfolios = this.servicio.listar();
  }  
}
