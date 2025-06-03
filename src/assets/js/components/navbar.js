// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Logo da Empresa -->
            <a class="navbar-brand" href="../../index.html">
                <img src="src/assets/img/logo.png" alt="Logotipo Ajuda Cidadão" width="90" height="auto">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#SobreNos">Quem Somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./src/pages/planos.html">Planos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Beneficios">Beneficios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./src/pages/clinicas.html">Clinicas Credenciadas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./src/pages/contato.html">Contato</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-success text-white ms-2" href="https://wa.me/5511981050511"
                            target="_blank">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();