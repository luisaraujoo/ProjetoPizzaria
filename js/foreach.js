const meuMap = new Map([
  ["nome", "João", "jefferson"],
  ["idade", 25],
  ["cidade", "São Paulo"],
]);

meuMap.forEach(function (valor, chave, valor2) {
  console.log(`${chave}: ${valor}`);
});

//   esse for each é bom para pegar dois argumentos de um array
