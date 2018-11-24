import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  efetuarLogin(login: Login) {
    // TODO: comunicar ao firebase
    console.log(login);
    const usuario = <Login>JSON.parse(localStorage.getItem(login.email));
    if (usuario) {
      alert(`${login.email} logado com sucesso!`);
    }
  }

  efetuarCadastro(registro: Registro) {
    // TODO: comunicar ao firebase
    console.log(registro);
    localStorage.setItem(registro.email, JSON.stringify(registro));
  }
}
