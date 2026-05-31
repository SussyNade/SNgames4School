const jogos = [

  // ===== EM ALTA / POPULARES =====
  {
    id: "gd",
    nome: "Geometry Dash",
    thumb: "assets/thumbnail/Geometrydash.webp",
    type: "iframe",
    url: "https://geometrydash.com/game/index.html",
    rating: "L",
    tags: ["acao", "casual", "alta", "populares", "ritmo"]
  },
  {
    id: "stumble",
    nome: "Stumble Guys",
    thumb: "assets/thumbnail/Stumbleguys.webp",
    type: "iframe",
    url: "https://www.stumbleguys.com/pt-BR/play",
    rating: "16",
    tags: ["acao", "casual", "amigos", "alta", "populares"]
  },
  {
    id: "fnf",
    nome: "Friday Night Funkin",
    thumb: "assets/thumbnail/FNF.webp",
    type: "external",
    url: "https://ninja-muffin24.itch.io/funkin",
    rating: "12",
    tags: ["ritmo", "alta", "populares"]
  },
  {
    id: "suika",
    nome: "Suika World",
    thumb: "assets/thumbnail/suika.webp",
    type: "external",
    url: "https://suika.world/play/offline",
    rating: "AL",
    tags: ["casual", "puzzle", "alta"]
  },

  // ===== IO GAMES =====
  {
    id: "krunker",
    nome: "Krunker.io",
    thumb: "assets/thumbnail/Krunker.webp",
    type: "iframe",
    url: "https://krunker.io/",
    rating: "A14",
    tags: ["io", "acao", "amigos", "alta"],
    firefoxWarn: true   // bug de mouse no Firefox
  },
  {
    id: "shellshock",
    nome: "Shell Shockers",
    thumb: "assets/thumbnail/ShellShockers.webp",
    type: "iframe",
    url: "https://shellshock.io/",
    rating: "A12",
    tags: ["io", "acao", "amigos"],
    firefoxWarn: true   // bug de mouse no Firefox
  },
  {
    id: "surviv",
    nome: "Surviv.io",
    thumb: "assets/thumbnail/Surviv.webp",
    type: "iframe",
    url: "https://surviv.io/",
    rating: "A12",
    tags: ["io", "acao", "amigos", "alta"]
  },
  {
    id: "territorial",
    nome: "Territorial.io",
    thumb: "assets/thumbnail/Territorial.webp",
    type: "iframe",
    url: "https://territorial.io/",
    rating: "L",
    tags: ["io", "amigos", "estrategia"]
  },
  {
    id: "deeeep",
    nome: "Deeeep.io",
    thumb: "assets/thumbnail/Deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep.webp",
    type: "iframe",
    url: "https://deeeep.io/",
    rating: "AL",
    tags: ["io", "casual", "amigos"]
  },
  {
    id: "slither",
    nome: "Slither.io",
    thumb: "assets/thumbnail/Slitherio.webp",
    type: "iframe",
    url: "http://slither.com/io/",
    rating: "L",
    tags: ["io", "casual", "amigos"]
  },
  {
    id: "agar",
    nome: "Agar.io",
    thumb: "assets/thumbnail/Agar.webp",
    type: "external",
    url: "https://agar.io/",
    rating: "18",
    tags: ["io", "casual", "amigos"]
  },
  {
    id: "smashkarts",
    nome: "Smash Karts",
    thumb: "assets/thumbnail/smashkart.webp",
    type: "iframe",
    url: "https://smashkarts.io/",
    rating: "18",
    tags: ["io", "amigos", "acao", "corrida", "populares"]
  },
  {
    id: "zombsroyale",
    nome: "ZombsRoyale",
    thumb: "assets/thumbnail/zombsroyale.webp",
    type: "iframe",
    url: "https://zombsroyale.io/",
    rating: "A12",
    tags: ["io", "amigos", "acao"]
  },
  {
    id: "skribbl",
    nome: "skribbl.io",
    thumb: "assets/thumbnail/skribbl.webp",
    type: "iframe",
    url: "https://skribbl.io/",
    rating: "A14",
    tags: ["io", "amigos", "criatividade"]
  },

  // ===== AÇÃO =====
  {
    id: "vampiresurvivor",
    nome: "Vampire Survivors",
    thumb: "assets/thumbnail/vampiresurvivor.webp",
    type: "external",
    url: "https://poncle.itch.io/vampire-survivors",
    rating: "10",
    tags: ["acao"]
  },

  // ===== PUZZLE =====
  {
    id: "2048",
    nome: "2048",
    thumb: "assets/thumbnail/2048.webp",
    type: "self",
    url: "games/2048/index.html",
    rating: "L",
    tags: ["puzzle", "casual"]
  },
  {
    id: "gridland",
    nome: "Gridland",
    thumb: "assets/thumbnail/gridland.webp",
    type: "iframe",
    url: "https://gridland.doublespeakgames.com/",
    rating: "L",
    tags: ["puzzle", "estrategia", "casual"]
  },
  {
    id: "penrose",
    nome: "Penrose",
    thumb: "assets/thumbnail/penrose.webp",
    type: "iframe",
    url: "https://penrose.doublespeakgames.com/",
    rating: "L",
    tags: ["puzzle", "criatividade"]
  },
  {
    id: "darkroom",
    nome: "A Dark Room",
    thumb: "assets/thumbnail/darkroom.webp",
    type: "iframe",
    url: "https://adarkroom.doublespeakgames.com/",
    rating: "A12",
    tags: ["puzzle", "estrategia"]
  },
  {
    id: "radum",
    nome: "Radüm",
    thumb: "assets/thumbnail/radum.webp",
    type: "iframe",
    url: "https://radum.doublespeakgames.com/",
    rating: "A10",
    tags: ["puzzle", "estrategia", "amigos"]
  },
  {
    id: "puddingmonster",
    nome: "Pudding Monsters",
    thumb: "assets/thumbnail/puddingmonster.webp",
    type: "external",
    url: "https://yell0wsuit.page/assets/games/pudding-monsters/index.html",
    rating: "L",
    tags: ["casual", "puzzle"]
  },

  // ===== CASUAL =====
  {
    id: "minecraft",
    nome: "Eaglercraft",
    thumb: "assets/thumbnail/Minecraft.webp",
    type: "external",
    url: "https://eaglercraft.com/",
    rating: "A10",
    tags: ["criatividade", "populares", "amigos"]
  },
  {
    id: "uselessweb",
    nome: "The Useless Web",
    thumb: "assets/thumbnail/Uselessweb.webp",
    type: "iframe",
    url: "https://theuselessweb.com/",
    rating: "A10",
    tags: ["casual"]
  },
  {
    id: "cookieclicker",
    nome: "Cookie Clicker",
    thumb: "assets/thumbnail/CookieClicker.webp",
    type: "external",
    url: "https://orteil.dashnet.org/cookieclicker/",
    rating: "L",
    tags: ["casual", "populares"]
  },
  {
    id: "flightoffancy",
    nome: "A Flight of Fancy",
    thumb: "assets/thumbnail/flightoffancy.webp",
    type: "iframe",
    url: "https://doublespeakgames.com/flight-of-fancy.html",
    rating: "L",
    tags: ["criatividade", "casual"]
  },
  {
    id: "minimetro",
    nome: "Mini Metro (beta)",
    thumb: "assets/thumbnail/minimetro.webp",
    type: "iframe",
    url: "http://old.dinopoloclub.com/minimetro/",
    rating: "L",
    tags: ["criatividade", "casual"]
  },

  // ===== EDUCACIONAL =====
  {
    id: "neal",
    nome: "NEAL.FUN",
    thumb: "assets/thumbnail/Neal.webp",
    type: "external",
    url: "https://neal.fun/",
    rating: "A12",
    tags: ["edu", "casual"]
  },
  {
    id: "wordle",
    nome: "Wordle",
    thumb: "assets/thumbnail/Wordle.webp",
    type: "external",
    url: "https://www.nytimes.com/games/wordle/index.html",
    rating: "L",
    tags: ["edu", "puzzle"]
  },
  {
    id: "termo",
    nome: "Termo",
    thumb: "assets/thumbnail/Termo.webp",
    type: "iframe",
    url: "https://term.ooo/",
    rating: "L",
    tags: ["edu", "puzzle"]
  },
  {
    id: "openguessr",
    nome: "OpenGuessr",
    thumb: "assets/thumbnail/openguessr.webp",
    type: "iframe",
    url: "https://openguessr.com/",
    rating: "A10",
    tags: ["edu", "casual"]
  },
  {
    id: "littlealchemy",
    nome: "Little Alchemy 2",
    thumb: "assets/thumbnail/LittleAlchemist.webp",
    type: "iframe",
    url: "https://littlealchemy2.com/",
    rating: "L",
    tags: ["puzzle", "edu", "casual", "populares", "criatividade"]
  },

  // ===== ESTRATÉGIA =====
  {
    id: "bloons",
    nome: "Bloons TD 5",
    thumb: "assets/thumbnail/BloonsTD5.webp",
    type: "external",
    url: "https://www.newgrounds.com/portal/view/610995",
    rating: "L",
    tags: ["estrategia"]
  },

  // ===== CRIATIVIDADE / SOCIAL =====
  {
    id: "gartic",
    nome: "GarticPhone",
    thumb: "assets/thumbnail/GarticP.webp",
    type: "external",
    url: "https://garticphone.com/",
    rating: "A12",
    tags: ["casual", "amigos", "criatividade"]
  },

  // ===== DOCE (Cut the Rope e similares) =====
  {
    id: "cuttherope",
    nome: "Cut the Rope",
    thumb: "assets/thumbnail/cuttherope.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/games/cut-the-rope/play/famobi/",
    rating: "L",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropeexp",
    nome: "Cut the Rope Experiments",
    thumb: "assets/thumbnail/cuttheropeexp.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/play/cut-the-rope-experiments/",
    rating: "L",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropeholiday",
    nome: "Cut the Rope Holiday Gift",
    thumb: "assets/thumbnail/cuttheropeholiday.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/games/cut-the-rope-holiday-gift/play/",
    rating: "L",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropett",
    nome: "Cut the Rope Time Travel",
    thumb: "assets/thumbnail/cuttheropett.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/play/cut-the-rope-time-travel/",
    rating: "L",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttherope2",
    nome: "Cut the Rope 2",
    thumb: "assets/thumbnail/cuttherope2.webp",
    type: "external",
    url: "https://yell0wsuit.page/assets/games/ctr2/index.html/",
    rating: "L",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropemagic",
    nome: "Cut the Rope Magic",
    thumb: "assets/thumbnail/cuttheropemagic.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/play/cut-the-rope-magic/",
    rating: "L",
    tags: ["casual", "puzzle", "doce"]
  },

  // ===== CLÁSSICOS FLASH (via Ruffle) =====
  // Para hospedar: baixe o .swf, coloque em games/flash/nomedojogo/jogo.swf
  // e crie um index.html com o Ruffle carregando o arquivo
  {
    id: "ageofwar",
    nome: "Age of War",
    thumb: "assets/thumbnail/AgeofWar.webp",
    type: "external",
    url: "https://html5.gamedistribution.com/9467420d5c84482e9087276338a3a7b1/",
    rating: "12",
    tags: ["flash"]
  },
  {
    id: "burritobison",
    nome: "Burrito Bison: Launcha Libre",
    thumb: "assets/thumbnail/BurritoBison.webp",
    type: "iframe",
    url: "http://game168976.konggames.com/gamez/0016/8976/live/index.html",
    rating: "12",
    tags: ["flash"]
  },
  // --- Papa's Series ---
  {
    id: "papas_freezeria",
    nome: "Papa's Freezeria",
    thumb: "assets/thumbnail/PapasFreezeria.webp",
    type: "self",
    url: "games/flash/papas/index.html",
    rating: "L",
    tags: ["flash", "casual", "doce"]
  },
  {
    id: "papas_burgeria",
    nome: "Papa's Burgeria",
    thumb: "assets/thumbnail/PapasBurgueria.webp",
    type: "self",
    url: "games/flash/papas_burgeria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_pizzeria",
    nome: "Papa's Pizzeria",
    thumb: "assets/thumbnail/PapasPizzeria.webp",
    type: "self",
    url: "games/flash/papas_pizzeria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_pancakeria",
    nome: "Papa's Pancakeria",
    thumb: "assets/thumbnail/PapasPancakeria.webp",
    type: "self",
    url: "games/flash/papas_pancakeria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_hotdoggeria",
    nome: "Papa's Hot Doggeria",
    thumb: "assets/thumbnail/papaisveryhot.webp",
    type: "self",
    url: "games/flash/papas_hotdoggeria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_cheeseria",
    nome: "Papa's Cheeseria",
    thumb: "assets/thumbnail/PapasCheeseria.webp",
    type: "self",
    url: "games/flash/papas_cheeseria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_donuteria",
    nome: "Papa's Donuteria",
    thumb: "assets/thumbnail/PapasDonuteria.webp",
    type: "self",
    url: "games/flash/papas_donuteria/index.html",
    rating: "L",
    tags: ["flash", "casual", "doce"]
  },
  {
    id: "papas_wingeria",
    nome: "Papa's Wingeria",
    thumb: "assets/thumbnail/PapasWingeria.webp",
    type: "self",
    url: "games/flash/papas_wingeria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_pastaria",
    nome: "Papa's Pastaria",
    thumb: "assets/thumbnail/PapasPastaria.webp",
    type: "self",
    url: "games/flash/papas_pastaria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_sushiria",
    nome: "Papa's Sushiria",
    thumb: "assets/thumbnail/PapasSushiria.webp",
    type: "self",
    url: "games/flash/papas_sushiria/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_tacomia",
    nome: "Papa's Taco Mia",
    thumb: "assets/thumbnail/PapasTacoria.webp",
    type: "self",
    url: "games/flash/papas_tacomia/index.html",
    rating: "L",
    tags: ["flash", "casual"]
  },
  {
    id: "papas_scooperia",
    nome: "Papa's Scooperia",
    thumb: "assets/thumbnail/PapasScooperia.webp",
    type: "self",
    url: "games/flash/papas_scooperia/index.html",
    rating: "L",
    tags: ["flash", "casual", "doce"]
  },
  {
    id: "papas_bakeria",
    nome: "Papa's Bakeria",
    thumb: "assets/thumbnail/PapasBakeria.webp",
    type: "self",
    url: "games/flash/papas_bakeria/index.html",
    rating: "L",
    tags: ["flash", "casual", "doce"]
  },

  // --- Ação / Aventura ---
  {
    id: "stickwar",
    nome: "Stick War",
    thumb: "assets/thumbnail/StickWar.webp",
    type: "self",
    url: "games/flash/stickwar/index.html",
    rating: "12",
    tags: ["flash", "acao", "estrategia"]
  },
  {
    id: "stickwar2",
    nome: "Stick War 2",
    thumb: "assets/thumbnail/StickWar2.webp",
    type: "self",
    url: "games/flash/stickwar2/index.html",
    rating: "A14",
    tags: ["flash", "acao", "estrategia"]
  },
  {
    id: "stickrpg",
    nome: "Stick RPG",
    thumb: "assets/thumbnail/StickRPG.webp",
    type: "self",
    url: "games/flash/stickrpg/index.html",
    rating: "A12",
    tags: ["flash", "casual", "puzzle"]
  },
  {
    id: "electricman2",
    nome: "Electricman 2",
    thumb: "assets/thumbnail/Eletricman2.webp",
    type: "self",
    url: "games/flash/electricman2/index.html",
    rating: "A14",
    tags: ["flash", "acao"]
  },
  {
    id: "madnesscombat2",
    nome: "Madness Combat 2",
    thumb: "assets/thumbnail/MadnessCombat2.webp",
    type: "self",
    url: "games/flash/madnesscombat2/index.html",
    rating: "A16",
    tags: ["flash", "acao"]
  },
  {
    id: "happywheels",
    nome: "Happy Wheels (broken) (substitute with html version)",
    thumb: "assets/thumbnail/HappyWheel.webp",
    type: "self",
    url: "games/flash/happywheels/index.html",
    rating: "A18",
    tags: ["flash", "acao", "casual"]
  },
  {
    id: "earntodie",
    nome: "Earn to Die",
    thumb: "assets/thumbnail/Earn2Die.webp",
    type: "self",
    url: "games/flash/earntodie/index.html",
    rating: "A14",
    tags: ["flash", "acao", "casual"]
  },
  {
    id: "thelaststand",
    nome: "The Last Stand",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/thelaststand/index.html",
    rating: "A14",
    tags: ["flash", "acao", "estrategia"]
  },

  {
    id: "smf_original",
    nome: "Super Smash Flash",
    thumb: "assets/thumbnail/smf.webp",
    type: "self",
    url: "games/flash/smf_original/index.html",
    rating: "A10",
    tags: ["flash", "acao", "amigos"]
  },
  {
    id: "smf2",
    nome: "Super Smash Flash 2",
    thumb: "assets/thumbnail/smf2.webp",
    type: "self",
    url: "games/flash/smf2/index.html",
    rating: "A10",
    tags: ["flash", "acao", "amigos"]
  },

  // --- Plataforma ---
  {
    id: "fancypants",
    nome: "Fancy Pants Adventure",
    thumb: "assets/thumbnail/sfp.webp",
    type: "self",
    url: "games/flash/fancypants/index.html",
    rating: "L",
    tags: ["flash", "casual", "acao"]
  },
  {
    id: "fancypants2",
    nome: "Fancy Pants Adventure: World 2 demo",
    thumb: "assets/thumbnail/sfp2.webp",
    type: "self",
    url: "games/flash/fancypants2/index.html",
    rating: "L",
    tags: ["flash", "casual", "acao"]
  },
  {
    id: "dinorun",
    nome: "Dino Run",
    thumb: "assets/thumbnail/DinoRun.webp",
    type: "self",
    url: "games/flash/dinorun/index.html",
    rating: "AL",
    tags: ["flash", "casual", "acao"]
  },
  {
    id: "learntofly",
    nome: "Learn to Fly",
    thumb: "assets/thumbnail/Learn2Fly.webp",
    type: "self",
    url: "games/flash/learntofly/index.html",
    rating: "AL",
    tags: ["flash", "casual"]
  },

  // --- Puzzle / Estratégia ---
  {
    id: "bloons1",
    nome: "Bloons (original)",
    thumb: "assets/thumbnail/bloons.webp",
    type: "self",
    url: "games/flash/bloons/index.html",
    rating: "AL",
    tags: ["flash", "puzzle", "casual"]
  },
  {
    id: "bloons2",
    nome: "Bloons 2",
    thumb: "assets/thumbnail/bloons2.webp",
    type: "self",
    url: "games/flash/bloons2/index.html",
    rating: "AL",
    tags: ["flash", "puzzle", "casual"]
  },
  {
    id: "bloonstd",
    nome: "Bloons Tower Defense",
    thumb: "assets/thumbnail/BloonsTD.webp",
    type: "self",
    url: "games/flash/bloonstd/index.html",
    rating: "AL",
    tags: ["flash", "estrategia", "puzzle"]
  },
  {
    id: "cursedtreasure",
    nome: "Cursed Treasure",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/cursedtreasure/index.html",
    rating: "A10",
    tags: ["flash", "estrategia", "puzzle"]
  },
  {
    id: "gemcraft",
    nome: "Gemcraft",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/gemcraft/index.html",
    rating: "A10",
    tags: ["flash", "estrategia", "puzzle"]
  },
  {
    id: "infectonator",
    nome: "Infectonator",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/infectonator/index.html",
    rating: "A14",
    tags: ["flash", "estrategia", "casual"]
  },
  {
    id: "infectonator2",
    nome: "Infectonator 2",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/infectonator2/index.html",
    rating: "A14",
    tags: ["flash", "estrategia", "casual"]
  },
  {
    id: "desconhecido2",
    nome: " ",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/desconhecido2/index.html",
    rating: "6",
    tags: ["flash", "estrategia", "puzzle"]
  },
  {
    id: "exhibitofsorrow",
    nome: "Exhibit Of Sorrows",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "external",
    url: "https://adayofjoy.itch.io/exhibit-of-sorrows",
    rating: "A16",
    tags: ["Ação", "puzzle"]
  },
];
