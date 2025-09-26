# 🇧🇷 CasaGo - Plataforma de Aluguel por Temporada

CasaGo é uma plataforma brasileira para aluguel de casas e apartamentos por temporada, inspirada no Airbnb mas com foco no mercado brasileiro.

## ✨ Funcionalidades

### 🔍 **Busca Inteligente**
- **Autocomplete de 152 cidades brasileiras**
- **Validação rigorosa de datas** (check-out após check-in, sem datas passadas)
- **Resumo automático** quando datas são selecionadas
- **Filtros dinâmicos** por localização

### 🏠 **Propriedades**
- **Grid responsivo** de propriedades
- **Sistema de favoritos** persistente
- **Imagens otimizadas** com lazy loading
- **Cards interativos** com hover effects

### 🎨 **Visual Brasileiro**
- **Cores da bandeira do Brasil** aplicadas consistentemente
- **Verde brasileiro** (#009639) para elementos primários
- **Azul brasileiro** (#002776) para links e destaques
- **Amarelo brasileiro** (#FFDF00) para avaliações

### 📱 **Responsividade**
- **Design mobile-first**
- **Layout adaptável** para todas as telas
- **Touch-friendly** em dispositivos móveis
- **Funciona perfeitamente** em telas < 400px

### 🔧 **Correções QA Implementadas**
- ✅ Autocomplete de cidades brasileiras funcionando
- ✅ Resumo de datas aparece automaticamente
- ✅ Validações de data rigorosas
- ✅ Botões com feedback visual
- ✅ Sistema de notificações toast
- ✅ Acessibilidade completa (ARIA labels)

## 🚀 Como Usar

### 1. **Download**
Baixe os arquivos:
- `index.html`
- `style.css` 
- `app.js`
- `README.md`

### 2. **Hospedagem GitHub Pages**

1. Crie um repositório no GitHub chamado `casago`
2. Faça upload de todos os arquivos
3. Vá em Settings → Pages
4. Selecione "Deploy from a branch" → `main` → `/root`
5. Salve e aguarde alguns minutos

Seu site ficará em: `https://seu-usuario.github.io/casago`

### 3. **Hospedagem Local**

Para testar localmente:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .

# Usando PHP  
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 🏗️ Estrutura do Projeto

```
casago/
├── index.html          # Página principal
├── style.css           # Estilos com cores brasileiras
├── app.js             # JavaScript com todas as correções
└── README.md          # Este arquivo
```

## 🧪 Como Testar

### **Autocomplete de Cidades:**
1. Digite "São" no campo "Para onde?"
2. Veja lista de cidades brasileiras aparecer
3. Clique em uma cidade para selecionar

### **Validação de Datas:**
1. Selecione uma data de check-in
2. Selecione uma data de check-out
3. Veja resumo aparecer automaticamente
4. Teste datas inválidas para ver mensagens de erro

### **Sistema de Favoritos:**
1. Clique no coração das propriedades
2. Veja mudança visual instantânea
3. Recarregue a página - favoritos são mantidos

### **Responsividade:**
1. Redimensione a janela do navegador
2. Teste em diferentes tamanhos de tela
3. Verifique funcionamento em mobile

## 🎨 Personalização

### **Cores Principais:**
```css
:root {
  --brasil-verde: #009639;   /* Verde da bandeira */
  --brasil-azul: #002776;    /* Azul da bandeira */
  --brasil-amarelo: #FFDF00; /* Amarelo da bandeira */
  --brasil-laranja: #FF8C00; /* Laranja complementar */
}
```

### **Adicionar Mais Cidades:**
Edite o array `cities` em `app.js`:
```javascript
cities: [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Sua Cidade - UF",  // Adicione aqui
  // ...
]
```

### **Adicionar Mais Propriedades:**
Edite o array `properties` em `app.js`:
```javascript
properties: [
  {
    id: 4,  // ID único
    title: "Sua Propriedade",
    location: "Sua Cidade - UF", 
    price: 250,
    // ... outros campos
  }
]
```

## 🔧 Recursos Técnicos

### **Tecnologias:**
- **HTML5** semântico
- **CSS3** com variáveis customizadas
- **JavaScript ES6+** vanilla
- **Font Awesome** para ícones
- **Google Fonts** (Inter)

### **Performance:**
- **Lazy loading** de imagens
- **Debounced search** (200ms)
- **CSS otimizado** com variáveis
- **JavaScript minimalista** sem frameworks

### **SEO & Acessibilidade:**
- **Meta tags** completas
- **ARIA labels** em todos os elementos interativos
- **Semântica HTML** correta
- **Contraste adequado** (WCAG AA)
- **Navegação por teclado** funcional

## 🐛 Solução de Problemas

### **Autocomplete não funciona:**
- Verifique se não há erros no console do navegador
- Confirme que o arquivo `app.js` foi carregado corretamente

### **Datas não validam:**
- Verifique se os IDs dos inputs estão corretos: `checkin-input` e `checkout-input`

### **Layout quebrado em mobile:**
- Confirme que a meta tag viewport está presente no HTML
- Teste em diferentes navegadores

### **Favoritos não persistem:**
- Verifique se localStorage está habilitado no navegador
- Teste em modo incógnito pode não funcionar

## 🤝 Contribuição

Para melhorar o CasaGo:

1. **Fork** o repositório
2. **Clone** localmente
3. **Crie** uma branch para sua feature
4. **Commit** suas mudanças
5. **Push** para sua branch
6. **Abra** um Pull Request

## 📋 Próximas Funcionalidades

- [ ] Modal de detalhes da propriedade
- [ ] Sistema completo de reservas
- [ ] Integração de pagamento (PIX/Cartão)
- [ ] Dashboard do proprietário
- [ ] Sistema de avaliações
- [ ] Chat entre host e hóspede
- [ ] Calendário de disponibilidade
- [ ] Upload de fotos
- [ ] Integração com APIs de mapas

## 📞 Suporte

Se encontrar problemas:

1. Verifique este README
2. Consulte o console do navegador para erros
3. Teste em diferentes navegadores
4. Valide se todos os arquivos foram carregados

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

---

**Feito com ❤️ no Brasil 🇧🇷**

*CasaGo - Conectando pessoas aos melhores lugares do Brasil*