// Lista principal de filmes do site.
//
// Como adicionar outro filme:
// 1. Copie um bloco de filme existente dentro de movieCatalog.
// 2. Troque os dados: id, title, year, poster, rating, genres, runtime e overview.
// 3. O id e o poster normalmente vêm do TMDb: https://www.themoviedb.org/
// 4. Salve o arquivo e recarregue a página. O filme aparece no catálogo automaticamente.
//
// Exemplo:
// {
//   id: 603,
//   title: 'The Matrix',
//   year: 1999,
//   poster: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
//   rating: '8.7',
//   genres: ['Ação', 'Ficção científica'],
//   runtime: 136,
//   overview: 'Sinopse curta do filme.'
// }


const movieCatalog = [
  {
    id: 299536,
    title: 'Avengers: Infinity War',
    year: 2018,
    poster: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    rating: '8.2',
    genres: ['Ação', 'Aventura', 'Ficção científica'],
    runtime: 149,
    overview: 'Os Vingadores e seus aliados tentam impedir Thanos de reunir as Joias do Infinito.'
  },
  {
    id: 324857,
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    poster: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    rating: '8.4',
    genres: ['Animação', 'Ação', 'Aventura'],
    runtime: 117,
    overview: 'Miles Morales se torna o Homem-Aranha e encontra versões do herói vindas de outros universos.'
  },
  {
    id: 424694,
    title: 'Bohemian Rhapsody',
    year: 2018,
    poster: '/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
    rating: '8.0',
    genres: ['Drama', 'Música'],
    runtime: 135,
    overview: 'A trajetória do Queen e de Freddie Mercury, desde a formação da banda até sua apresentação no Live Aid.'
  },
  {
    id: 299534,
    title: 'Avengers: Endgame',
    year: 2019,
    poster: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    rating: '8.3',
    genres: ['Ação', 'Aventura', 'Drama'],
    runtime: 181,
    overview: 'Após uma derrota devastadora, os heróis restantes tentam restaurar o universo.'
  },
  {
    id: 420818,
    title: 'The Lion King',
    year: 2019,
    poster: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
    rating: '7.1',
    genres: ['Aventura', 'Drama', 'Animação'],
    runtime: 118,
    overview: 'Simba precisa enfrentar seu passado e assumir seu lugar como rei das Terras do Reino.'
  },
  {
    id: 429617,
    title: 'Spider-Man: Far From Home',
    year: 2019,
    poster: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    rating: '7.4',
    genres: ['Ação', 'Aventura', 'Ficção científica'],
    runtime: 129,
    overview: 'Peter Parker tenta aproveitar uma viagem escolar enquanto enfrenta uma nova ameaça.'
  },
  {
    id: 530915,
    title: '1917',
    year: 2019,
    poster: '/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    rating: '8.0',
    genres: ['Guerra', 'Drama'],
    runtime: 119,
    overview: 'Dois soldados recebem uma missão urgente para atravessar território inimigo durante a Primeira Guerra Mundial.'
  },
  {
    id: 475557,
    title: 'Joker',
    year: 2019,
    poster: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    rating: '8.2',
    genres: ['Drama', 'Suspense', 'Crime'],
    runtime: 122,
    overview: 'Um homem marginalizado enfrenta o abandono social enquanto sua vida toma um rumo sombrio.'
  },
  {
    id: 508439,
    title: 'Onward',
    year: 2020,
    poster: '/osZRYJ1TmL2o5KAHAmh0HRCoLFp.jpg',
    rating: '7.6',
    genres: ['Animação', 'Aventura', 'Fantasia'],
    runtime: 102,
    overview: 'Dois irmãos elfos embarcam em uma jornada mágica para passar mais um dia com o pai.'
  },
  {
    id: 545611,
    title: 'Everything Everywhere All at Once',
    year: 2022,
    poster: '/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
    rating: '7.8',
    genres: ['Ação', 'Aventura', 'Ficção científica'],
    runtime: 139,
    overview: 'Uma mulher comum descobre conexões entre universos paralelos e precisa enfrentar uma ameaça extraordinária.'
  },
  {
    id: 508442,
    title: 'Soul',
    year: 2020,
    poster: '/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
    rating: '8.1',
    genres: ['Animação', 'Drama', 'Fantasia'],
    runtime: 100,
    overview: 'Um professor de música embarca em uma jornada que o faz refletir sobre propósito e paixão.'
  },
  {
    id: 497698,
    title: 'Black Widow',
    year: 2021,
    poster: '/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg',
    rating: '7.2',
    genres: ['Ação', 'Aventura', 'Ficção científica'],
    runtime: 134,
    overview: 'Natasha Romanoff confronta seu passado e reencontra pessoas ligadas à sua antiga vida.'
  },
  {
    id: 566525,
    title: 'Shang-Chi and the Legend of the Ten Rings',
    year: 2021,
    poster: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
    rating: '7.5',
    genres: ['Ação', 'Aventura', 'Fantasia'],
    runtime: 132,
    overview: 'Shang-Chi precisa confrontar o legado de sua família e os poderes dos Dez Anéis.'
  },
  {
    id: 438631,
    title: 'Dune',
    year: 2021,
    poster: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    rating: '8.0',
    genres: ['Ficção científica', 'Aventura', 'Drama'],
    runtime: 155,
    overview: 'Paul Atreides viaja para Arrakis, um planeta desértico fundamental para o futuro da humanidade.'
  },
  {
    id: 634649,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    poster: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    rating: '8.0',
    genres: ['Ação', 'Aventura', 'Ficção científica'],
    runtime: 148,
    overview: 'Após sua identidade ser revelada, Peter Parker enfrenta consequências que ameaçam o multiverso.'
  },
  {
    id: 524434,
    title: 'Eternals',
    year: 2021,
    poster: '/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    rating: '6.3',
    genres: ['Ação', 'Aventura', 'Fantasia'],
    runtime: 156,
    overview: 'Um grupo de seres imortais retorna para proteger a humanidade de uma ameaça ancestral.'
  },
  {
    id: 438148,
    title: 'Minions: The Rise of Gru',
    year: 2022,
    poster: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    rating: '7.3',
    genres: ['Animação', 'Comédia', 'Aventura'],
    runtime: 87,
    overview: 'O jovem Gru sonha em se tornar um grande vilão e conta com a ajuda dos Minions.'
  },
  {
    id: 361743,
    title: 'Top Gun: Maverick',
    year: 2022,
    poster: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    rating: '8.2',
    genres: ['Ação', 'Drama'],
    runtime: 130,
    overview: 'Maverick treina uma nova geração de pilotos para uma missão aérea de alto risco.'
  },
  {
    id: 436270,
    title: 'Black Adam',
    year: 2022,
    poster: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    rating: '6.9',
    genres: ['Ação', 'Fantasia', 'Ficção científica'],
    runtime: 125,
    overview: 'Um ser com poderes extraordinários desperta após milhares de anos e desafia a ordem estabelecida.'
  },
  {
    id: 616037,
    title: 'Thor: Love and Thunder',
    year: 2022,
    poster: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
    rating: '6.5',
    genres: ['Ação', 'Aventura', 'Fantasia'],
    runtime: 119,
    overview: 'Thor embarca em uma jornada para enfrentar uma ameaça que coloca deuses em perigo.'
  },
  {
    id: 76600,
    title: 'Avatar: The Way of Water',
    year: 2022,
    poster: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    rating: '7.6',
    genres: ['Ficção científica', 'Aventura', 'Ação'],
    runtime: 192,
    overview: 'Jake Sully e Neytiri protegem sua família e buscam refúgio entre os povos dos oceanos de Pandora.'
  },
  {
    id: 675353,
    title: 'Sonic the Hedgehog 2',
    year: 2022,
    poster: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
    rating: '7.5',
    genres: ['Ação', 'Aventura', 'Comédia'],
    runtime: 122,
    overview: 'Sonic se une a Tails para enfrentar Robotnik e seu novo aliado, Knuckles.'
  },
  {
    id: 3617430,
    title: 'The Batman',
    year: 2022,
    poster: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    rating: '7.8',
    genres: ['Crime', 'Mistério', 'Ação'],
    runtime: 176,
    overview: 'Batman investiga uma série de crimes em Gotham e descobre uma conspiração ligada à elite da cidade.'
  }
];


const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/original';
const FALLBACK_POSTER = '../assets/placeholder.png';

function buildEmbedUrl(movieId) {
  return `https://myembed.biz/filme/${movieId}`;
}

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRandomMovies(count) {
  return shuffle(movieCatalog).slice(0, count);
}

function getRecentlyAdded(count) {
  return movieCatalog.slice(-count).reverse();
}

function getMovieById(id) {
  return movieCatalog.find(movie => movie.id === Number(id));
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getPosterUrl(movie) {
  return movie && movie.poster ? `${POSTER_BASE_URL}${movie.poster}` : FALLBACK_POSTER;
}

function showStatus(message, isError = false) {
  const status = document.getElementById('movie-status');
  if (!status) return;
  status.textContent = message;
  status.style.color = isError ? '#ff8a8a' : '#a8ffab';
}

function createMovieCard(movie, destination) {
  const card = document.createElement('a');
  const isRecommended = destination && destination.includes('player.html');

  card.className = `card-catalogo movie-card${isRecommended ? ' recommended-card' : ''}`;
  card.href = destination ? `${destination}?id=${movie.id}` : '#';
  card.innerHTML = `
    <img src="${getPosterUrl(movie)}" alt="${movie.title}" onerror="this.onerror=null;this.src='${FALLBACK_POSTER}'">
    <div class="movie-card-content">
      <h3>${movie.title}</h3>
      <p class="nota-filme">${movie.year} - ${movie.rating}</p>
    </div>
  `;

  return card;
}

function renderMovieList(containerId, movies, destination = 'player.html') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  movies.forEach(movie => container.appendChild(createMovieCard(movie, destination)));
}

function initCarousel(containerId, previousButtonId, nextButtonId) {
  const carousel = document.getElementById(containerId);
  const previousButton = document.getElementById(previousButtonId);
  const nextButton = document.getElementById(nextButtonId);

  if (!carousel || !previousButton || !nextButton) return;

  previousButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });
}

function renderMoviePlayer() {
  const playerTitle = document.getElementById('player-title');
  const playerGenres = document.getElementById('player-genres');
  const playerOverview = document.getElementById('player-overview');
  const playerRating = document.getElementById('player-rating');
  const playerRuntime = document.getElementById('player-runtime');
  const playerImage = document.getElementById('player-image');
  const playerFrame = document.getElementById('movie-player');

  if (!playerFrame || !playerTitle) return;

  const movie = getMovieById(getQueryParam('id'));

  if (!movie) {
    showStatus('Filme não encontrado. Volte ao catálogo.', true);
    return;
  }

  playerTitle.textContent = `${movie.title} (${movie.year})`;
  playerGenres.textContent = movie.genres.join(' - ');
  playerOverview.textContent = movie.overview;
  playerRating.textContent = `Avaliação: ${movie.rating}`;
  playerRuntime.textContent = `Duração: ${movie.runtime} min`;
  playerImage.src = getPosterUrl(movie);
  playerImage.alt = movie.title;
  playerImage.onerror = function () {
    this.onerror = null;
    this.src = FALLBACK_POSTER;
  };
  playerFrame.src = buildEmbedUrl(movie.id);
  showStatus(`Assistindo: ${movie.title}`);
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('header nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  highlightCurrentPage();
  renderMovieList('recommended-container', getRandomMovies(10));
  renderMovieList('recent-container', getRecentlyAdded(8));
  renderMovieList('movies-container', getRandomMovies(movieCatalog.length));
  initCarousel('recommended-container', 'btn-ant', 'btn-prox');
  initCarousel('recent-container', 'btn-recent-ant', 'btn-recent-prox');
  renderMoviePlayer();
});
