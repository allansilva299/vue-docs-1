---
title: Estrutura do Projeto
---

# Estrutura de Pastas e Arquivos

Um projeto Astro Starlight segue uma estrutura simples e organizada. Os principais diretórios e arquivos são:

```
my-docs-site/
├── public/                # Arquivos estáticos (imagens, favicon, etc.)
├── src/
│   └── content/
│       └── docs/          # Documentação em Markdown, MDX ou Markdoc
├── astro.config.mjs       # Configuração do Astro
├── package.json           # Dependências e scripts
└── ...
```

- **public/**: Arquivos estáticos servidos diretamente.
- **src/content/docs/**: Onde ficam os arquivos de documentação. Cada arquivo representa uma página.
- **astro.config.mjs**: Configurações do Astro e do Starlight.
- **package.json**: Scripts e dependências do projeto.

Você pode criar subpastas dentro de `docs/` para organizar melhor o conteúdo, como `guides/`, `reference/`, etc.

Mais detalhes: [Project Structure](https://starlight.astro.build/guides/project-structure/) 