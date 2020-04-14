import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Aluno } from 'src/app/modelos/Aluno';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  alunos : Aluno = new Aluno();
  constructor(private router : Router, private service : ServiceService) { }

  ngOnInit() {
    this.editarAluno();
  }

  formulario = new FormGroup({
    id_aluno : new FormControl(''),
    nome : new FormControl('')
  });
  
  public editarAluno(){
    let id = localStorage.getItem("id");
    this.service.getAlunosId(+id)
    .subscribe(retorno =>{
      this.alunos = retorno
    });
  }

  public atualizarAluno(aluno : Aluno){
    this.service.putAlunos(aluno)
    .subscribe(data =>{this.alunos = data});
    alert("Aluno atualizado com sucesso !");
    this.router.navigate(["list-alunos"]);
  }

}
