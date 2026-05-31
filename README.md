# Conquista Imóveis — Landing Page de Corretor de Imóveis (Primeiro Imóvel)

Uma landing page moderna, calorosa e altamente didática desenvolvida para o corretor **Thiago Silva (Conquista Imóveis)**, especialista em assessorar famílias e jovens trabalhadores a comprarem seu primeiro imóvel com segurança, utilizando FGTS e o programa Minha Casa Minha Vida.

Esta aplicação foi desenvolvida sob rígidos critérios de acessibilidade (paleta clara com excelente contraste) e usabilidade móvel.

---

## 🚀 Tecnologias Utilizadas

- **Core & Roteamento:** React, React Router
- **Estilização:** CSS Customizado integrado ao Tailwind CSS (Design System adaptado em `src/index.css`)
- **Gerenciamento de Estado:** React Query & Hooks
- **Ícones:** Lucide React & SVGs de alta fidelidade
- **Deploy:** Otimizado para Vercel via Nitro Engine

---

## 💎 Soluções de UX & Funcionalidades Premium

1. **Simulador de Financiamento & Visitas (`BookingPage`):**
   - Um formulário passo a passo customizado para quem quer simular o financiamento da Caixa Aqui. Recolhe informações cruciais (faixa de renda, saldo do FGTS, tipo de imóvel desejado) de maneira acessível e gera uma requisição de simulação rápida.

2. **Seção de Assessoria Passo a Passo:**
   - Transforma a complexidade burocrática da compra da casa própria em etapas compreensíveis e diretas.

3. **Parceiros de Confiança (Team):**
   - Transmite robustez exibindo as instituições que validam o processo, como a Caixa Econômica Federal e engenheiros parceiros credenciados.

4. **Botão Ativo de WhatsApp:**
   - Sincronizado para enviar cotações imediatas das simulações iniciadas no site diretamente ao WhatsApp do corretor.

---

## ♿ Acessibilidade & SEO

- **Contraste Apropriado:** Uso de cores claras no fundo (`#fafaf9`) e grafite de alto contraste no texto (`#1c1917`), em estrita conformidade com a WCAG AA para legibilidade ideal.
- **Favicon & Meta Tags:** Favicon personalizado e tags Open Graph para compartilhamento otimizado.

---

## 📦 Estrutura de Pastas

```
/
├── public/                 # Favicon.svg e ativos estáticos puros
├── src/
│   ├── assets/             # Imagens e ícones personalizados
│   ├── components/         # Navbar, Hero, About e seções mutadas
│   ├── hooks/              # Hooks customizados
│   ├── pages/              # Roteamento de páginas (Index, Booking, Admin)
│   └── index.css           # Variáveis do Design System e base classes
```

---

## ⚡ Comandos para Desenvolvimento

### Iniciar servidor de desenvolvimento:
```bash
bun dev
```

### Compilar para produção:
```bash
bun run build
```
