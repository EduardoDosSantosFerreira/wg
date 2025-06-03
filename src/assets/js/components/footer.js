// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <!-- Footer -->
    <footer id="Footer" class="bg-dark text-light py-5">
        <div class="container">
            <div class="row">
                <!-- Seção: Sobre Nós -->
                <div class="col-md-4">
                    <h5>Sobre Nós</h5>
                    <p class="small">O Grupo WG Convênios foi fundado em Itaquaquecetuba/SP na transição dos anos 1980,
                        com a missão de reduzir as desigualdades sociais. A empresa transformou esse apoio em um serviço
                        digno, antecipando custos funerários e garantindo respeito, acolhimento e independência aos seus
                        clientes — marca que mantém até hoje.</p>
                </div>
                <!-- Seção: Links Rápidos -->
                <div class="col-md-4">
                    <h5>Links Rápidos</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light">Início</a></li>
                        <li><a href="#servicos" class="text-light">Serviços</a></li>
                        <li><a href="#sobre" class="text-light">Sobre Nós</a></li>
                        <li><a href="pages/politica.html" class="text-light">Política de Privacidade</a></li>
                    </ul>
                </div>
                <!-- Seção: Contato -->
                <div class="col-md-4">
                    <h5>Contato</h5>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-envelope" aria-label="Ícone de Email"></i>wgconvenio@uol.com.br</li>
                        <li><i class="fas fa-phone" aria-label="Ícone de Telefone"></i>+55 11 98105-0511</li>
                        <li><i class="fas fa-map-marker-alt" aria-label="Ícone de Localização"></i> R. Uberlândia, 220 -
                            Vila Virginia, Itaquaquecetuba - SP CEP 08573-020</li>
                    </ul>
                </div>
            </div>
            <!-- Linha separadora -->
            <hr class="my-4">
            <div class="row">
                <!-- Redes Sociais -->
                <div class="col-md-6 d-flex align-items-center">
                    <p class="mb-0">&copy; 2025 WG - Grupo de Convênios Funerários. Todos os direitos reservados.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="https://www.facebook.com/wgconvenio//" class="text-light me-3" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/wgconvenio/" class="text-light me-3" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();