class Pessoa {
  #_nome;
  #_sobrenome;
  constructor(nome) {
    if (this.constructor === Pessoa) {
      throw new Error("person class cannot be instantiated");
    }

    this.#_nome = nome;
  }

  set sobrenome(sobrenome) {
    this.#_sobrenome = sobrenome;
  }

  get sobrenome() {
    return this.#_sobrenome;
  }

  get nome() {
    return this.#_nome;
  }

  mostrarDados() {
    throw new Error("method cannot be called");
  }
}

export { Pessoa };
