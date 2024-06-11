import { Pessoa } from "./pessoa.js";
import { validate } from "cnpj";

class PessoaJuridica extends Pessoa {
  #_cnpj;
  constructor(nome) {
    super(nome);
  }

  set cnpj(cnpj) {
    if (validate(cnpj)) {
      this.#_cnpj = cnpj;
    } else {
      throw new Error("CNPJ inválido").message
    }
  }

  get cnpj() {
    return this.#_cnpj;
  }

  mostrarDados() {
    return `
        Nome: ${this.nome} ${this.sobrenome}
        CNPJ: ${this.cnpj}
        `;
  }
}

export { PessoaJuridica };
