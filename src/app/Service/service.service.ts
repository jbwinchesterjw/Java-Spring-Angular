import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Aluno } from '../modelos/Aluno';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private Url: string = "http://localhost:8080/aluno";

  public getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.Url + "/");
  }

  public postAlunos(a: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.Url + "/", a);
  }

  public getAlunosId(id: number) {
    return this.http.get<Aluno>(this.Url + "/" + id);
  }

  public putAlunos(a: Aluno): Observable<any> {
    return this.http.put<any>(this.Url + "/", JSON.stringify(a));
  }

  public deleteAlunos(a: Aluno): Observable<Aluno> {
    return this.http.delete<Aluno>(this.Url + "/" + a.id_aluno);
  }
  
}
