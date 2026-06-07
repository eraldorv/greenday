// Pegando os elementos das telas
const telaLogin = document.getElementById('tela-login');
const telaCadastro = document.getElementById('tela-cadastro');

// Eventos para alternar entre as telas
document.getElementById('ir-para-cadastro').addEventListener('click', (e) => {
    e.preventDefault();
    telaLogin.classList.add('hidden');
    telaCadastro.classList.remove('hidden');
    limparAlertas();
});

document.getElementById('ir-para-login').addEventListener('click', (e) => {
    e.preventDefault();
    telaCadastro.classList.add('hidden');
    telaLogin.classList.remove('hidden');
    limparAlertas();
});

function limparAlertas() {
    document.getElementById('erro-login').style.display = 'none';
    document.getElementById('erro-cadastro').style.display = 'none';
    document.getElementById('sucesso-cadastro').style.display = 'none';
}

// ==========================================
// LÓGICA DO CADASTRO
// ==========================================
document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('cad-nome').value.trim();
    const dataNasc = document.getElementById('cad-data').value;
    const email = document.getElementById('cad-email').value.trim();
    const senha = document.getElementById('cad-senha').value;
    
    const erroBox = document.getElementById('erro-cadastro');
    const sucessoBox = document.getElementById('sucesso-cadastro');
    
    erroBox.style.display = 'none';
    sucessoBox.style.display = 'none';

    // 1. Validar se todos os campos foram preenchidos
    if (!nome || !dataNasc || !email || !senha) {
        erroBox.textContent = "Por favor, preencha todos os campos.";
        erroBox.style.display = 'block';
        return;
    }

    // 2. Validar o arroba (@) no e-mail
    if (!email.includes('@')) {
        erroBox.textContent = "E-mail inválido. Certifique-se de usar o '@'.";
        erroBox.style.display = 'block';
        return;
    }

    // 3. Validar se a senha tem pelo menos 6 dígitos
    if (senha.length < 6) {
        erroBox.textContent = "A senha precisa ter no mínimo 6 dígitos.";
        erroBox.style.display = 'block';
        return;
    }

    // 4. Validar se a senha possui letras E números ao mesmo tempo
    const temLetra = /[a-zA-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    if (!temLetra || !temNumero) {
        erroBox.textContent = "A senha é fraca! Ela deve conter letras e números combinados.";
        erroBox.style.display = 'block';
        return;
    }

    // Buscar "banco de dados" temporário do computador
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // 5. Validar se o e-mail já está cadastrado
    const emailExiste = usuarios.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (emailExiste) {
        erroBox.textContent = "Este e-mail já está cadastrado no sistema!";
        erroBox.style.display = 'block';
        return;
    }

    // Se passar por todas as regras, salva o usuário
    usuarios.push({ nome, dataNasc, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    sucessoBox.textContent = "Cadastro realizado com sucesso! Voltando para o login...";
    sucessoBox.style.display = 'block';
    this.reset();

    // Redireciona de volta para a página de login após 2.5 segundos
    setTimeout(() => {
        telaCadastro.classList.add('hidden');
        telaLogin.classList.remove('hidden');
        limparAlertas();
    }, 2500);
});

// ==========================================
// LÓGICA DO LOGIN
// ==========================================
document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('login-senha').value;
    const erroBox = document.getElementById('erro-login');
    
    erroBox.style.display = 'none';

    // Validar arroba (@) no login
    if (!email.includes('@')) {
        erroBox.textContent = "Formato de e-mail incorreto. Falta o '@'.";
        erroBox.style.display = 'block';
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Procura o usuário cadastrado com esse e-mail e senha
    const usuarioEncontrado = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha);

    if (usuarioEncontrado) {
        // RECONHECEU! Redireciona para a nova página do sistema
        window.location.href = 'telas/home.html';
    } else {
        // Se errar, mostra o erro na tela
        erroBox.textContent = "E-mail ou senha incorretos.";
        erroBox.style.display = 'block';
    }
});