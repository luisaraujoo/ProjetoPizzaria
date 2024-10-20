let listaPizzas = [];
// FUNÇÃO SELECIONAR QUANTIDADE DE RODÍZIOS

function quantidadeRodizio() {
  let selectQntdRodizio = document.getElementById("select-rodizio");

  if (selectQntdRodizio.options.length <= 1) {
    for (let i = 1; i <= 17; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i + " Rodízio(s)";
      selectQntdRodizio.appendChild(option);
    }
  }
}

let selectQnt = document.getElementById("select-rodizio");
selectQnt.addEventListener("click", quantidadeRodizio);

// FUNÇÃO PARA INFORMAR O VALOR DO RODÍZIO E CALCULAR A SOMA DELES
function adicionarQntdRodizios() {
  let quantidade = Number(selectQnt.value);

  let valor = Number(34);

  let valorTotal = valor * quantidade;

  let listaRodizio = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent = `Valor total do rodízio: R$${valorTotal.toFixed(2)}`;
  listaRodizio.appendChild(lista);

  return valorTotal;
}

let btnAdicionarRodizio = document.getElementById("btn-adicionarRodizio");
btnAdicionarRodizio.addEventListener("click", () => {
  total += adicionarQntdRodizios();
  atualizarTotal();
});

// FIM DA FUNÇÃO CONCLUIR RODÍZIO

// FUNÇÃO SELECIONAR PIZZA

const pizzas = [
  "Calabresa",
  "Muzzarela",
  "Frango e Catupiry",
  "Marguerita",
  "Atum",
  "Portuguesa",
];

function selecionarPizza(selectPizzas) {
  if (selectPizzas.options.length <= 1) {
    for (i = 0; i <= pizzas.length - 1; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = pizzas[i];
      selectPizzas.appendChild(option);
    }
  }
}

let selectPizzas1 = document.getElementById("select-pizzas-1");
selectPizzas1.addEventListener("click", () => {
  selecionarPizza(selectPizzas1);
});
let selectPizzas2 = document.getElementById("select-pizzas-2");
selectPizzas2.addEventListener("click", () => {
  selecionarPizza(selectPizzas2);
});
let selectPizzas3 = document.getElementById("select-pizzas-3");
selectPizzas3.addEventListener("click", () => {
  selecionarPizza(selectPizzas3);
});

// FIM DA FUNÇÃO DE SELECIONAR PIZZA

// FUNÇÃO PARA SELECIONAR TAMANHOS DA PIZZA

function torcarTamanho() {
  let tamanho = "";

  if (rbPequena1.checked) {
    tamanho = "Pequena";
  } else if (rbMedia1.checked) {
    tamanho = "Media";
  } else if (rbGrande1.checked) {
    tamanho = "Grande";
  }
}

function torcarTamanho2() {
  let tamanho = "";

  if (rbPequena2.checked) {
    tamanho = "Pequena";
  } else if (rbMedia2.checked) {
    tamanho = "Media";
  } else if (rbGrande2.checked) {
    tamanho = "Grande";
  }
}

function torcarTamanho3() {
  let tamanho = "";

  if (rbPequena3.checked) {
    tamanho = "Pequena";
  } else if (rbMedia3.checked) {
    tamanho = "Media";
  } else if (rbGrande3.checked) {
    tamanho = "Grande";
  }
}
let rbPequena1 = document.getElementById("rbPequena1");
let rbMedia1 = document.getElementById("rbMedia1");
let rbGrande1 = document.getElementById("rbGrande1");
let rbPequena2 = document.getElementById("rbPequena2");
let rbMedia2 = document.getElementById("rbMedia2");
let rbGrande2 = document.getElementById("rbGrande2");
let rbPequena3 = document.getElementById("rbPequena3");
let rbMedia3 = document.getElementById("rbMedia3");
let rbGrande3 = document.getElementById("rbGrande3");

rbPequena1.addEventListener("change", torcarTamanho);
rbMedia1.addEventListener("change", torcarTamanho);
rbGrande1.addEventListener("change", torcarTamanho);
rbPequena2.addEventListener("change", torcarTamanho2);
rbMedia2.addEventListener("change", torcarTamanho2);
rbGrande2.addEventListener("change", torcarTamanho2);
rbPequena3.addEventListener("change", torcarTamanho3);
rbMedia3.addEventListener("change", torcarTamanho3);
rbGrande3.addEventListener("change", torcarTamanho3);

// FIM FUNÇÃO SELECIONAR TAMANHOS

// FUNÇÃO PARA MOSTRAR SABORES

const precos = [
  // lista de preços (PEQUENA, MEDIA, GRANDE)
  [35.9, 45.9, 55.9], // Calabresa
  [32.9, 42.9, 52.9], // Muzzarela
  [36.9, 46.9, 57.9], // Frango e Catupiry
  [33.9, 43.9, 53.9], // Marguerita
  [38.9, 49.9, 61.9], // Atum
  [36.9, 47.9, 58.9], // Portuguesa
];

function mostrarSabores() {
  let outMostrar = document.getElementById("outMostrarPizzas");
  let sabores1 = document.getElementById("select-pizzas-1");
  let tamanhoIndex = rbPequena1.checked ? 0 : rbMedia1.checked ? 1 : 2;
  let sabor1Index = Number(sabores1.value);
  let sabor1 = pizzas[sabor1Index];
  let preco = precos[sabor1Index][tamanhoIndex];

  let listaPizzas = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent += `Pizza de ${sabor1} - R$${preco.toFixed(2)}`;
  listaPizzas.appendChild(lista);

  return preco;
}

let btnAdiconar = document.getElementById("btn-adicionarPizzas1");
btnAdiconar.addEventListener("click", () => {
  total += mostrarSabores();
  atualizarTotal();
});

function mostrarSabores2() {
  let sabores2 = document.getElementById("select-pizzas-2");
  let tamanhoIndex = rbPequena2.checked ? 0 : rbMedia2.checked ? 1 : 2;
  let sabor2Index = Number(sabores2.value);
  let sabor2 = pizzas[sabor2Index];
  let preco = precos[sabor2Index][tamanhoIndex];

  let listaPizzas = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent += `Pizza de ${sabor2} - R$${preco.toFixed(2)}`;
  listaPizzas.appendChild(lista);

  return preco;
}

let btnAdiconar2 = document.getElementById("btn-adicionarPizzas2");
btnAdiconar2.addEventListener("click", () => {
  total += mostrarSabores2();
  atualizarTotal();
});

function mostrarSabores3() {
  let sabores3 = document.getElementById("select-pizzas-3");
  let tamanhoIndex = rbPequena3.checked ? 0 : rbMedia3.checked ? 1 : 2;
  let sabor3Index = Number(sabores3.value);
  let sabor3 = pizzas[sabor3Index];
  let preco = precos[sabor3Index][tamanhoIndex];

  let listaPizzas = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent += `Pizza de ${sabor3} - R$${preco.toFixed(2)}`;
  listaPizzas.appendChild(lista);

  return preco;
}

let btnAdiconar3 = document.getElementById("btn-adicionarPizzas3");
btnAdiconar3.addEventListener("click", () => {
  total += mostrarSabores3();
  atualizarTotal();
});

// FIM DA FUNÇÃO PARA MOSTRAR SABORES

// FUNÇÃO SELECIONAR REFRIGERANTES

const refrigerantes = [
  "Guanara 350ml",
  "Guanara 1L",
  "Guanara 1,5L",
  "Coca-Cola 350ml",
  "Coca-Cola 1,5L",
  "Coca-Cola 2L",
  "Pepsi 1,5L",
  "Pepsi 2L",
  "Fanta Laranja 2L",
];

const precoRefri = [5.0, 10.0, 12.0, 6.0, 12.0, 15.0, 10.0, 12.0, 9.0];

function selecionarRefri(selectRefri) {
  if (selectRefri.options.length <= 1) {
    for (let i = 0; i <= refrigerantes.length - 1; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = refrigerantes[i];
      selectRefri.appendChild(option);
    }
  }
}

let selectRefri = document.getElementById("select-refri");
selectRefri.addEventListener("click", () => {
  selecionarRefri(selectRefri);
});

// FIM DA FUNÇÃO SELECIONAR REFRIGERANTES

// FUNÇÃO SELECIONAR SUCOS

const sucos = [
  "Graviola 300ml",
  "Laranja 400ml",
  "Laranja 1L",
  "Limão 400ml",
  "Limão 1L",
  "Abacaxi 400ml",
  "Abacaxi 1L",
  "Morango 400ml",
  "Morango 1L",
  "Uva 400ml",
  "Uva 1L",
  "Maracujá 300ml",
  "Maracujá 1L",
  "Caju 400ml",
  "Caju 1L",
];

const precoSucos = [
  5.0, 6.0, 10.0, 6.0, 10.0, 6.0, 10.0, 7.0, 11.0, 6.0, 10.0, 5.0, 10.0, 6.0,
  10.0,
];

function selecionarSucos(selectSucos) {
  if (selectSucos.options.length <= 1) {
    for (let i = 0; i <= sucos.length - 1; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = sucos[i];
      selectSucos.appendChild(option);
    }
  }
}

let selectSuco = document.getElementById("select-sucos");
selectSuco.addEventListener("click", () => {
  selecionarSucos(selectSuco);
});

// FIM DA FUNÇÃO SELECIONAR SUCOS

// FUNÇÃO SELECIONAR ALCOLICOS

const alcolicos = [
  "Brahma 350ml",
  "Brahma Chopp",
  "Brahma 1L",
  "Heinkein 350ml",
  "Heinkein Chopp",
  "Heinkein 1L",
  "Antartica 350ml",
  "Antartica 1L",
  "Skol 350ml",
  "Amstel 375ml",
  "Corona 375ml",
];

const precosAlcolicos = [6.0, 10.0, 15.0, 9.0, 20.0, 6.0, 10.0, 6.0, 6.5, 8.0];

function selecionarAlcolicos(selectAlcolico) {
  if (selectAlcolico.options.length <= 1) {
    for (let i = 0; i < alcolicos.length - 1; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = alcolicos[i];
      selectAlcolico.appendChild(option);
    }
  }
}

let selectAlcolico = document.getElementById("select-alcolico");
selectAlcolico.addEventListener("click", () => {
  selecionarAlcolicos(selectAlcolico);
});

// FIM DA FUNÇÃO SELECIONAR ALCOLICOS

// FUNÇÃO SELECIONAR QUANTIDADE DE BEBIDAS

function selecionarQntdBebidas(selectQntdBebida) {
  if (selectQntdBebida.options.length <= 1) {
    for (let i = 1; i <= 15; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      selectQntdBebida.appendChild(option);
    }
  }
}

let qntdRefri = document.getElementById("select-qntdRefri");
qntdRefri.addEventListener("click", () => {
  selecionarQntdBebidas(qntdRefri);
});
let qntdSucos = document.getElementById("select-qntdSuco");
qntdSucos.addEventListener("click", () => {
  selecionarQntdBebidas(qntdSucos);
});
let qntdAlcolicos = document.getElementById("select-qntdAlcool");
qntdAlcolicos.addEventListener("click", () => {
  selecionarQntdBebidas(qntdAlcolicos);
});

// FIM DA FUNÇÃO SELECIONAR QUANTIDADE DE BEBIDAS

// FUNÇAO MOSTRAR BEBIDAS

let total = 0;

function adicionarRefri() {
  let refriSelect = document.getElementById("select-refri");
  let refriSelectQntd = document.getElementById("select-qntdRefri");
  let refriSelectIndex = Number(refriSelect.value);
  let refriSelectQntdIndex = Number(refriSelectQntd.value);
  let totalRefri = precoRefri[refriSelectIndex] * refriSelectQntdIndex;

  let listaRefri = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent += `${
    refrigerantes[refriSelectIndex]
  } - ${refriSelectQntdIndex} und. R$${totalRefri.toFixed(2)}`;
  listaRefri.appendChild(lista);

  return totalRefri;
}

let btnAdicionarRefri = document.getElementById("btn-adicionarRefri");
btnAdicionarRefri.addEventListener("click", () => {
  total += adicionarRefri();
  atualizarTotal();
});

function adicionarSucos() {
  let sucoSelect = document.getElementById("select-sucos");
  let sucoSelectQntd = document.getElementById("select-qntdSuco");
  let sucoSelectIndex = Number(sucoSelect.value);
  let sucoSelectQntdIndex = Number(sucoSelectQntd.value);
  let totalSucos = precoSucos[sucoSelectIndex] * sucoSelectQntdIndex;

  let listaSucos = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent += `${
    sucos[sucoSelectIndex]
  } - ${sucoSelectQntdIndex} und. R$${totalSucos.toFixed(2)}`;
  listaSucos.appendChild(lista);

  return totalSucos;
}

let btnAdicionarSucos = document.getElementById("btn-adicionarSuco");
btnAdicionarSucos.addEventListener("click", () => {
  total += adicionarSucos();
  atualizarTotal();
});

function adicionarAlcolicos() {
  let alcoolSelect = document.getElementById("select-alcolico");
  let alcoolSelectQntd = document.getElementById("select-qntdAlcool");
  let alcoolSelectIndex = Number(alcoolSelect.value);
  let alcoolSelectQntdIndex = Number(alcoolSelectQntd.value);
  let totalAlcolicos =
    precosAlcolicos[alcoolSelectIndex] * alcoolSelectQntdIndex;

  let listaAlcolicos = document.getElementById("listaProdutos");
  const lista = document.createElement("li");
  lista.textContent = `${
    alcolicos[alcoolSelectIndex]
  } - ${alcoolSelectQntdIndex} und. R$${totalAlcolicos.toFixed(2)}`;
  listaAlcolicos.appendChild(lista);

  return totalAlcolicos;
}

let btnAdicionarAlcool = document.getElementById("btn-adicionarAlcolico");
btnAdicionarAlcool.addEventListener("click", () => {
  total += adicionarAlcolicos();
  atualizarTotal();
});

// FIM FUNÇÃO MOSTRAR BEBIDAS

// FUNÇÃO DE CALCULAR TOTAL

function atualizarTotal() {
  let outTotal = document.getElementById("outTotal");
  let outGorjeta = document.getElementById("outGorjeta");
  let outSubTotal = document.getElementById("outSubTotal");

  let gorjeta = total * 0.1;
  let subtotal = total + gorjeta;

  outTotal.textContent = `Total: R$${total.toFixed(2)}`;
  outGorjeta.textContent = `10% : R$${gorjeta.toFixed(2)}`;
  outSubTotal.textContent = `Subtotal: R$${subtotal.toFixed(2)}`;
}
