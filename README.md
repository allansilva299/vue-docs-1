# Guia para Adicionar Conteúdo - Documentação Front-end Vue (Starlight/Astro)

Este README fornece instruções sobre como adicionar novo conteúdo à documentação de front-end baseada em Vue 3, Vuetify 3 e Nuxt 3, utilizando o Starlight (Astro). A pasta principal para o conteúdo do site é a `website/`.

## Estrutura de Pastas Principal

O conteúdo do site que será publicado no GitHub Pages está localizado dentro da pasta `website/`. A estrutura relevante dentro de `website/` é:

```
website/
├── public/             # Ativos estáticos (favicons, imagens, etc.)
├── src/
│   ├── assets/         # Imagens
│   ├── content/
│   │   ├── docs/       # Arquivos Markdown/MDX para as páginas de documentação
│   │   └── config.ts   # Configuração do Starlight
└── astro.config.mjs    # Configuração do Astro
```

## Adicionando Novas Páginas de Conteúdo

Para adicionar novas páginas à documentação:

1.  Navegue até a pasta `website/src/content/docs/`.
2.  Crie um novo arquivo com a extensão `.md` (Markdown) ou `.mdx` (MDX, Markdown com componentes Vue/JSX).
3.  O nome do arquivo determinará a rota da página. Por exemplo, `introducao-vue3.md` será acessível em `/vue-docs-1/vue3/introducao-vue3`.
4.  Organize o conteúdo em subpastas temáticas, como `vue3/`, `vuetify3/`, `nuxt3/`, `reatividade/`, `javascript/`, `css/`, etc. Por exemplo, `website/src/content/docs/vue3/composicao.md` será acessível em `vue-docs-1/vue3/composicao`.

## Adicionando Imagens

Para adicionar imagens que serão usadas nas suas páginas de documentação:

1.  Coloque os arquivos de imagem na pasta `website/public/`.
2.  No seu arquivo Markdown, referencie a imagem usando um caminho relativo a partir da raiz do site.

    Exemplo em Markdown:
    ```markdown
    ![Texto alternativo da imagem](/nome-da-sua-imagem.png)
    ```
    *O caminho parte da raiz do site publicado, que corresponde à pasta `public/`.*

## Deploy para GitHub Pages

O site é automaticamente construído e implantado no GitHub Pages através de uma GitHub Action definida em `.github/workflows/deploy.yml`. Esta ação está configurada para:

*   Observar pushes para a branch `main`.
*   Construir o projeto Astro localizado na pasta `website/`.
*   Implantar o resultado na sua página do GitHub Pages.

Nenhuma ação manual de deploy é necessária após o push para a branch `main`, desde que a Action esteja configurada corretamente.

## Executando o Projeto Localmente

Para visualizar suas alterações localmente antes de fazer o push:

1.  **Navegue até a pasta do site:**
    ```bash
    cd website
    ```

2.  **Instale as dependências** (se for a primeira vez ou se as dependências mudaram):
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm run dev
    ```
    Isso iniciará um servidor local (geralmente em `http://localhost:4321`) onde você poderá ver sua documentação. O servidor recarregará automaticamente as alterações feitas nos arquivos de conteúdo.

## Contribuindo

Certifique-se de que suas alterações sejam testadas localmente antes de enviá-las para a branch `main`. Siga as convenções de nomenclatura de arquivos e estrutura de pastas para manter a organização do projeto. Priorize a separação dos conteúdos por temas (vue3, vuetify3, nuxt3, etc.) para facilitar a navegação e manutenção.
