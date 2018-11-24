import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormularioLancamentoComponent } from './formulario-lancamento/formulario-lancamento.component';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';


@NgModule({
   declarations: [
      AppComponent,
      FormularioLancamentoComponent,
      NomeComponenteComponent,
      SegundoComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
