import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Aluno/listar/listar.component';
import { AddComponent } from './Aluno/add/add.component';
import { EditarComponent } from './Aluno/editar/editar.component';


const routes: Routes = [
  {path:'listar', component :ListarComponent},
  {path: 'add', component : AddComponent},
  {path: 'editar',component : EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
