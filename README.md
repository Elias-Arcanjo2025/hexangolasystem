# HexaNgola Systems — Website

> Tecnologia que conecta, soluções que transformam.

## 📁 Estrutura do Projeto

```
hexa/
├── index.html                      # Página principal
├── README.md                       # Documentação do projeto
├── favicon.svg                     # Ícone do site (hexágono)
│
├── assets/
│   ├── css/
│   │   ├── main.css                # Entry point — importa todos os parciais
│   │   ├── variables.css           # Design tokens & CSS custom properties
│   │   ├── base.css                # Reset, tipografia base e utilitários
│   │   ├── animations.css          # Keyframes e classes de animação
│   │   ├── responsive.css          # Media queries (tablet & mobile)
│   │   │
│   │   └── components/             # Estilos por componente/secção
│   │       ├── navbar.css
│   │       ├── hero.css
│   │       ├── about.css
│   │       ├── services.css
│   │       ├── products.css
│   │       ├── why.css
│   │       ├── contact.css
│   │       └── footer.css
│   │
│   ├── js/
│   │   └── main.js                 # Toda a lógica JS do site
│   │
│   └── images/                     # Diretório para imagens e mídia
│       └── .gitkeep
```

## 🛠️ Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Custom properties, Flexbox, Grid, Glassmorphism, Animações
- **JavaScript** — Vanilla JS (ES6+), Intersection Observer API
- **Google Fonts** — Exo 2 + JetBrains Mono

## 🚀 Como Usar

1. Abra `index.html` no navegador ou use um servidor local:
   ```bash
   # Usando Python
   python -m http.server 8000

   # Ou usando Node.js
   npx serve .
   ```

2. Acesse `http://localhost:8000`

## 📋 Secções do Site

| Secção       | Descrição                                                   |
|-------------|-------------------------------------------------------------|
| **Hero**    | Banner principal com animações e dashboard mock              |
| **Sobre**   | Apresentação da empresa, valores e competências             |
| **Serviços**| Cards com os 6 serviços oferecidos                          |
| **Produtos**| Showcases dos produtos G Facilita e Mwana Protected         |
| **Porquê**  | Diferenciais e vantagens competitivas                       |
| **Contacto**| Formulário de contacto e informações                        |

## 📐 Design System

As variáveis de design estão centralizadas em `assets/css/variables.css`:

| Token     | Valor       | Uso                    |
|-----------|-------------|------------------------|
| `--green` | `#00e676`   | Cor primária (brand)   |
| `--cyan`  | `#00e5ff`   | Cor secundária         |
| `--black` | `#050b14`   | Fundo principal        |
| `--dark`  | `#080f1e`   | Fundo de secções       |
| `--glass` | `rgba(...)`  | Efeitos glassmorphism |

## 📧 Contacto

- **Email**: hexangolasystem@gmail.com
- **Telefone**: +244 945 691 151
- **WhatsApp**: [Falar agora](https://wa.me/244945691151)

---

© 2025 HexaNgola Systems. Todos os direitos reservados.
