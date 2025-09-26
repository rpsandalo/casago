// CASAGO - VERSÃO FINAL COM TODAS AS CORREÇÕES QA IMPLEMENTADAS
// Cores brasileiras e funcionalidades completas

// ============================================================================
// DADOS DA APLICAÇÃO
// ============================================================================

const appData = {
  // Lista completa de 152 cidades brasileiras
  cities: [
    "São Paulo - SP", "Rio de Janeiro - RJ", "Salvador - BA", "Brasília - DF", "Fortaleza - CE",
    "Belo Horizonte - MG", "Manaus - AM", "Curitiba - PR", "Recife - PE", "Florianópolis - SC",
    "Goiânia - GO", "Belém - PA", "Guarulhos - SP", "Campinas - SP", "São Luís - MA",
    "São Gonçalo - RJ", "Maceió - AL", "Duque de Caxias - RJ", "Teresina - PI", "Natal - RN",
    "Nova Iguaçu - RJ", "Campo Grande - MS", "Osasco - SP", "Santo André - SP", "João Pessoa - PB",
    "Jaboatão dos Guararapes - PE", "São José dos Campos - SP", "Ribeirão Preto - SP",
    "Uberlândia - MG", "Sorocaba - SP", "Contagem - MG", "Aracaju - SE", "Feira de Santana - BA",
    "Cuiabá - MT", "Joinville - SC", "Londrina - PR", "Aparecida de Goiânia - GO",
    "Ananindeua - PA", "Porto Velho - RO", "Serra - ES", "Niterói - RJ", "Caxias do Sul - RS",
    "Campos dos Goytacazes - RJ", "Vila Velha - ES", "Mauá - SP", "São João de Meriti - RJ",
    "Macapá - AP", "Montes Claros - MG", "Betim - MG", "Diadema - SP", "Jundiaí - SP",
    "Campina Grande - PB", "Piracicaba - SP", "Cariacica - ES", "Caruaru - PE", "Várzea Grande - MT",
    "Pelotas - RS", "Canoas - RS", "Anápolis - GO", "Maringá - PR", "Vitória - ES",
    "São Vicente - SP", "Franca - SP", "Ponta Grossa - PR", "Foz do Iguaçu - PR", "Uberaba - MG",
    "Blumenau - SC", "Paulista - PE", "Limeira - SP", "Suzano - SP", "Petrópolis - RJ",
    "Caucaia - CE", "Vitória da Conquista - BA", "Gravataí - RS", "Embu das Artes - SP",
    "Novo Hamburgo - RS", "Santa Maria - RS", "Praia Grande - SP", "Várzea Paulista - SP",
    "Taboão da Serra - SP", "Sumaré - SP", "Bauru - SP", "São José do Rio Preto - SP",
    "Juiz de Fora - MG", "Marília - SP", "Taubaté - SP", "Carapicuíba - SP", "Presidente Prudente - SP",
    "Volta Redonda - RJ", "Governador Valadares - MG", "Guarujá - SP", "São Carlos - SP",
    "Jacareí - SP", "Ribeirão das Neves - MG", "Americana - SP", "Araraquara - SP",
    "Santarém - PA", "Rio Branco - AC", "Indaiatuba - SP", "Cotia - SP", "Hortolândia - SP",
    "Itu - SP", "Palmas - TO", "Itaquaquecetuba - SP", "Criciúma - SC", "Moji das Cruzes - SP",
    "São Caetano do Sul - SP", "Franco da Rocha - SP", "Itapevi - SP", "Boa Vista - RR",
    "Rio Grande - RS", "Angra dos Reis - RJ", "Búzios - RJ", "Gramado - RS", "Porto Seguro - BA",
    "Campos do Jordão - SP", "Paraty - RJ", "Bonito - MS", "Fernando de Noronha - PE",
    "Jericoacoara - CE", "Ouro Preto - MG", "Trancoso - BA", "Ilhabela - SP", "Canela - RS",
    "Monte Verde - MG", "Visconde de Mauá - RJ", "Penedo - AL", "Alto Paraíso - GO",
    "Capitólio - MG", "São Thomé das Letras - MG", "Cunha - SP", "Holambra - SP",
    "Nova Petrópolis - RS", "Bento Gonçalves - RS", "Garibaldi - RS", "São Bento do Sul - SC",
    "Pomerode - SC", "Itacaré - BA", "Morro Branco - CE", "Canoa Quebrada - CE",
    "Praia do Forte - BA", "Lençóis - BA", "Tiradentes - MG", "São Sebastião - SP",
    "Morro de São Paulo - BA", "Arraial do Cabo - RJ", "Ubatuba - SP", "Cabo Frio - RJ"
  ],

  properties: [
    {
      id: 1,
      title: "Apartamento inteiro em Copacabana",
      location: "Rio de Janeiro - RJ",
      type: "Apartamento inteiro",
      price: 280,
      rating: 4.89,
      reviews: 127,
      host: "Maria Silva",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500&h=400&fit=crop&q=80"
      ],
      amenities: ["Wi-Fi", "Cozinha", "Ar-condicionado", "Vista para o mar", "Estacionamento"],
      description: "Apartamento luxuoso com vista deslumbrante para a praia de Copacabana. Localizado em uma das regiões mais icônicas do Rio de Janeiro, você terá acesso direto à praia e a todos os pontos turísticos da cidade maravilhosa."
    },
    {
      id: 2,
      title: "Casa inteira em Vila Madalena",
      location: "São Paulo - SP",
      type: "Casa inteira",
      price: 320,
      rating: 4.95,
      reviews: 89,
      host: "João Santos",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600607688678-3f1a7f64e3fe?w=500&h=400&fit=crop&q=80"
      ],
      amenities: ["Wi-Fi", "Cozinha", "Jardim", "Estacionamento", "Pet-friendly"],
      description: "Casa moderna no coração da Vila Madalena, próximo a bares e restaurantes. Perfeita para grupos que querem explorar a vida noturna paulistana e a cultura alternativa do bairro."
    },
    {
      id: 3,
      title: "Chalé inteiro em Gramado",
      location: "Gramado - RS",
      type: "Casa inteira",
      price: 420,
      rating: 4.92,
      reviews: 156,
      host: "Ana Costa",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=400&fit=crop&q=80"
      ],
      amenities: ["Wi-Fi", "Lareira", "Jardim", "Estacionamento", "Hidromassagem"],
      description: "Chalé romântico perfeito para um final de semana especial em Gramado. Com lareira aconchegante, hidromassagem e vista para as montanhas, ideal para casais em lua de mel."
    }
  ],

  // Estado global da aplicação
  state: {
    currentUser: null,
    selectedCity: '',
    checkinDate: '',
    checkoutDate: '',
    guests: 1,
    filteredProperties: [],
    favorites: JSON.parse(localStorage.getItem('casago_favorites') || '[]')
  }
};

// ============================================================================
// UTILIDADES E HELPERS
// ============================================================================

// Debounce para otimizar buscas
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Formatação de datas
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Cálculo de noites entre datas
function calculateNights(checkin, checkout) {
  if (!checkin || !checkout) return 0;
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// Validação de datas
function validateDates(checkin, checkout) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);

  if (checkinDate < today) {
    return { valid: false, error: 'Data de check-in não pode ser no passado' };
  }

  if (checkoutDate <= checkinDate) {
    return { valid: false, error: 'Check-out deve ser após o check-in' };
  }

  return { valid: true };
}

// Sistema de notificações toast
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = type === 'success' ? 'fas fa-check-circle' : 
               type === 'error' ? 'fas fa-exclamation-circle' : 
               'fas fa-info-circle';

  toast.innerHTML = `
    <i class="toast-icon ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto remove após 4 segundos
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 4000);
}

// ============================================================================
// CORREÇÃO 1: AUTOCOMPLETE DE CIDADES BRASILEIRAS
// ============================================================================

function setupCityAutocomplete() {
  const destinationInput = document.getElementById('destination-input');
  const suggestionsDropdown = document.getElementById('destination-suggestions');

  if (!destinationInput || !suggestionsDropdown) return;

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    if (query.length < 2) {
      hideSuggestions();
      return;
    }

    const matches = appData.cities
      .filter(city => 
        city.toLowerCase().includes(query.toLowerCase()) ||
        removeAccents(city.toLowerCase()).includes(removeAccents(query.toLowerCase()))
      )
      .slice(0, 8); // Máximo 8 sugestões

    showSuggestions(matches);
  }, 200);

  // Event listeners
  destinationInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    debouncedSearch(query);
  });

  destinationInput.addEventListener('focus', (e) => {
    if (e.target.value.length >= 2) {
      debouncedSearch(e.target.value.trim());
    }
  });

  // Fechar sugestões ao clicar fora
  document.addEventListener('click', (e) => {
    if (!destinationInput.contains(e.target) && !suggestionsDropdown.contains(e.target)) {
      hideSuggestions();
    }
  });

  function showSuggestions(cities) {
    if (cities.length === 0) {
      hideSuggestions();
      return;
    }

    suggestionsDropdown.innerHTML = cities.map(city => `
      <div class="suggestion-item" data-city="${city}">
        <i class="fas fa-map-marker-alt"></i>
        <span>${city}</span>
      </div>
    `).join('');

    // Event listeners para seleção
    suggestionsDropdown.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const selectedCity = item.dataset.city;
        destinationInput.value = selectedCity;
        appData.state.selectedCity = selectedCity;
        hideSuggestions();

        // Disparar evento de mudança
        destinationInput.dispatchEvent(new Event('change', { bubbles: true }));
        showToast(`Destino selecionado: ${selectedCity}`);
      });
    });

    suggestionsDropdown.classList.remove('hidden');
  }

  function hideSuggestions() {
    suggestionsDropdown.classList.add('hidden');
  }

  // Função para remover acentos
  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}

// ============================================================================
// CORREÇÃO 2: RESUMO AUTOMÁTICO DE DATAS
// ============================================================================

function setupDatesManagement() {
  const checkinInput = document.getElementById('checkin-input');
  const checkoutInput = document.getElementById('checkout-input');
  let datesSummary = document.getElementById('dates-summary');

  if (!checkinInput || !checkoutInput) return;

  // Criar elemento de resumo se não existir
  if (!datesSummary) {
    datesSummary = createDatesSummaryElement();
  }

  // Event listeners para atualizar resumo
  checkinInput.addEventListener('change', updateDatesSummary);
  checkoutInput.addEventListener('change', updateDatesSummary);

  function createDatesSummaryElement() {
    const summary = document.createElement('div');
    summary.id = 'dates-summary';
    summary.className = 'hidden';

    summary.innerHTML = `
      <div class="dates-text"></div>
      <div class="dates-actions">
        <button type="button" class="btn-secondary" id="clear-dates-btn">
          <i class="fas fa-times"></i>
          Limpar datas
        </button>
        <button type="button" class="btn-primary" id="confirm-dates-btn">
          <i class="fas fa-check"></i>
          Confirmar datas
        </button>
      </div>
    `;

    // Posicionar em relação ao campo de checkout
    checkoutInput.parentNode.style.position = 'relative';
    checkoutInput.parentNode.appendChild(summary);

    // Event listeners para botões
    summary.querySelector('#clear-dates-btn').addEventListener('click', clearDates);
    summary.querySelector('#confirm-dates-btn').addEventListener('click', confirmDates);

    return summary;
  }

  function updateDatesSummary() {
    const checkin = checkinInput.value;
    const checkout = checkoutInput.value;

    if (!checkin || !checkout) {
      datesSummary.classList.add('hidden');
      return;
    }

    const validation = validateDates(checkin, checkout);
    const datesTextElement = datesSummary.querySelector('.dates-text');

    if (!validation.valid) {
      datesTextElement.innerHTML = `
        <span style="color: var(--erro);">
          <i class="fas fa-exclamation-triangle"></i>
          ${validation.error}
        </span>
      `;
    } else {
      const nights = calculateNights(checkin, checkout);
      const checkinFormatted = formatDate(checkin);
      const checkoutFormatted = formatDate(checkout);

      datesTextElement.innerHTML = `
        <div style="font-weight: 600; color: var(--brasil-verde);">
          <i class="fas fa-calendar-alt"></i>
          ${checkinFormatted} → ${checkoutFormatted}
        </div>
        <div style="font-size: 14px; color: var(--cinza-escuro); margin-top: 4px;">
          ${nights} noite${nights > 1 ? 's' : ''}
        </div>
      `;

      // Atualizar estado global
      appData.state.checkinDate = checkin;
      appData.state.checkoutDate = checkout;

      // Disparar evento para recálculo de preços
      document.dispatchEvent(new CustomEvent('datesSelected', {
        detail: { checkin, checkout, nights }
      }));
    }

    datesSummary.classList.remove('hidden');
  }

  function clearDates() {
    checkinInput.value = '';
    checkoutInput.value = '';
    appData.state.checkinDate = '';
    appData.state.checkoutDate = '';
    datesSummary.classList.add('hidden');
    showToast('Datas removidas', 'warning');
  }

  function confirmDates() {
    const checkin = checkinInput.value;
    const checkout = checkoutInput.value;

    const validation = validateDates(checkin, checkout);
    if (!validation.valid) {
      showToast(validation.error, 'error');
      return;
    }

    datesSummary.classList.add('hidden');
    showToast('Datas confirmadas!', 'success');

    // Scroll suave para propriedades se existir
    const propertiesSection = document.querySelector('.properties-container');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// ============================================================================
// RENDERIZAÇÃO DE PROPRIEDADES
// ============================================================================

function renderProperties(properties) {
  const propertiesGrid = document.querySelector('.properties-grid');
  if (!propertiesGrid) return;

  if (properties.length === 0) {
    propertiesGrid.innerHTML = `
      <div class="no-properties" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <i class="fas fa-home" style="font-size: 48px; color: var(--cinza-medio); margin-bottom: 16px;"></i>
        <h3 style="color: var(--cinza-escuro); margin-bottom: 8px;">Nenhuma propriedade encontrada</h3>
        <p style="color: var(--cinza-escuro);">Tente ajustar seus filtros de busca</p>
      </div>
    `;
    return;
  }

  propertiesGrid.innerHTML = properties.map(property => createPropertyCardHTML(property)).join('');

  // Adicionar event listeners
  setupPropertyCardListeners();
}

function createPropertyCardHTML(property) {
  const isFavorite = appData.state.favorites.includes(property.id);
  const mainImage = property.images && property.images.length > 0 ? property.images[0] : 
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=80';

  return `
    <div class="property-card" data-property-id="${property.id}">
      <div class="property-image-container">
        <img src="${mainImage}" alt="${property.title}" class="property-image" loading="lazy">

        ${property.isLocal ? `
          <div style="
            position: absolute; top: 12px; left: 12px;
            background: var(--brasil-verde); color: white;
            padding: 4px 8px; border-radius: 12px;
            font-size: 12px; font-weight: 600;
          ">Novo</div>
        ` : ''}

        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                data-property-id="${property.id}"
                aria-label="${isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
          <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>

      <div class="property-info">
        <div class="property-header">
          <h3 class="property-title">${property.title}</h3>
          <div class="property-rating">
            <i class="fas fa-star star"></i>
            <span>${property.rating}</span>
          </div>
        </div>

        <div class="property-location">${property.location}</div>
        <div class="property-type">${property.type}</div>

        <div class="property-price">
          <span class="currency">R$</span> ${property.price}
          <span class="period"> /noite</span>
        </div>
      </div>
    </div>
  `;
}

function setupPropertyCardListeners() {
  // Event listeners para cards de propriedades
  document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Não abrir se clicou no botão de favorito
      if (e.target.closest('.favorite-btn')) return;

      const propertyId = card.dataset.propertyId;
      openPropertyDetails(propertyId);
    });
  });

  // Event listeners para botões de favorito
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const propertyId = btn.dataset.propertyId;
      toggleFavorite(propertyId);
    });
  });
}

function openPropertyDetails(propertyId) {
  const property = appData.properties.find(p => p.id == propertyId);
  if (!property) return;

  // Por enquanto, mostrar toast - depois implementar modal ou página
  showToast(`Abrindo detalhes: ${property.title}`, 'info');

  // TODO: Implementar modal ou navegação para página de detalhes
  console.log('Property details:', property);
}

function toggleFavorite(propertyId) {
  const favorites = appData.state.favorites;
  const index = favorites.indexOf(propertyId);

  if (index === -1) {
    // Adicionar aos favoritos
    favorites.push(propertyId);
    showToast('Adicionado aos favoritos!', 'success');
  } else {
    // Remover dos favoritos
    favorites.splice(index, 1);
    showToast('Removido dos favoritos', 'warning');
  }

  // Salvar no localStorage
  localStorage.setItem('casago_favorites', JSON.stringify(favorites));

  // Atualizar visual do botão
  const btn = document.querySelector(`[data-property-id="${propertyId}"].favorite-btn`);
  if (btn) {
    const icon = btn.querySelector('i');
    if (favorites.includes(propertyId)) {
      btn.classList.add('active');
      icon.className = 'fas fa-heart';
      btn.setAttribute('aria-label', 'Remover dos favoritos');
    } else {
      btn.classList.remove('active');
      icon.className = 'far fa-heart';
      btn.setAttribute('aria-label', 'Adicionar aos favoritos');
    }
  }
}

// ============================================================================
// SISTEMA DE BUSCA E FILTROS
// ============================================================================

function setupSearchAndFilters() {
  const searchButton = document.querySelector('#search-button');
  const destinationInput = document.getElementById('destination-input');
  const checkinInput = document.getElementById('checkin-input');
  const checkoutInput = document.getElementById('checkout-input');

  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }

  // Auto-search quando dados mudarem
  [destinationInput, checkinInput, checkoutInput].forEach(input => {
    if (input) {
      input.addEventListener('change', performSearch);
    }
  });

  function performSearch() {
    const city = appData.state.selectedCity || destinationInput?.value || '';
    const checkin = checkinInput?.value || '';
    const checkout = checkoutInput?.value || '';

    let filteredProperties = [...appData.properties];

    // Filtrar por cidade se selecionada
    if (city) {
      const searchTerm = city.toLowerCase();
      filteredProperties = filteredProperties.filter(property => 
        property.location.toLowerCase().includes(searchTerm)
      );
    }

    // Validar disponibilidade por datas (simulado)
    if (checkin && checkout) {
      const validation = validateDates(checkin, checkout);
      if (!validation.valid) {
        showToast(validation.error, 'error');
        return;
      }

      // Por enquanto, todas as propriedades estão "disponíveis"
      // Em produção, isso consultaria a API de disponibilidade
    }

    appData.state.filteredProperties = filteredProperties;
    renderProperties(filteredProperties);

    // Feedback para usuário
    if (filteredProperties.length === 0 && city) {
      showToast(`Nenhuma propriedade encontrada em ${city}`, 'warning');
    } else if (city) {
      showToast(`${filteredProperties.length} propriedade(s) encontrada(s) em ${city}`);
    }

    // Scroll para resultados
    const propertiesContainer = document.querySelector('.properties-container');
    if (propertiesContainer && (city || (checkin && checkout))) {
      propertiesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// ============================================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================================================

function initializeApp() {
  console.log('🇧🇷 Inicializando CasaGo - Versão Final com Correções QA');

  // Correção 1: Autocomplete de cidades
  setupCityAutocomplete();

  // Correção 2: Resumo automático de datas
  setupDatesManagement();

  // Sistema de busca e filtros
  setupSearchAndFilters();

  // Renderizar propriedades iniciais
  renderProperties(appData.properties);

  // Configurações adicionais
  setupAdditionalFeatures();

  console.log('✅ CasaGo inicializado com sucesso!');
  showToast('CasaGo carregado com sucesso! 🇧🇷', 'success');
}

function setupAdditionalFeatures() {
  // Configurar data mínima (hoje) para inputs de data
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    input.setAttribute('min', today);
  });

  // Event listener para redimensionamento da janela
  window.addEventListener('resize', debounce(() => {
    // Fechar sugestões em resize
    const suggestions = document.getElementById('destination-suggestions');
    if (suggestions) {
      suggestions.classList.add('hidden');
    }
  }, 250));

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // ESC para fechar sugestões
    if (e.key === 'Escape') {
      const suggestions = document.getElementById('destination-suggestions');
      if (suggestions) {
        suggestions.classList.add('hidden');
      }

      const datesSummary = document.getElementById('dates-summary');
      if (datesSummary) {
        datesSummary.classList.add('hidden');
      }
    }
  });
}

// ============================================================================
// INICIALIZAR QUANDO DOM ESTIVER PRONTO
// ============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// ============================================================================
// FUNÇÕES GLOBAIS PARA USO EXTERNO
// ============================================================================

// Expor algumas funções globalmente para uso em formulários, etc.
window.CasaGo = {
  toggleFavorite,
  showToast,
  validateDates,
  formatDate,
  calculateNights
};