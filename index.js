import { PessoaFisica } from "./pessoa_fisica.js";
import { PessoaJuridica } from "./pessoa_juridica.js";

const pessoaFisica = new PessoaFisica("Luiz");
pessoaFisica.sobrenome = "Paulo";
pessoaFisica.cpf = "043.992.661-90";
console.log(pessoaFisica.mostrarDados());

const pessoaJuridica = new PessoaJuridica("Luiz");
pessoaJuridica.sobrenome = "Paulo S/A";
pessoaJuridica.cnpj = "30.258.505/0001-11";
console.log(pessoaJuridica.mostrarDados());