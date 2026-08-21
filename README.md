# 🌿 Leaf by Leaf

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&size=28&duration=3000&pause=1000&color=3F6B3F&center=true&vCenter=true&width=600&lines=Bem-vindo(a)+ao+Leaf+by+Leaf!;Um+cantinho+para+quem+ama+plantas+%F0%9F%8C%B1" alt="Leaf by Leaf">

<br>

**Um blog sobre jardinagem, plantas e o encantador mundo da natureza. 🌱**

</div>

---

## 🌱 Sobre o projeto

O **Leaf by Leaf** é um site de jardinagem e botânica desenvolvido como projeto de portfólio.

A proposta do projeto é criar uma experiência agradável para pessoas interessadas em plantas, oferecendo conteúdos sobre **jardinagem, cuidados com plantas, decoração, pets, botânica e fitoterapia**.

O site possui uma página inicial, uma área dedicada ao blog, páginas individuais para cada artigo e outras seções que complementam a experiência do usuário.

> 🌿 **Aprenda a cuidar de seu jardim, folha por folha.**

---

## ✨ Funcionalidades

* 🏡 Página inicial com banner e apresentação do site
* ⭐ Seção de artigos em destaque
* 📰 Blog com cards de artigos
* 📖 Página individual para cada artigo
* 🔗 Navegação entre páginas utilizando React Router
* 📱 Layout responsivo para diferentes tamanhos de tela
* 🌿 Seção sobre Botânica e Fitoterapia
* 📩 Simulação de inscrição para receber novos artigos
* 🧭 Navbar responsiva com menu mobile
* 🌱 Conteúdo organizado em categorias
* ✨ Animações e efeitos de interação nos cards e botões

---

## 📝 Blog

Os artigos do Leaf by Leaf são armazenados em um arquivo JavaScript:

```text
src/
└── data/
    └── posts.js
```

Cada artigo possui informações como:

```javascript
{
    id,
    slug,
    title,
    description,
    image,
    date,
    category,
    content
}
```

Isso permite adicionar novos artigos de maneira simples, sem a necessidade de um banco de dados.

As páginas individuais dos artigos utilizam o `slug` para identificar qual conteúdo deve ser exibido.

---

## 🛠️ Tecnologias utilizadas

### Front-end

<div align="center">

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-7.18.2-CA4245?style=for-the-badge\&logo=reactrouter\&logoColor=white)

![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-F56565?style=for-the-badge)

</div>

---

## 📂 Estrutura do projeto

```text
src/
│
├── Components/
│   ├── BlogCard.jsx
│   └── NavBar.jsx
│
├── data/
│   └── posts.js
│
├── pages/
│   ├── Home.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Sobre.jsx
│   └── Contato.jsx
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── images/
    └── imagens dos artigos
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/leaf-by-leaf.git
```

### 2. Acesse a pasta

```bash
cd leaf-by-leaf
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Depois, acesse o endereço disponibilizado pelo Vite no terminal.

---

## 🎨 Design

O design do Leaf by Leaf foi desenvolvido buscando transmitir uma sensação de **natureza, tranquilidade e leveza**.

A identidade visual utiliza principalmente tons de verde, combinados com imagens de plantas e elementos naturais.

O projeto também utiliza fontes decorativas em alguns títulos para reforçar a identidade visual do site.

---

## 📱 Responsividade

O Leaf by Leaf foi desenvolvido pensando em diferentes dispositivos:

* 💻 Desktop
* 💻 Tablet
* 📱 Smartphone

Os componentes possuem diferentes comportamentos de acordo com o tamanho da tela, incluindo:

* Navbar adaptada para dispositivos móveis
* Cards responsivos
* Grids que se reorganizam automaticamente
* Textos com tamanhos adaptáveis
* Seções centralizadas em diferentes resoluções

---

## 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em **desenvolvimento Front-end**, especialmente na criação de interfaces modernas e responsivas utilizando React.

Além da parte visual, o projeto também foi uma oportunidade para trabalhar com:

* Componentização
* React Router
* Organização de dados
* Reutilização de componentes
* Responsividade
* Tailwind CSS
* Estruturação de projetos React

---

## 💚 Desenvolvido por

<div align="center">

### Lily dos Santos Camargo

Desenvolvedora Front-end em busca da primeira oportunidade profissional na área.

<br>

[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/SEU-USUARIO)

</div>

---

<div align="center">

🌱 **Leaf by Leaf**
*Aprendendo sobre plantas, folha por folha.*

</div>
