---
title: Configuração do Starlight
---

# Configurando o Starlight

A configuração do Starlight é feita principalmente no arquivo `astro.config.mjs`.

## Opções comuns
- **site**: URL do site
- **title**: Título global
- **description**: Descrição do site
- **sidebar**: Configuração da navegação lateral
- **theme**: Tema (dark, light, auto)
- **i18n**: Internacionalização
- **plugins**: Plugins e integrações

## Exemplo básico
```js
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Minha Documentação',
      sidebar: [
        { label: 'Introdução', link: '/' },
        { label: 'Guias', link: '/guides/' }
      ],
      theme: 'auto',
    })
  ]
});
```

Veja todas as opções na [referência de configuração](https://starlight.astro.build/reference/configuration/). 