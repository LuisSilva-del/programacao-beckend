class Categoria {
  #nome;
  #descricao;
  #totalLivros;

  constructor(nome, descricao, totalLivros) {
    this.#nome = nome;
    this.#descricao = descricao;
    this.#totalLivros = totalLivros;
  }

  get nome() {
    return this.#nome;
  }

  get descricao() {
    return this.#descricao; 
  } 

  get totalLivros() {
    return this.#totalLivros;
  }

  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
      return;
    }
    this.#nome = novoNome; 
  }

  set descricao(novaDescricao) {
    if (novaDescricao.length < 5) {
      console.log("ERRO: a descricao da categoria precisa de pelo menos 5 letras.");
      return;
    }
    this.#descricao = novaDescricao;
  }

  descrever() {
    console.log("Categoria: " + this.#nome);
    console.log("Descricao: " + this.#descricao); 
    console.log("Total de livros: " + this.#totalLivros);
  }
}

module.exports = Categoria;