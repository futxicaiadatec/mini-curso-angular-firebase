export class Usuario {
  key: string;
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.email = email;
    this.nome = nome;
  }
}
