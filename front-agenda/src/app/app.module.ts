import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompromissoListaComponent } from './Pages/compromisso-lista/compromisso-lista.component';
import { CompromissoHojeComponent } from './Pages/compromisso-hoje/compromisso-hoje.component';
import { CompromissoSemanaComponent } from './Pages/compromisso-semana/compromisso-semana.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompromissoInsertComponent } from './management/compromisso-insert/compromisso-insert.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompromissoListaComponent,
    CompromissoHojeComponent,
    CompromissoSemanaComponent,
    CompromissoInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
