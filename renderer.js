const movieCatalog = [
  { id: 550, title: 'Fight Club', year: 1999, poster: '/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg', rating: '8.8', genres: ['Drama'], runtime: 139, overview: 'Um homem insatisfeito com sua vida se envolve em um clube secreto de luta que muda sua percepção do mundo.' },
  { id: 278, title: 'The Shawshank Redemption', year: 1994, poster: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', rating: '9.3', genres: ['Drama', 'Crime'], runtime: 142, overview: 'A história de um homem condenado à prisão perpétua que encontra esperança e amizade dentro de Shawshank.' },
  { id: 238, title: 'The Godfather', year: 1972, poster: '/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg', rating: '9.2', genres: ['Crime', 'Drama'], runtime: 175, overview: 'A saga da família Corleone e o conflito de honra, poder e lealdade na máfia americana.' },
  { id: 680, title: 'Pulp Fiction', year: 1994, poster: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg', rating: '8.9', genres: ['Crime', 'Drama'], runtime: 154, overview: 'Várias histórias entrelaçadas de criminosos, boxeadores e gangsters em Los Angeles.' },
  { id: 27205, title: 'Inception', year: 2010, poster: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', rating: '8.8', genres: ['Action', 'Science Fiction'], runtime: 148, overview: 'Um ladrão entra em sonhos para roubar segredos e recebe a missão de implantar uma ideia na mente de alguém.' },
  { id: 155, title: 'The Dark Knight', year: 2008, poster: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: '9.0', genres: ['Action', 'Crime'], runtime: 152, overview: 'Batman enfrenta o caos de Gotham enquanto o Coringa ameaça destruir a cidade.' },
  { id: 13, title: 'Forrest Gump', year: 1994, poster: '/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg', rating: '8.8', genres: ['Drama', 'Romance'], runtime: 142, overview: 'A vida incrível de Forrest Gump, um homem gentil que testemunha momentos históricos sem perceber seu impacto.' },
  { id: 157336, title: 'Interstellar', year: 2014, poster: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', rating: '8.6', genres: ['Adventure', 'Drama', 'Science Fiction'], runtime: 169, overview: 'Um grupo de exploradores viaja por um buraco de minhoca para encontrar um novo lar para a humanidade.' },
  { id: 603, title: 'The Matrix', year: 1999, poster: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', rating: '8.7', genres: ['Action', 'Science Fiction'], runtime: 136, overview: 'Um hacker descobre que o mundo é uma simulação e se junta à resistência para libertar a humanidade.' },
  { id: 11, title: 'Star Wars: A New Hope', year: 1977, poster: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', rating: '8.6', genres: ['Action', 'Adventure', 'Fantasy'], runtime: 121, overview: 'Luke Skywalker se junta à Princesa Leia e outros rebeldes para destruir a Estrela da Morte.' },
  { id: 122, title: 'Jurassic Park', year: 1993, poster: '/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg', rating: '8.1', genres: ['Adventure', 'Science Fiction'], runtime: 127, overview: 'Um parque temático com dinossauros geneticamente criados se torna uma luta pela sobrevivência.' },
  { id: 497, title: 'The Green Mile', year: 1999, poster: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg', rating: '8.6', genres: ['Drama', 'Fantasy'], runtime: 189, overview: 'O guarda de uma prisão descobre que um prisioneiro condenado possui poderes milagrosos.' },
  { id: 24428, title: 'The Avengers', year: 2012, poster: '/RYMX2wcKCBArLQsfhcrQK4w8eT.jpg', rating: '8.0', genres: ['Action', 'Science Fiction'], runtime: 143, overview: 'Heróis como Homem de Ferro, Capitão América e Thor se unem para salvar a Terra de uma invasão alienígena.' },
  { id: 671, title: 'Harry Potter and the Sorcerer\'s Stone', year: 2001, poster: '/dCtFvscYcXQKTNVRMoO6B2Pt3NJ.jpg', rating: '7.6', genres: ['Adventure', 'Fantasy'], runtime: 152, overview: 'Harry Potter descobre que é um bruxo e começa sua primeira aventura em Hogwarts.' },
  { id: 78, title: 'Blade Runner', year: 1982, poster: '/gajva2L0rPYkEWj7b5W7kuT4X1.jpg', rating: '8.1', genres: ['Science Fiction', 'Thriller'], runtime: 117, overview: 'Um caçador de androides é enviado para perseguir replicantes fugitivos em uma Los Angeles futurista.' },
  { id: 807, title: 'Se7en', year: 1995, poster: '/69Sns8WoET6CfaYlIkHbla4l7nC.jpg', rating: '8.6', genres: ['Crime', 'Mystery', 'Thriller'], runtime: 127, overview: 'Dois detetives perseguem um serial killer que usa os sete pecados capitais como inspiração.' },
  { id: 120, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, poster: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg', rating: '8.8', genres: ['Adventure', 'Fantasy'], runtime: 178, overview: 'Frodo e seus amigos partem para destruir um anel maligno capaz de dominar o mundo.' },
  { id: 240, title: 'The Godfather: Part II', year: 1974, poster: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg', rating: '9.0', genres: ['Crime', 'Drama'], runtime: 200, overview: 'A continuação da saga da família Corleone, mostrando Michael Corleone fortalecendo sua posição.' },
  { id: 272, title: 'Batman Begins', year: 2005, poster: '/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg', rating: '8.2', genres: ['Action', 'Crime'], runtime: 140, overview: 'A origem de Batman enquanto ele aprende a enfrentar o medo e proteger Gotham.' },
  { id: 389, title: '12 Angry Men', year: 1957, poster: '/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg', rating: '9.0', genres: ['Drama'], runtime: 96, overview: 'Doze jurados debatem um caso de homicídio que ameaça condenar um jovem inocente.' },
  { id: 27259, title: 'Terminator 2: Judgment Day', year: 1991, poster: '/a7CDEyAIYb8e8hJyh5VnUWEf6Et.jpg', rating: '8.5', genres: ['Action', 'Science Fiction'], runtime: 137, overview: 'Um exterminador protege um jovem que será o líder da resistência no futuro.' },
  { id: 244786, title: 'Whiplash', year: 2014, poster: '/6k2l9gWf7gF2bYLxIH6p4k1LxL4.jpg', rating: '8.5', genres: ['Drama', 'Music'], runtime: 106, overview: 'Um baterista ambicioso enfrenta um professor exigente para se tornar um músico melhor.' },
  { id: 1124, title: 'The Prestige', year: 2006, poster: '/5MXyQfz8xUP3dIFPTubhTsbFy.jpg', rating: '8.5', genres: ['Drama', 'Mystery', 'Science Fiction'], runtime: 130, overview: 'Dois mágicos rivais fazem de tudo para criar o melhor truque de todos os tempos.' }
]

function buildEmbedUrl(movieId) {
  return `https://myembed.biz/filme/${movieId}`
}

function getMovieById(id) {
  return movieCatalog.find(movie => movie.id === Number(id))
}

function getQueryParam(name) {
  const search = window.location.search.substring(1)
  const params = new URLSearchParams(search)
  return params.get(name)
}

function showStatus(message, isError = false) {
  const status = document.getElementById('movie-status')
  if (!status) return
  status.textContent = message
  status.style.color = isError ? '#ff8a8a' : '#a8ffab'
}

function createMovieCard(movie, destination) {
  const card = document.createElement('a')
  const isRecommended = destination && destination.includes('player.html')
  card.className = `card-catalogo movie-card${isRecommended ? ' recommended-card' : ''}`
  card.href = destination ? `${destination}?id=${movie.id}` : '#'
  card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w300${movie.poster}" alt="${movie.title}">
    <div class="movie-card-content">
      <h3>${movie.title}</h3>
      <p class="nota-filme">${movie.year} • ${movie.rating}</p>
    </div>
  `
  return card
}

function renderRecommended() {
  const container = document.getElementById('recommended-container')
  if (!container) return
  container.innerHTML = ''
  movieCatalog.slice(0, 8).forEach(movie => container.appendChild(createMovieCard(movie, 'player.html')))
}

function initRecommendedCarousel() {
  const carousel = document.getElementById('recommended-container')
  const prev = document.getElementById('btn-ant')
  const next = document.getElementById('btn-prox')
  if (!carousel || !prev || !next) return

  const scrollAmount = 320
  prev.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  })
  next.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  })
}

function renderMovieCatalog() {
  const container = document.getElementById('movies-container')
  if (!container) return
  container.innerHTML = ''
  movieCatalog.forEach(movie => container.appendChild(createMovieCard(movie, 'player.html')))
}

function renderMoviePlayer() {
  const playerTitle = document.getElementById('player-title')
  const playerGenres = document.getElementById('player-genres')
  const playerOverview = document.getElementById('player-overview')
  const playerRating = document.getElementById('player-rating')
  const playerRuntime = document.getElementById('player-runtime')
  const playerImage = document.getElementById('player-image')
  const playerFrame = document.getElementById('movie-player')
  const status = document.getElementById('movie-status')

  if (!playerFrame || !playerTitle) return

  const movieId = getQueryParam('id')
  const movie = getMovieById(movieId)

  if (!movie) {
    showStatus('Filme não encontrado. Volte ao catálogo.', true)
    return
  }

  playerTitle.textContent = `${movie.title} (${movie.year})`
  playerGenres.textContent = movie.genres.join(' • ')
  playerOverview.textContent = movie.overview
  playerRating.textContent = `Avaliação: ${movie.rating}`
  playerRuntime.textContent = `Duração: ${movie.runtime} min`
  playerImage.src = `https://image.tmdb.org/t/p/w500${movie.poster}`
  playerImage.alt = movie.title
  playerFrame.src = buildEmbedUrl(movie.id)
  if (status) showStatus(`Assistindo: ${movie.title}`, false)
}

function setupNavigation() {
  const links = document.querySelectorAll('header ul li a')
  links.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Navegando para: ${link.getAttribute('href')}`)
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
  setupNavigation()
  renderRecommended()
  initRecommendedCarousel()
  renderMovieCatalog()
  renderMoviePlayer()
  showStatus('Escolha um filme para assistir. O player usa EmbedMovies e IDs TMDb.')
})

