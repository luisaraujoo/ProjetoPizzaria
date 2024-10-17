//  metodos

const animal = {
  nome: "Bob",
  latir: function () {
    console.log("au au");
  },
};

console.log(animal.nome);

animal.latir();

// aprofundando metodos

const pessoa = {
  nome: "Luis",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

// classes basicas

const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemao";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// classes de hoje em dia

class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

// mais sobre calsse

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descrevendoCaminhao() {
    console.log(
      `Este caminhao tem ${this.eixos} eixos, e é da cor ${this.cor}`
    );
  }
}

const scania = new Caminhao(6, "vermelha");

console.log(scania);

scania.descrevendoCaminhao();

const Volvo = new Caminhao(4, "Preto");

console.log(Volvo);

Caminhao.prototype.motor = 4.0; // isso aqui é pra adicionar uma descrição no objeto,usando o prototype

// override

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const Luis = new Humano("Luis Felipe", 24);

console.log(Luis);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(Luis.idade);

console.log(Humano.prototype.idade);

// symbols

class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[pilotos] = 2;

Aviao.prototype[asas] = 3;

const Boeing = new Aviao("Boeing", 10);

console.log(Boeing);

console.log(Boeing[asas]);
console.log(Boeing[pilotos]);

// getter e setter

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulos() {
    return `voce esta lendo ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const listaTags = tags.split(", ");
    this.tags = listaTags;
  }
}

const meuPost = new Post("algum post", "é um post sobre programação");

console.log(meuPost);

console.log(meuPost.exibirTitulos);

meuPost.adicionarTags = "Programação, java, js";

console.log(meuPost);

// herança

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "shark");

console.log(shark);

console.log(shark.patas);
