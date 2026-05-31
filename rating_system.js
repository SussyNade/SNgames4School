// Sistema de classificação indicativa modular
// Para adicionar outro país: adiciona uma nova entrada em SISTEMAS_RATING

const SISTEMAS_RATING = {
  BR: {
    nome: "Brasil",
    pasta: "assets/ratings/BR/",
    ratings: ["L", "AL", "6", "A6", "10", "A10", "12", "A12", "14", "A14", "16", "A16", "18", "A18"]
  }
  // Para adicionar outro país no futuro:
  // US: { nome: "ESRB", pasta: "assets/ratings/US/", ratings: ["E", "E10", "T", "M", "AO"] }
  // EU: { nome: "PEGI", pasta: "assets/ratings/EU/", ratings: ["3", "7", "12", "16", "18"] }
};

function getRatingHTML(ratingCode, sistema = "BR") {
  if (!ratingCode) return '';
  const sys = SISTEMAS_RATING[sistema];
  if (!sys) return '';
  if (!sys.ratings.includes(ratingCode)) return '';

  const imgPath = `${sys.pasta}${ratingCode}.webp`;
  return `<img class="rating-badge" src="${imgPath}" alt="${ratingCode}" title="Classificação: ${ratingCode}">`;
}
