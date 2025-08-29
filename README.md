# 📄 CV Builder AI

Gerador de Currículos Inteligentes com **preview em tempo real** e melhorias automáticas via **Inteligência Artificial**.
O objetivo do projeto é permitir que os usuários criem currículos profissionais de forma prática, visualizando as alterações instantaneamente e podendo aprimorar textos com IA.

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **TailwindCSS v4**
- **Vite**
- **OpenAI API** ou **Gemini API**

---

## 🎨 Conceito da Aplicação

A aplicação utiliza um **layout split-screen** com foco em produtividade e visualização instantânea:

- **Esquerda (50%)** → Formulário completo para entrada de dados
- **Direita (50%)** → Preview atualizado do currículo em tempo real
- **Interface desktop-first** → Otimizada para telas maiores

---

## 📌 Funcionalidades Principais

- **Preview instantâneo** — alterações aparecem em tempo real
- **Listas dinâmicas** — habilidades e experiências com botões de adicionar/remover
- **Melhoria automática com IA** — aprimoramento de textos com um clique
- **Interface clean e moderna** — design profissional
- **Feedback visual** — loaders, toasts e animações suaves

---

## 🧩 Estrutura do Projeto

```
src/
├── App.tsx
├── components/
│   ├── Layout/
│   │   ├── FormSection.tsx
│   │   └── PreviewSection.tsx
│   ├── Form/
│   │   ├── PersonalInfo.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── AIEnhanceButton.tsx
│   ├── Preview/
│   │   ├── CVPreview.tsx
│   │   ├── PersonalHeader.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ExperienceSection.tsx
│   └── UI/
│       ├── LoadingSpinner.tsx
│       ├── ErrorBoundary.tsx
│       └── Toast.tsx
├── services/
│   └── aiService.ts
├── hooks/
│   ├── useCVData.ts
│   ├── useAIEnhancement.ts
│   └── useToast.ts
├── utils/
│   ├── validation.ts
│   └── textProcessing.ts
├── types/
│   ├── cv.types.ts
│   └── api.types.ts
└── index.css
```

---

## ✅ Requisitos Obrigatórios

- Layout **split-screen** fixo para desktop
- Formulário com validação e contador de caracteres
- Gerenciamento dinâmico de habilidades e experiências
- Preview do currículo atualizado em tempo real
- Botões para **melhoria de textos com IA**
- Feedback visual (loaders, skeletons e toasts)
- Tratamento de erros robusto com **error boundaries**
- Segurança via **variáveis de ambiente** e validações

---

## 🎯 Requisitos Opcionais

- **Exportação para PDF** com layout profissional
- **Temas customizáveis** e atalhos de teclado
- **Histórico de versões** com undo/redo
- **Persistência de dados** com LocalStorage
- **Suporte a múltiplos currículos salvos**

---

## 🧠 Conceitos Técnicos Envolvidos

- Estado centralizado e **sincronização entre formulário e preview**
- **Inputs controlados** com validação em tempo real
- Renderização condicional e feedback visual de campos
- Integração com **OpenAI API** ou **Gemini API** para melhoria de conteúdo
- Otimização de performance com **useCallback** e **lazy loading**

---

## 👩‍💻 Estudantes Envolvidos

| Nome                                | Função no Projeto |
|-------------------------------------|-------------------|
|Andreza da Conceição Oliveira        |
|Ariana Aparecida Velasco Alves       |
|Damião Costa de Oliveira             |
|Gracielen Garbine de Lima            |
|Jenifer Silva                        |
|Mariana Macedo de Farias Souza       |
|Nay Rodrigues                        |
|Simone Damas Ogawa                   |
|Vinicius Oliveira Miranda de Andrade |    


> Preencha os nomes e funções conforme a equipe do projeto.

---

## 📦 Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cv-builder-ai.git

# Acesse o diretório
cd cv-builder-ai

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 🔑 Configuração da API de IA

O projeto pode ser configurado para usar **OpenAI** ou **Gemini**.

1. Crie um arquivo **.env** na raiz do projeto
2. Adicione a chave da API escolhida:

```env
# Caso use OpenAI
VITE_OPENAI_API_KEY=your_openai_key_here

# Caso use Gemini
VITE_GEMINI_API_KEY=your_gemini_key_here
```

---

## 📝 Licença

Este projeto é parte de um programa de ensino **Desenvolve Koru Boticario** e tem fins **educacionais**.
