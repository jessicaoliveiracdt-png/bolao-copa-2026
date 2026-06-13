# Bolão da Copa do Mundo 2026 ⚽

Tabelinha de apostas para a fase de grupos da Copa do Mundo 2026 (Canadá · México · Estados Unidos). Marque seus palpites nos 72 jogos, acompanhe o progresso e compartilhe com os amigos. Tudo roda no navegador, sem login e sem servidor.

## Funcionalidades

- 72 jogos da fase de grupos, em duas visões: **por data** e **por grupo**
- Toque no time vencedor ou no **E** para empate
- Marque cada palpite como **certo / errado** após o jogo
- Barra de progresso e placar de acertos
- Palpites salvos automaticamente no navegador (localStorage)
- **Compartilhar / importar** palpites por código (ideal para WhatsApp)
- Layout responsivo, otimizado para celular
- Versão para impressão / PDF

## Estrutura

```
.
├── index.html        # marcação da página
├── css/
│   └── styles.css     # estilos (inclui breakpoint mobile e print)
├── js/
│   └── app.js         # dados dos jogos + lógica de palpites
├── .nojekyll          # garante que o GitHub Pages sirva tudo sem processar
└── README.md
```

## Como usar / hospedar

Não precisa instalar nada. É só abrir o `index.html` no navegador, ou publicar a pasta em qualquer hospedagem estática.

Publicado via **GitHub Pages** (branch `main`, raiz `/`).

## Como atualizar

1. Edite `index.html`, `css/styles.css` ou `js/app.js`.
2. Faça commit das mudanças na branch `main` (pelo site do GitHub ou via `git push`).
3. O GitHub Pages republica sozinho em ~1 minuto.

Para adicionar ou corrigir um jogo, edite o array `MATCHES` em `js/app.js`.
