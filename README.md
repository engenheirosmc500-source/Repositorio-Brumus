# Brumus Agência — site

Site institucional da Brumus (HTML, CSS e JavaScript puros, sem build).

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor local:
   ```bash
   npm run dev
   ```
3. O projeto abrirá no seu navegador na porta `3000` (http://localhost:3000).

## Estrutura

```
index.html              → página do site (todo o conteúdo/texto)
assets/css/style.css    → visual (cores no :root, no topo do arquivo)
assets/js/main.js       → animações, mapa, depoimentos, formulário
assets/js/brazil-map.js → desenho do mapa do Brasil (não precisa mexer)
assets/img/             → fotos da equipe, logos dos clientes, favicon
.htaccess               → força HTTPS e cache (Hostinger)
```

## Onde mexer

- **WhatsApp do formulário:** `assets/js/main.js`, linha `const WHATSAPP = "..."`.
- **Depoimentos:** `assets/js/main.js`, lista `DEPOIMENTOS`.
- **Faixa "Negócios que já confiam":** `assets/js/main.js`, lista `CLIENTES`.
- **Equipe, serviços, textos:** `index.html`.
- **Fotos novas:** coloque em `assets/img/` (JPG, 480x600 para equipe; 120x120 para logos).

## Publicação

Cada `git push` na branch `main` atualiza o site na Hostinger (deploy automático).

Mapa: SVG Maps, licença CC BY 4.0.
