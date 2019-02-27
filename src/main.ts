import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { PortfoliosService } from 'app/portfolios.service';
import { MenuService } from 'app/menu.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([PortfoliosService, MenuService]).bootstrapModule(AppModule);