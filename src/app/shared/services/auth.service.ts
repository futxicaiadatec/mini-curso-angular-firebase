import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { Login } from '../models/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private database: AngularFireDatabase
  ) {

    this.usuario = localStorage.getItem('usuario');
    this.angularFireAuth.authState.subscribe(auth => {
      console.log(auth);
      this.usuario = auth;
    });

  }

  efetuarLogin(login: Login) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(login.email, login.senha)
      .then(user => {
        this.usuario = user.user;
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
      })
      .catch();
  }

  efetuarCadastro(registro: Registro) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(registro.email, registro.senha)
      .then(user => {
        this.usuario = user.user;
        return this.salvarUsuarioNoBanco(user.user.uid, registro);
      })
      .catch(error => {
        console.error(error);
        if (error.code === 'auth/invalid-email') {
          return Promise.reject('E-mail está com formato inválido!');
        } else if (error.code === 'auth/weak-password') {
          return Promise.reject('Senha deverá ter no mínimo 6 caracteres!');
        }
      });
  }

  private salvarUsuarioNoBanco(uid: string, registro: Registro) {
    const usuario = new Usuario(registro.nome, registro.senha);

    return this.database
      .list('/usuarios')
      .update(uid, usuario)
      .then(() => console.log(`${uid} atualizado com sucesso!`))
      .catch(reason => console.log(reason));
  }
}
