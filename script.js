const telaLogin = document.getElementById('tela-login');
const telaCadastro = document.getElementById('tela-cadastro');

function esconderAlertas() {
  document.getElementById('erro-login').style.display = 'none';
  document.getElementById('erro-cadastro').style.display = 'none';
  document.getElementById('sucesso-cadastro').style.display = 'none';
}

function mostrarAlerta(elemento, mensagem) {
  elemento.textContent = mensagem;
  elemento.style.display = 'block';
}

document.getElementById('ir-para-cadastro').addEventListener('click', (event) => {
  event.preventDefault();
  telaLogin.classList.add('hidden');
  telaCadastro.classList.remove('hidden');
  esconderAlertas();
});

document.getElementById('ir-para-login').addEventListener('click', (event) => {
  event.preventDefault();
  telaCadastro.classList.add('hidden');
  telaLogin.classList.remove('hidden');
  esconderAlertas();
});

document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('cad-nome').value.trim();
  const dataNasc = document.getElementById('cad-data').value;
  const email = document.getElementById('cad-email').value.trim();
  const senha = document.getElementById('cad-senha').value;
  const erroBox = document.getElementById('erro-cadastro');
  const sucessoBox = document.getElementById('sucesso-cadastro');

  erroBox.style.display = 'none';
  sucessoBox.style.display = 'none';

  if (!nome || !dataNasc || !email || !senha) {
    mostrarAlerta(erroBox, 'Por favor, preencha todos os campos.');
    return;
  }

  if (!email.includes('@')) {
    mostrarAlerta(erroBox, "E-mail inválido. Certifique-se de usar o '@'.");
    return;
  }

  if (senha.length < 6) {
    mostrarAlerta(erroBox, 'A senha precisa ter no mínimo 6 dígitos.');
    return;
  }

  const temLetra = /[a-zA-Z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);

  if (!temLetra || !temNumero) {
    mostrarAlerta(erroBox, 'A senha deve conter letras e números combinados.');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const emailExiste = usuarios.some(usuario => usuario.email.toLowerCase() === email.toLowerCase());

  if (emailExiste) {
    mostrarAlerta(erroBox, 'Este e-mail já está cadastrado no sistema.');
    return;
  }

  usuarios.push({ nome, dataNasc, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  mostrarAlerta(sucessoBox, 'Cadastro realizado com sucesso! Voltando para o login...');
  this.reset();

  setTimeout(() => {
    telaCadastro.classList.add('hidden');
    telaLogin.classList.remove('hidden');
    esconderAlertas();
  }, 2500);
});

document.getElementById('form-login').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const senha = document.getElementById('login-senha').value;
  const erroBox = document.getElementById('erro-login');

  erroBox.style.display = 'none';

  if (!email.includes('@')) {
    mostrarAlerta(erroBox, "Formato de e-mail incorreto. Falta o '@'.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioEncontrado = usuarios.find(usuario => (
    usuario.email.toLowerCase() === email.toLowerCase() && usuario.senha === senha
  ));

  if (usuarioEncontrado) {
    window.location.href = 'telas/home.html';
    return;
  }

  mostrarAlerta(erroBox, 'E-mail ou senha incorretos.');
});
