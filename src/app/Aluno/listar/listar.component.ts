import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Aluno } from 'src/app/modelos/Aluno';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  alunos : Aluno[];

  constructor(private service : ServiceService, private router : Router ){}

  ngOnInit() {
    this.service.getAlunos()
    .subscribe(data => {
      this.alunos = data;
    });
  }

  formulario = new FormGroup({
    id_aluno : new FormControl(''),
    nome : new FormControl('')
  });
  
  public editarAluno(a : Aluno):void{
    this.service.putAlunos(this.formulario.value)
    .subscribe(retorno =>{
      this.alunos.push(retorno)
      this.router.navigate(["edit-alunos"]);
    })
  }
 
  public excluirAluno(aluno : Aluno){
    this.service.deleteAlunos(aluno)
    .subscribe(retorno=>{
      this.alunos=this.alunos.filter(a=>a!==aluno);
      alert("Aluno excluido com sucesso !");
    })
  }

  public novoAluno(){
    this.router.navigate(["add-alunos"]);
  }
}
