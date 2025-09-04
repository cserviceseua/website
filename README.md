# BlueSpring Cleaning - Landing Page

Uma landing page completa e responsiva para a empresa de limpeza residencial BlueSpring Cleaning, desenvolvida com Next.js 14, Tailwind CSS e JavaScript.

## 🚀 Características

- **100% Responsivo**: Design que funciona perfeitamente em todos os dispositivos
- **SEO Otimizado**: Metadata completa para melhor indexação
- **Acessível**: Implementado seguindo as melhores práticas de acessibilidade
- **Performance**: Otimizado para carregamento rápido
- **Animações Suaves**: Transições e hover effects elegantes

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** com App Router
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **JavaScript** (sem TypeScript)
- **Inter Font** via next/font

## 🎨 Seções da Landing Page

1. **Header Fixo** - Navegação e telefone de contato
2. **Hero Section** - Título principal, CTAs e badges de confiança
3. **How to Book** - Processo de agendamento em 3 passos
4. **Services** - Grid de serviços profissionais
5. **Gallery** - Galeria estilo Polaroid dos trabalhos
6. **What's Included** - Lista de recursos inclusos
7. **Why Choose BlueSpring** - Diferenciais da empresa
8. **Testimonials** - Depoimentos de clientes com slider
9. **Final CTA** - Chamada final para ação
10. **Footer** - Links, contato e informações da empresa

## 🎨 Paleta de Cores

- **Primary**: #59C36A (verde principal)
- **Primary Dark**: #2E7D32
- **Accent**: #D9F99D (verde claro)
- **Ink**: #0F172A (cinza-azulado para títulos)
- **Muted**: #6B7280 (cinza para texto secundário)
- **Background**: #F7FAF7 (fundo suave)

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em desenvolvimento:**
```bash
npm run dev
```

3. **Acessar no navegador:**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── Header.js          # Cabeçalho fixo com navegação
│   ├── Hero.js            # Seção principal
│   ├── Steps.js           # Como agendar (3 passos)
│   ├── Services.js        # Grid de serviços
│   ├── Gallery.js         # Galeria de fotos
│   ├── Included.js        # O que está incluído
│   ├── WhyChoose.js       # Por que escolher
│   ├── Testimonials.js    # Depoimentos (slider)
│   ├── FinalCta.js        # CTA final
│   └── Footer.js          # Rodapé
├── globals.css            # Estilos globais
├── layout.js              # Layout principal
└── page.js                # Página inicial

public/
├── hero.png               # Imagem principal
├── service-*.jpg          # Imagens dos serviços
├── gallery-*.jpg          # Imagens da galeria
├── avatar-*.jpg           # Avatares dos clientes
└── badge-*.svg            # Ícones dos badges
```

## 📱 Recursos de Acessibilidade

- Navegação por teclado completa
- Labels apropriados para leitores de tela
- Contraste adequado em todos os elementos
- Estrutura semântica HTML5
- Focus indicators visíveis

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Verifica qualidade do código

## 📞 Informações de Contato

- **Telefone**: (303) 123-4567
- **Email**: info@bluespringcleaning.com
- **Localização**: Denver, CO

## 🌟 Funcionalidades Especiais

- **Navegação Suave**: Scroll suave entre seções
- **Header Dinâmico**: Muda aparência ao fazer scroll
- **Slider de Depoimentos**: Navegação por botões e dots
- **Galeria Interativa**: Efeito Polaroid com hover
- **Formulário de Contato**: CTAs direcionam para ação
- **Mobile First**: Design otimizado para dispositivos móveis

## 📈 Performance

- Imagens otimizadas com next/image
- Lazy loading automático
- Bundle size otimizado
- CSS-in-JS com Tailwind

---

Desenvolvido para BlueSpring Cleaning - Reliable Cleaning Services in Denver, CO