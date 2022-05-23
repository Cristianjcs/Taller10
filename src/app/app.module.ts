import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { CardsComponent } from './componente/cards/cards.component';
import { FooterComponent } from './componente/footer/footer.component';
import { TableComponent } from './componente/table/table.component';

import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componente/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CardsComponent,
    FooterComponent,
    TableComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
