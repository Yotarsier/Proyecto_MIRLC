import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable()
export class PortfoliosService {

  lista : Array<Portfolio>;

  constructor() 
  {
    let portfoliosData = localStorage.getItem("portfolios");
    if (portfoliosData == null)
      this.lista = new Array<Portfolio>();
    else
    {
      this.lista = JSON.parse(portfoliosData);
    }
  }

  public alta(nomb: string, desc: string, fich: string) : void
  {
    if (nomb == "")
    {
      console.error("El campo Nombre no puede estar vacío");
      return;
    }

    let encontrado = false;
    for (let i = 0; !encontrado && i < this.lista.length; i++) 
    {
      if (this.lista[i].nombre == nomb)
        encontrado = true;
    }

    if (!encontrado)
    {
      let portf: Portfolio = new Portfolio(nomb, desc, fich);
      this.lista.push(portf);
      this.guardar();
    }
  }

  public guardar() : void
  {
    let portfolios = JSON.stringify(this.lista);
    localStorage.setItem("portfolios", portfolios);
  }

  public baja(nombre: string)
  {
    let indiceAEliminar = -1;
    for (let i = 0; indiceAEliminar == -1 && i < this.lista.length; ++i)
    {
      if (this.lista[i].nombre == nombre)
        indiceAEliminar = i;
    }

    if (indiceAEliminar != -1)
      this.lista.splice(indiceAEliminar, 1);
    
    this.guardar();
  }

  public listar() : Array<Portfolio>
  {
    return this.lista;
  }
}
