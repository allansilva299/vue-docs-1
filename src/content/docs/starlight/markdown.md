---
title: Conteúdo em Markdown, MDX e Markdoc
---

# Escrevendo Documentação

O Starlight suporta arquivos `.md` (Markdown), `.mdx` (Markdown + JSX) e Markdoc para criar páginas de documentação.

## Frontmatter obrigatório
Todo arquivo deve ter pelo menos um campo `title` no frontmatter:

```md
---
title: Minha página
---

Conteúdo da página...
```

## Recursos de Markdown suportados
- Títulos, listas, tabelas, links, imagens
- Blocos de código com realce
- Asides (notas, avisos, etc.)
- Blockquotes, detalhes, tabs, badges, cards

## Usando MDX
Você pode importar e usar componentes React/Vue/Svelte/Solid em arquivos `.mdx`.

## Usando Markdoc
Para usar Markdoc, siga o guia oficial para instalar e configurar:
- Adicione a integração: `pnpm astro add markdoc`
- Instale o preset: `pnpm add @astrojs/starlight-markdoc`
- Crie `markdoc.config.mjs` com o preset Starlight

Mais detalhes:
- [Authoring Content](https://starlight.astro.build/guides/authoring-content/)
- [Markdoc](https://starlight.astro.build/guides/authoring-content/#markdoc) 