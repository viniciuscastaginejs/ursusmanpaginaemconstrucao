/* =========================================================
   PÕE ORDEM NA TOCA! — banco de desafios
   ---------------------------------------------------------
   Cada desafio tem:
     pergunta : texto grande no topo
     de / ate : rótulos das pontas da fila (ex.: "MAIS LEVE" → "MAIS PESADO")
     itens    : JÁ NA ORDEM CERTA (o jogo embaralha sozinho)
       nome   : nome que aparece no card
       img    : arquivo em ./img/ (emoji ou desenho) OU uma URL de foto
       valor  : o que aparece na revelação
   Para criar um desafio novo, copie um bloco e troque os dados.
   ========================================================= */
window.DESAFIOS = [
  { pergunta: "Do mais LEVE ao mais PESADO", de: "Mais leve", ate: "Mais pesado", tema: "Animais",
    itens: [
      { nome: "Formiga",     img: "1f41c.svg", valor: "3 mg" },
      { nome: "Galinha",     img: "1f414.svg", valor: "2,5 kg" },
      { nome: "Vaca",        img: "1f404.svg", valor: "700 kg" },
      { nome: "Baleia-azul", img: "1f40b.svg", valor: "150 toneladas" }
    ] },

  { pergunta: "Do mais LENTO ao mais RÁPIDO", de: "Mais lento", ate: "Mais rápido", tema: "Velocidade",
    itens: [
      { nome: "Caracol",     img: "1f40c.svg", valor: "0,05 km/h" },
      { nome: "Tartaruga",   img: "1f422.svg", valor: "0,3 km/h" },
      { nome: "Usain Bolt",  img: "1f3c3.svg", valor: "44 km/h" },
      { nome: "Cavalo",      img: "1f40e.svg", valor: "88 km/h" },
      { nome: "Guepardo",    img: "1f406.svg", valor: "110 km/h" }
    ] },

  { pergunta: "Quem VIVE MENOS até quem VIVE MAIS", de: "Vive menos", ate: "Vive mais", tema: "Animais",
    itens: [
      { nome: "Hamster",           img: "1f439.svg", valor: "2 a 3 anos" },
      { nome: "Cachorro",          img: "1f436.svg", valor: "10 a 13 anos" },
      { nome: "Cavalo",            img: "1f434.svg", valor: "25 a 30 anos" },
      { nome: "Elefante",          img: "1f418.svg", valor: "60 a 70 anos" },
      { nome: "Tartaruga-gigante", img: "1f422.svg", valor: "mais de 100 anos" }
    ] },

  { pergunta: "Na ordem em que foram INVENTADOS", de: "Mais antigo", ate: "Mais recente", tema: "Invenções",
    itens: [
      { nome: "Telefone",       img: "260e.svg",  valor: "1876" },
      { nome: "Lâmpada",        img: "1f4a1.svg", valor: "1879" },
      { nome: "Avião (14-Bis)", img: "2708.svg",  valor: "1906" },
      { nome: "Televisão",      img: "1f4fa.svg", valor: "1927" },
      { nome: "Celular",        img: "1f4f1.svg", valor: "1973" }
    ] },

  { pergunta: "Do mais PERTO ao mais LONGE do Sol", de: "Mais perto", ate: "Mais longe", tema: "Espaço",
    itens: [
      { nome: "Mercúrio", img: "mercurio.svg", valor: "58 milhões de km" },
      { nome: "Vênus",    img: "venus.svg",    valor: "108 milhões de km" },
      { nome: "Terra",    img: "1f30d.svg",    valor: "150 milhões de km" },
      { nome: "Marte",    img: "marte.svg",    valor: "228 milhões de km" },
      { nome: "Júpiter",  img: "jupiter.svg",  valor: "778 milhões de km" }
    ] },

  { pergunta: "Do MENOR ao MAIOR planeta", de: "Menor", ate: "Maior", tema: "Espaço",
    itens: [
      { nome: "Mercúrio", img: "mercurio.svg", valor: "4.879 km de diâmetro" },
      { nome: "Marte",    img: "marte.svg",    valor: "6.779 km" },
      { nome: "Terra",    img: "1f30d.svg",    valor: "12.742 km" },
      { nome: "Netuno",   img: "netuno.svg",   valor: "49.244 km" },
      { nome: "Júpiter",  img: "jupiter.svg",  valor: "139.820 km" }
    ] },

  { pergunta: "Do MENOR ao MAIOR país (em área)", de: "Menor", ate: "Maior", tema: "Países",
    itens: [
      { nome: "Portugal", img: "1f1f5-1f1f9.svg", valor: "92 mil km²" },
      { nome: "Japão",    img: "1f1ef-1f1f5.svg", valor: "378 mil km²" },
      { nome: "Brasil",   img: "1f1e7-1f1f7.svg", valor: "8,5 milhões de km²" },
      { nome: "Canadá",   img: "1f1e8-1f1e6.svg", valor: "9,98 milhões de km²" },
      { nome: "Rússia",   img: "1f1f7-1f1fa.svg", valor: "17,1 milhões de km²" }
    ] },

  { pergunta: "Do MENOS ao MAIS populoso", de: "Menos gente", ate: "Mais gente", tema: "Países",
    itens: [
      { nome: "Portugal",  img: "1f1f5-1f1f9.svg", valor: "10,6 milhões" },
      { nome: "Argentina", img: "1f1e6-1f1f7.svg", valor: "46 milhões" },
      { nome: "Japão",     img: "1f1ef-1f1f5.svg", valor: "124 milhões" },
      { nome: "Brasil",    img: "1f1e7-1f1f7.svg", valor: "203 milhões" },
      { nome: "Índia",     img: "1f1ee-1f1f3.svg", valor: "1,4 bilhão" }
    ] },

  { pergunta: "Do mais BAIXO ao mais ALTO", de: "Mais baixo", ate: "Mais alto", tema: "Altura",
    itens: [
      { nome: "Pessoa",                img: "1f9cd.svg", valor: "1,7 m" },
      { nome: "Girafa",                img: "1f992.svg", valor: "5,5 m" },
      { nome: "Estátua da Liberdade",  img: "1f5fd.svg", valor: "93 m (com a base)" },
      { nome: "Torre de Tóquio",       img: "1f5fc.svg", valor: "333 m" },
      { nome: "Monte Everest",         img: "1f3d4.svg", valor: "8.849 m" }
    ] },

  { pergunta: "MENOS calorias até MAIS calorias (100 g)", de: "Menos calorias", ate: "Mais calorias", tema: "Comida",
    itens: [
      { nome: "Pepino",    img: "1f952.svg", valor: "15 kcal" },
      { nome: "Maçã",      img: "1f34e.svg", valor: "52 kcal" },
      { nome: "Banana",    img: "1f34c.svg", valor: "89 kcal" },
      { nome: "Abacate",   img: "1f951.svg", valor: "160 kcal" },
      { nome: "Chocolate", img: "1f36b.svg", valor: "540 kcal" }
    ] },

  { pergunta: "Do MENOR ao MAIOR número de patas", de: "Menos patas", ate: "Mais patas", tema: "Animais",
    itens: [
      { nome: "Cobra",   img: "1f40d.svg", valor: "0 patas" },
      { nome: "Pinguim", img: "1f427.svg", valor: "2 patas" },
      { nome: "Gato",    img: "1f408.svg", valor: "4 patas" },
      { nome: "Formiga", img: "1f41c.svg", valor: "6 patas" },
      { nome: "Aranha",  img: "1f577.svg", valor: "8 patas" }
    ] },

  { pergunta: "Do mais ANTIGO ao mais RECENTE", de: "Mais antigo", ate: "Mais recente", tema: "História",
    itens: [
      { nome: "Fim dos dinossauros",     img: "1f996.svg", valor: "66 milhões de anos atrás" },
      { nome: "Primeiros humanos",       img: "1f9d1.svg", valor: "300 mil anos atrás" },
      { nome: "Descobrimento do Brasil", img: "26f5.svg",  valor: "1500" },
      { nome: "Homem pisa na Lua",       img: "1f680.svg", valor: "1969" }
    ] },

  { pergunta: "Do MENOR ao MAIOR (tamanho de verdade)", de: "Menor", ate: "Maior", tema: "Tamanho",
    itens: [
      { nome: "Bactéria",    img: "1f9a0.svg", valor: "0,002 mm" },
      { nome: "Formiga",     img: "1f41c.svg", valor: "5 mm" },
      { nome: "Rato",        img: "1f42d.svg", valor: "8 cm" },
      { nome: "Pessoa",      img: "1f9cd.svg", valor: "1,7 m" },
      { nome: "Baleia-azul", img: "1f40b.svg", valor: "30 m" }
    ] },

  { pergunta: "Do mais LENTO ao mais RÁPIDO", de: "Mais lento", ate: "Mais rápido", tema: "Veículos",
    itens: [
      { nome: "Bicicleta",       img: "1f6b2.svg", valor: "40 km/h" },
      { nome: "Carro popular",   img: "1f697.svg", valor: "180 km/h" },
      { nome: "Carro de F1",     img: "1f3ce.svg", valor: "370 km/h" },
      { nome: "Avião comercial", img: "2708.svg",  valor: "900 km/h" },
      { nome: "Foguete",         img: "1f680.svg", valor: "28.000 km/h" }
    ] },

  { pergunta: "MENOS jogadores ao MAIS jogadores (por time)", de: "Menos", ate: "Mais", tema: "Esportes",
    itens: [
      { nome: "Tênis (simples)", img: "1f3be.svg", valor: "1 jogador" },
      { nome: "Basquete",        img: "1f3c0.svg", valor: "5 jogadores" },
      { nome: "Vôlei",           img: "1f3d0.svg", valor: "6 jogadores" },
      { nome: "Futebol",         img: "26bd.svg",  valor: "11 jogadores" },
      { nome: "Rúgbi",           img: "1f3c9.svg", valor: "15 jogadores" }
    ] },

  { pergunta: "Da mais LEVE à mais PESADA", de: "Mais leve", ate: "Mais pesada", tema: "Frutas",
    itens: [
      { nome: "Uva",      img: "1f347.svg", valor: "5 g (cada uva)" },
      { nome: "Morango",  img: "1f353.svg", valor: "12 g" },
      { nome: "Maçã",     img: "1f34e.svg", valor: "150 g" },
      { nome: "Abacaxi",  img: "1f34d.svg", valor: "1,5 kg" },
      { nome: "Melancia", img: "1f349.svg", valor: "8 kg" }
    ] },

  { pergunta: "Do mais AO NORTE ao mais AO SUL (capitais)", de: "Norte", ate: "Sul", tema: "Mapa",
    itens: [
      { nome: "Noruega (Oslo)",            img: "1f1f3-1f1f4.svg", valor: "60° Norte" },
      { nome: "Egito (Cairo)",             img: "1f1ea-1f1ec.svg", valor: "30° Norte" },
      { nome: "México (Cidade do México)", img: "1f1f2-1f1fd.svg", valor: "19° Norte" },
      { nome: "Brasil (Brasília)",         img: "1f1e7-1f1f7.svg", valor: "16° Sul" },
      { nome: "Argentina (Buenos Aires)",  img: "1f1e6-1f1f7.svg", valor: "35° Sul" }
    ] },

  { pergunta: "Primeira Copa do Mundo que cada país sediou", de: "Mais antiga", ate: "Mais recente", tema: "Futebol",
    itens: [
      { nome: "Uruguai", img: "1f1fa-1f1fe.svg", valor: "1930" },
      { nome: "Brasil",  img: "1f1e7-1f1f7.svg", valor: "1950" },
      { nome: "México",  img: "1f1f2-1f1fd.svg", valor: "1970" },
      { nome: "Japão",   img: "1f1ef-1f1f5.svg", valor: "2002 (com a Coreia)" },
      { nome: "Catar",   img: "1f1f6-1f1e6.svg", valor: "2022" }
    ] },

  { pergunta: "Olimpíadas: da mais ANTIGA à mais RECENTE", de: "Mais antiga", ate: "Mais recente", tema: "Esportes",
    itens: [
      { nome: "Moscou",    img: "1f1f7-1f1fa.svg", valor: "1980" },
      { nome: "Barcelona", img: "1f1ea-1f1f8.svg", valor: "1992" },
      { nome: "Sydney",    img: "1f1e6-1f1fa.svg", valor: "2000" },
      { nome: "Pequim",    img: "1f1e8-1f1f3.svg", valor: "2008" },
      { nome: "Rio",       img: "1f1e7-1f1f7.svg", valor: "2016" }
    ] },

  { pergunta: "Gravidez: da MAIS CURTA à MAIS LONGA", de: "Mais curta", ate: "Mais longa", tema: "Animais",
    itens: [
      { nome: "Hamster",     img: "1f439.svg", valor: "18 dias" },
      { nome: "Coelho",      img: "1f430.svg", valor: "31 dias" },
      { nome: "Ser humano",  img: "1f930.svg", valor: "9 meses" },
      { nome: "Girafa",      img: "1f992.svg", valor: "15 meses" },
      { nome: "Elefante",    img: "1f418.svg", valor: "22 meses" }
    ] },

  { pergunta: "Da bola mais LEVE à mais PESADA", de: "Mais leve", ate: "Mais pesada", tema: "Esportes",
    itens: [
      { nome: "Pingue-pongue", img: "1f3d3.svg", valor: "2,7 g" },
      { nome: "Tênis",         img: "1f3be.svg", valor: "58 g" },
      { nome: "Futebol",       img: "26bd.svg",  valor: "430 g" },
      { nome: "Basquete",      img: "1f3c0.svg", valor: "620 g" },
      { nome: "Boliche",       img: "1f3b3.svg", valor: "até 7 kg" }
    ] },

  { pergunta: "MENOS cordas até MAIS cordas", de: "Menos cordas", ate: "Mais cordas", tema: "Música",
    itens: [
      { nome: "Violino",  img: "1f3bb.svg", valor: "4 cordas" },
      { nome: "Banjo",    img: "1fa95.svg", valor: "5 cordas" },
      { nome: "Guitarra", img: "1f3b8.svg", valor: "6 cordas" },
      { nome: "Piano",    img: "1f3b9.svg", valor: "cerca de 230 cordas" }
    ] },

  { pergunta: "MENOS dentes até MAIS dentes", de: "Menos dentes", ate: "Mais dentes", tema: "Animais",
    itens: [
      { nome: "Galinha",            img: "1f414.svg", valor: "0 dentes" },
      { nome: "Gato",               img: "1f408.svg", valor: "30 dentes" },
      { nome: "Ser humano (adulto)", img: "1f9d1.svg", valor: "32 dentes" },
      { nome: "Cachorro",           img: "1f436.svg", valor: "42 dentes" },
      { nome: "Tubarão",            img: "1f988.svg", valor: "centenas!" }
    ] },

  { pergunta: "Do mais LEVE ao mais PESADO", de: "Mais leve", ate: "Mais pesado", tema: "Fazenda",
    itens: [
      { nome: "Pintinho", img: "1f424.svg", valor: "50 g" },
      { nome: "Galinha",  img: "1f414.svg", valor: "2,5 kg" },
      { nome: "Ovelha",   img: "1f411.svg", valor: "70 kg" },
      { nome: "Vaca",     img: "1f404.svg", valor: "700 kg" }
    ] },

  { pergunta: "Do mais BAIXO ao mais ALTO", de: "Mais baixo", ate: "Mais alto", tema: "Animais",
    itens: [
      { nome: "Pinguim-imperador", img: "1f427.svg", valor: "1,2 m" },
      { nome: "Cavalo",            img: "1f40e.svg", valor: "1,6 m" },
      { nome: "Elefante",          img: "1f418.svg", valor: "3,2 m" },
      { nome: "Girafa",            img: "1f992.svg", valor: "5,5 m" }
    ] },

  { pergunta: "De São Paulo até… do mais PERTO ao mais LONGE", de: "Mais perto", ate: "Mais longe", tema: "Viagem",
    itens: [
      { nome: "Buenos Aires", img: "1f1e6-1f1f7.svg", valor: "1.700 km" },
      { nome: "Santiago",     img: "1f1e8-1f1f1.svg", valor: "2.600 km" },
      { nome: "Nova York",    img: "1f1fa-1f1f8.svg", valor: "7.700 km" },
      { nome: "Lisboa",       img: "1f1f5-1f1f9.svg", valor: "7.900 km" },
      { nome: "Tóquio",       img: "1f1ef-1f1f5.svg", valor: "18.500 km" }
    ] },

  { pergunta: "Do mais ANTIGO ao mais NOVO", de: "Mais antigo", ate: "Mais novo", tema: "Tecnologia",
    itens: [
      { nome: "Disquete",     img: "1f4be.svg", valor: "1971" },
      { nome: "Fita VHS",     img: "1f4fc.svg", valor: "1976" },
      { nome: "CD",           img: "1f4bf.svg", valor: "1982" },
      { nome: "DVD",          img: "1f4c0.svg", valor: "1996" }
    ] },

  { pergunta: "Do rio mais CURTO ao mais LONGO", de: "Mais curto", ate: "Mais longo", tema: "Mapa",
    itens: [
      { nome: "Tejo",        img: "1f1f5-1f1f9.svg", valor: "1.007 km" },
      { nome: "Mississippi", img: "1f1fa-1f1f8.svg", valor: "3.730 km" },
      { nome: "Yangtzé",     img: "1f1e8-1f1f3.svg", valor: "6.300 km" },
      { nome: "Amazonas",    img: "1f1e7-1f1f7.svg", valor: "6.400 km ou mais" }
    ] },

  { pergunta: "Quem leva MENOS gente até quem leva MAIS", de: "Menos gente", ate: "Mais gente", tema: "Veículos",
    itens: [
      { nome: "Moto",                img: "1f3cd.svg", valor: "2 pessoas" },
      { nome: "Carro",               img: "1f697.svg", valor: "5 pessoas" },
      { nome: "Ônibus",              img: "1f68c.svg", valor: "45 pessoas" },
      { nome: "Avião grande",        img: "2708.svg",  valor: "300+ pessoas" },
      { nome: "Navio de cruzeiro",   img: "1f6f3.svg", valor: "6.000+ pessoas" }
    ] }
];
