// Sistema de classificação indicativa modular
// Para adicionar outro país: adiciona uma nova entrada em SISTEMAS_RATING

const SISTEMAS_RATING = {
  BR: {
    nome: "Brasil",
    pasta: "assets/ratings/BR/",
    ratings: ["L", "AL", "6", "A6", "10", "A10", "12", "A12", "14", "A14", "16", "A16", "18", "A18"]
  },
  US: {
    nome: "ESRB",
    pasta: "assets/ratings/US/",
    ratings: ["E", "E10", "T", "M", "AO", "RP", "RP-LM17", "RU"]
  },
  EUR: {
    nome: "PEGI",
    pasta: "assets/ratings/EUR/",
    ratings: ["3", "7", "12", "16", "18", "PG", "RP"]
  },
  JPN: {
    nome: "CERO",
    pasta: "assets/ratings/JPN/",
    ratings: ["A", "B", "C", "D", "Z", "RS", "ED", "RP"]
  },
  KREA: {
    nome: "GRAC",
    pasta: "assets/ratings/KREA/",
    ratings: ["ALL", "12", "15", "18", "TEST", "RP"]
  },
  SNR: {
    nome: "SNRating",
    pasta: "assets/ratings/SNR/",
    ratings: ["3", "6", "9", "12", "15", "18", "UserGen", "RP"]
  }
};

function getRatingHTML(ratingCode, sistema = "BR") {
  if (!ratingCode) return '';
  const sys = SISTEMAS_RATING[sistema];
  if (!sys) return '';
  if (!sys.ratings.includes(ratingCode)) return '';

  const imgPath = `${sys.pasta}${ratingCode}.webp`;
  return `<img class="rating-badge" src="${imgPath}" alt="${ratingCode}" title="Classificação: ${ratingCode}">`;
}
