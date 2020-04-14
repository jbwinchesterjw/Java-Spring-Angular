import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Aluno/listar/listar.component';
import { AddComponent } from './Aluno/add/add.component';
import { EditarComponent } from './Aluno/editar/editar.component';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
  import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
