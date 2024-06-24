# News Portal

Este repositório contém o código-fonte de um projeto Next.js que consome a API do GNews para exibir notícias. A aplicação possui uma notícia em destaque e as demais são exibidas em um grid alinhado abaixo, utilizando Tailwind CSS. Ao clicar em uma notícia, é gerada uma página dinâmica com a rota baseada no título da notícia, que contém os detalhes da mesma.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **GNews API**: API utilizada para obter as notícias.
- **Tailwind CSS**: Framework CSS para estilização da aplicação.

## Funcionalidades

- **Notícia em Destaque**: A primeira notícia é exibida em destaque na página principal.
- **Grid de Notícias**: As demais notícias são exibidas em um grid alinhado abaixo da notícia em destaque.
- **Slug Dinâmico**: Ao clicar em uma notícia, é gerada uma página com uma rota baseada no título da notícia (slug).
- **Detalhes da Notícia**: A página dinâmica exibe os detalhes completos da notícia selecionada.

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js
- NPM ou Yarn

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte variável de ambiente:
```
NEXT_PUBLIC_NEWS_API_URL=gnews_api_url
NEXT_PUBLIC_NEWS_API_KEY=your_gnews_api_key
```

Substitua `your_gnews_api_key` pela sua chave de API do GNews.

### Instalando Dependências

Execute o comando abaixo para instalar as dependências do projeto:

```
npm install
```

### Executando o Projeto
Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```
npm run dev
```
A aplicação estará disponível em http://localhost:3000.

### Estrutura dos Componentes
`src/app/api/news/route.ts`
Este é o endpoint da API que consome a API do GNews e fornece os dados de notícias para o frontend.

`src/app/home/`
Esta é a página principal que exibe a notícia em destaque e o grid de notícias.

`src/app/news/[slug]/`
Esta é a página dinâmica que exibe os detalhes da notícia com base no slug gerado a partir do título da notícia. Contém page.tsx e type.ts.

`src/components/article/`
Componente para exibir um artigo individual. Contém index.tsx e types.ts.

`src/components/featured-new/`
Componente para exibir a notícia em destaque. Contém index.ts e types.ts.

`src/components/news-card/`
Componente para exibir um card de notícia. Contém index.ts e types.ts.

`src/utils/generateSlug.ts`
Função utilitária para gerar slugs a partir dos títulos das notícias.

### Estilização
A estilização da aplicação é feita com Tailwind CSS, cujas configurações estão no arquivo tailwind.config.js.

## Contribuição
Se você quiser contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório, criar uma branch com suas alterações e enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
