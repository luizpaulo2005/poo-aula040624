import { ErroCustomizado } from "./erro_customizado.js";
import { Pessoa } from "./pessoa.js";
import CPF from "cpf";

class PessoaFisica extends Pessoa {
  #_cpf;
  constructor(nome) {
    super(nome);
  }

  set cpf(cpf) {
    try {
      this.#_cpf = this.#validarCPF(cpf);
    } catch(err) {
      throw new ErroCustomizado("CPF Inválido").message
    }
  }

  get cpf() {
    return this.#_cpf;
  }

  #validarCPF(_cpf) {
    if (!CPF.isValid(_cpf)) {
      throw new Error("CPF inválido");
    }

    return _cpf;
  }

  mostrarDados() {
    return `
        Nome: ${this.nome} ${this.sobrenome}
        CPF: ${this.cpf}
        `;
  }
}

export { PessoaFisica };
