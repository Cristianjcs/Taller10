import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componente/cards/cards.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { TableComponent } from './componente/table/table.component';

const routes: Routes = [
  {path: 'cards', component: CardsComponent},
  {path: 'table', component: TableComponent},
  {path: 'inicio',component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
