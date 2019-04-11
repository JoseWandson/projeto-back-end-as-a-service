import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private router: Router) { }

  private API_URL: string = 'http://localhost:8000/';

  url(path: string) {
    return this.API_URL + path;
  }

  extrairDados(response: Response) {
    let data = response.json();
    return data || {};
  }

  processarErros(erro: any) {

    if (erro.status === 401) {
      delete localStorage['user'];
      delete localStorage['token'];
      location.reload();
      this.router.navigate(['/login']);
    }

    return Observable.throw('Erro acessando servidor remoto.');
  }
}
