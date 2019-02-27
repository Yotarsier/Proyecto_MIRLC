import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from 'app/portfolios.service';
import { Portfolio } from 'app/portfolio';

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
})
export class FormBajaComponent implements OnInit {

  arrayPortfolios: Array<Portfolio>;
  nombreSeleccionado : string;
  descripcionIntroducida : string;
  ficheroIntroducido : string;

  constructor(private servicio : PortfoliosService) 
  {
  }

  ngOnInit()
  {
    this.listar();
  }

  archivoSeleccionado(event) : void
  {
    this.ficheroIntroducido = event.target.files[0].name;
  }

  darBaja() : void
  {
    if (this.nombreSeleccionado != "<Elige un Nombre>")
    {
        this.servicio.baja(this.nombreSeleccionado);
    }
  }
  
  limpiar() {
    this.nombreSeleccionado = "";
    this.descripcionIntroducida = "";
    this.ficheroIntroducido = "";
  }

  darDeAlta() {
    // Lo justo para llamar al servicio
    this.servicio.alta(this.nombreSeleccionado, this.descripcionIntroducida, this.ficheroIntroducido);
  }

  public listar() : void
  {
    this.arrayPortfolios = this.servicio.listar();
  }  
}
