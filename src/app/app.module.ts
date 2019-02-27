import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormAltaComponent } from './form-alta/form-alta.component';
import { FormBajaComponent } from './form-baja/form-baja.component';
import { ListaComponent } from './lista/lista.component';
import { PortfoliosService } from './portfolios.service';
import { MenuService } from './menu.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations:
  [
    AppComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent,
    MenuComponent
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PortfoliosService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
