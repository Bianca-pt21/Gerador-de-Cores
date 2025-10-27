const quotes = [
  "Acredite em você e em todo o seu potencial!",
  "Cada erro é uma oportunidade para recomeçar com mais sabedoria.",
  "Grandes coisas levam tempo, continue!",
  "Você é mais forte do que imagina!",
  "A jornada é difícil, mas o destino vale a pena.",
  "Sonhar grande e trabalhar duro: essa é a fórmula!",
  "Você nasceu para fazer a diferença.",
  "Um passo de cada vez é o suficiente para chegar longe."
];

document.getElementById("new-quote").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
});

