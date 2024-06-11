class ErroCustomizado extends Error {
  constructor(message) {
    super(message);
    this.name = "Erro Customizado"
    this.message = `${this.message} na linha ${this.linhaErro()}!`;
  }

  linhaErro() {
    return this.stack.split("\n")[1].split(":")[2]
  }
}

export { ErroCustomizado };
