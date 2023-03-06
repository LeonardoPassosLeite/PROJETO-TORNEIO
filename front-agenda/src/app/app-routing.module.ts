import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompromissoInsertComponent } from './management/compromisso-insert/compromisso-insert.component';
import { CompromissoHojeComponent } from './Pages/compromisso-hoje/compromisso-hoje.component';
import { CompromissoListaComponent } from './Pages/compromisso-lista/compromisso-lista.component';
import { CompromissoSemanaComponent } from './Pages/compromisso-semana/compromisso-semana.component';

const routes: Routes = [
  { path: '', component: CompromissoHojeComponent },
  { path: 'compromisso-insert', component: CompromissoInsertComponent },
  { path: 'compromisso-semana', component: CompromissoSemanaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
