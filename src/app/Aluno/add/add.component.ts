import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Aluno } from 'src/app/modelos/Aluno';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  alunos = new Aluno();
  
  constructor(private router : Router, private service : ServiceService) { }

  ngOnInit() {
  }

  
  formulario = new FormGroup({
    id_aluno : new FormControl(''),
    nome : new FormControl(''), 
    
  });
  
  public addAluno() : void{
    this.service.postAlunos(this.formulario.value).subscribe(retorno =>{
      alert("Aluno salvo com sucesso !");
     this.formulario.reset();
     this.router.navigate(["list-alunos"]);
    });
  }



}
