import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from 'app/portfolios.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form-alta',  // <app-form-alta> Etiqueta </app-form-alta>
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {
  
  titulo : string;
  servPortfolios : PortfoliosService;
  
  constructor(sp : PortfoliosService, private http: Http) 
  {
    this.servPortfolios = sp;
  }

// Método, correspondiente al evento "Al inicializar este Componente", es decir, recibe una llamada automática por parte del motor de Angular
  ngOnInit() {  
    this.titulo = "Alta de portolios";
  }
  

  selectedFile = null;

  archivoSeleccionado(event) 
  {
    this.selectedFile = event.target.files[0].name;
    console.log(this.selectedFile);
  }

  // cargarArchivo()
  // {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   fd.append('test', this.selectedFile, this.selectedFile.name);
  //   console.log(fd);
  //   this.http.post('http://localhost:9000/api/portfolios', fd).subscribe(res => {
  //     console.log(res);
  //   })
  // }

  reset()
  {
    alert("reset");
  }

  submit()
  {
    alert("submit");
  }
}
