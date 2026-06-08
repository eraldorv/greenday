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
  { id: 550, title: 'Fight Club', year: 1999, poster: '/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg', rating: '8.8', genres: ['Drama'], runtime: 139, overview: 'Um homem insatisfeito com sua vida se envolve em um clube secreto de luta que muda sua percepção do mundo.' },
  { id: 278, title: 'The Shawshank Redemption', year: 1994, poster: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', rating: '9.3', genres: ['Drama', 'Crime'], runtime: 142, overview: 'A história de um homem condenado à prisão perpétua que encontra esperança e amizade dentro de Shawshank.' },
  { id: 238, title: 'The Godfather', year: 1972, poster: '/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg', rating: '9.2', genres: ['Crime', 'Drama'], runtime: 175, overview: 'A saga da família Corleone e o conflito de honra, poder e lealdade na máfia americana.' },
  { id: 680, title: 'Pulp Fiction', year: 1994, poster: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg', rating: '8.9', genres: ['Crime', 'Drama'], runtime: 154, overview: 'Várias histórias entrelaçadas de criminosos, boxeadores e gangsters em Los Angeles.' },
  { id: 27205, title: 'Inception', year: 2010, poster: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', rating: '8.8', genres: ['Ação', 'Ficção científica'], runtime: 148, overview: 'Um ladrão entra em sonhos para roubar segredos e recebe a missão de implantar uma ideia na mente de alguém.' },
  { id: 155, title: 'The Dark Knight', year: 2008, poster: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: '9.0', genres: ['Ação', 'Crime'], runtime: 152, overview: 'Batman enfrenta o caos de Gotham enquanto o Coringa ameaça destruir a cidade.' },
  { id: 13, title: 'Forrest Gump', year: 1994, poster: '/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg', rating: '8.8', genres: ['Drama', 'Romance'], runtime: 142, overview: 'A vida incrível de Forrest Gump, um homem gentil que testemunha momentos históricos sem perceber seu impacto.' },
  { id: 157336, title: 'Interstellar', year: 2014, poster: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', rating: '8.6', genres: ['Aventura', 'Drama', 'Ficção científica'], runtime: 169, overview: 'Um grupo de exploradores viaja por um buraco de minhoca para encontrar um novo lar para a humanidade.' },
  { id: 603, title: 'The Matrix', year: 1999, poster: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', rating: '8.7', genres: ['Ação', 'Ficção científica'], runtime: 136, overview: 'Um hacker descobre que o mundo é uma simulação e se junta à resistência para libertar a humanidade.' },
  { id: 11, title: 'Star Wars: A New Hope', year: 1977, poster: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', rating: '8.6', genres: ['Ação', 'Aventura', 'Fantasia'], runtime: 121, overview: 'Luke Skywalker se junta à Princesa Leia e outros rebeldes para destruir a Estrela da Morte.' },
  { id: 122, title: 'Jurassic Park', year: 1993, poster: '/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg', rating: '8.1', genres: ['Aventura', 'Ficção científica'], runtime: 127, overview: 'Um parque temático com dinossauros geneticamente criados se torna uma luta pela sobrevivência.' },
  { id: 497, title: 'The Green Mile', year: 1999, poster: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg', rating: '8.6', genres: ['Drama', 'Fantasia'], runtime: 189, overview: 'O guarda de uma prisão descobre que um prisioneiro condenado possui poderes milagrosos.' },
  { id: 24428, title: 'The Avengers', year: 2012, poster: '/RYMX2wcKCBArLQsfhcrQK4w8eT.jpg', rating: '8.0', genres: ['Ação', 'Ficção científica'], runtime: 143, overview: 'Heróis como Homem de Ferro, Capitão América e Thor se unem para salvar a Terra de uma invasão alienígena.' },
  { id: 671, title: 'Harry Potter and the Sorcerer\'s Stone', year: 2001, poster: '/dCtFvscYcXQKTNVRMoO6B2Pt3NJ.jpg', rating: '7.6', genres: ['Aventura', 'Fantasia'], runtime: 152, overview: 'Harry Potter descobre que é um bruxo e começa sua primeira aventura em Hogwarts.' },
  { id: 78, title: 'Blade Runner', year: 1982, poster: '/gajva2L0rPYkEWj7b5W7kuT4X1.jpg', rating: '8.1', genres: ['Ficção científica', 'Suspense'], runtime: 117, overview: 'Um caçador de androides é enviado para perseguir replicantes fugitivos em uma Los Angeles futurista.' },
  { id: 807, title: 'Se7en', year: 1995, poster: '/69Sns8WoET6CfaYlIkHbla4l7nC.jpg', rating: '8.6', genres: ['Crime', 'Mistério', 'Suspense'], runtime: 127, overview: 'Dois detetives perseguem um serial killer que usa os sete pecados capitais como inspiração.' },
  { id: 120, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, poster: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg', rating: '8.8', genres: ['Aventura', 'Fantasia'], runtime: 178, overview: 'Frodo e seus amigos partem para destruir um anel maligno capaz de dominar o mundo.' },
  { id: 240, title: 'The Godfather: Part II', year: 1974, poster: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg', rating: '9.0', genres: ['Crime', 'Drama'], runtime: 200, overview: 'A continuação da saga da família Corleone, mostrando Michael Corleone fortalecendo sua posição.' },
  { id: 272, title: 'Batman Begins', year: 2005, poster: '/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg', rating: '8.2', genres: ['Ação', 'Crime'], runtime: 140, overview: 'A origem de Batman enquanto ele aprende a enfrentar o medo e proteger Gotham.' },
  { id: 389, title: '12 Angry Men', year: 1957, poster: '/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg', rating: '9.0', genres: ['Drama'], runtime: 96, overview: 'Doze jurados debatem um caso de homicídio que ameaça condenar um jovem inocente.' },
  { id: 27259, title: 'Terminator 2: Judgment Day', year: 1991, poster: '/a7CDEyAIYb8e8hJyh5VnUWEf6Et.jpg', rating: '8.5', genres: ['Ação', 'Ficção científica'], runtime: 137, overview: 'Um exterminador protege um jovem que será o líder da resistência no futuro.' },
  { id: 244786, title: 'Whiplash', year: 2014, poster: '/6k2l9gWf7gF2bYLxIH6p4k1LxL4.jpg', rating: '8.5', genres: ['Drama', 'Música'], runtime: 106, overview: 'Um baterista ambicioso enfrenta um professor exigente para se tornar um músico melhor.' },
  { id: 1124, title: 'The Prestige', year: 2006, poster: '/5MXyQfz8xUP3dIFPTubhTsbFy.jpg', rating: '8.5', genres: ['Drama', 'Mistério', 'Ficção científica'], runtime: 130, overview: 'Dois mágicos rivais fazem de tudo para criar o melhor truque de todos os tempos.' }
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
