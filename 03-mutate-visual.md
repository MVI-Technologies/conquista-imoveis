# Skill 03 — Mutar a Identidade Visual

## Objetivo

Alterar os tokens visuais em `src/index.css` para criar uma identidade
distinta do template original, adequada ao nicho, sem tocar em nenhum componente.

---

## Princípio Central

A mutação visual é o que impede que dois projetos gerados do mesmo template
pareçam idênticos. É o gene de cor e tipografia sendo expresso de forma diferente.

Os templates usam **Tailwind CSS v4**, onde tokens de design são definidos como
variáveis CSS diretamente no `src/index.css` — não no `tailwind.config.js`.

Você altera apenas um arquivo:
1. `src/index.css` — variáveis de cor e fonte
2. Nenhum outro.

---

## Passo 1 — Avaliar o nicho visualmente

Cada nicho carrega expectativas visuais do seu público.
Respeite essas expectativas — não as subverta sem motivo.

| Nicho | Tom Visual | Cor Primária Sugerida | Fonte Display Sugerida |
|---|---|---|---|
| Advocacia / Consultoria | Autoridade, seriedade | slate, zinc, navy | Playfair Display, Cormorant |
| Odontologia | Limpeza, confiança, saúde | blue, cyan, teal | DM Sans, Nunito |
| Academia / Fitness | Energia, força, resultado | red, orange, yellow | Oswald, Barlow Condensed |
| Restaurante / Gastronomia | Prazer, sofisticação, calor | amber, orange, stone | Lora, Fraunces |
| Clínica Estética / Beleza | Elegância, leveza, cuidado | rose, pink, neutral | Cormorant, Jost |
| Imobiliária / Arquitetura | Luxo, modernidade, solidez | slate, emerald, gold | Raleway, Outfit |
| Educação / Cursos | Clareza, confiança, crescimento | blue, indigo, violet | Inter, Plus Jakarta Sans |
| Tecnologia / SaaS | Inovação, precisão, velocidade | blue, violet, cyan | Space Grotesk, Syne |

---

## Passo 2 — Localizar os tokens no index.css

Abra `src/index.css` e localize o bloco de variáveis CSS do Tailwind v4.
Ele estará dentro de `@theme` ou `:root`, com formato similar a:

```css
@theme {
  --color-primary: oklch(0.21 0.006 285.75);
  --color-accent: oklch(0.76 0.12 84.5);
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

Se o template usar `:root` com variáveis nomeadas de forma diferente,
adapte os nomes — o padrão pode variar entre templates.

---

## Passo 3 — Selecionar a nova paleta

Escolha:
- **Cor primária**: ancora a identidade, usada em botões e destaques
- **Cor de acento**: complementa, usada em detalhes e hovers
- **Cor de fundo**: define se o tema é claro ou escuro

Regra de contraste: primária e acento não devem competir.
Se a primária for saturada (red, blue), o acento deve ser neutro (stone, zinc) ou análogo.

Use valores `oklch` — é o padrão do Tailwind v4.
Converta as cores escolhidas para oklch antes de aplicar.

Referência de conversão para cores comuns:
```
teal-600    → oklch(0.60 0.118 184.7)
teal-400    → oklch(0.76 0.112 185.6)
blue-600    → oklch(0.55 0.215 263.1)
amber-500   → oklch(0.77 0.164 70.1)
slate-800   → oklch(0.28 0.022 264.1)
rose-600    → oklch(0.59 0.196 15.7)
```

---

## Passo 4 — Selecionar as fontes

Escolha duas fontes do Google Fonts:
- **Display font**: para headlines e títulos grandes — deve ter personalidade e combinar com o nicho (popular vs. luxo):
  - **Nichos Populares/Acessíveis/Didáticos** (Ex: Imobiliária popular, academia de bairro, comércio local): Use fontes **sans-serif** limpas, amigáveis e com traços levemente arredondados para transmitir acolhimento e simpatia (ex: **Plus Jakarta Sans**, **Outfit**, **DM Sans**). Evite serifs luxuosos ou formais.
  - **Nichos Finos/Luxuosos/Formais** (Ex: Advocacia de boutique, clínica de luxo, restaurantes sofisticados): Use fontes **serif** elegantes, tradicionais ou clássicas para transmitir autoridade e luxo (ex: **Playfair Display**, **Lora**, **Cormorant Garamond**).
- **Body font**: para corpo de texto — deve ser legível e neutro (ex: **Inter**, **Nunito**).

Regra de combinação: display com personalidade + body neutro.
Nunca duas fontes com personalidade forte — elas competem.

Verifique se o `index.html` já importa as fontes via Google Fonts.
Se as fontes mudarem, atualize também o `<link>` de import no `index.html`.

---

## Passo 5 — Aplicar no index.css

Substitua apenas os valores das variáveis de cor e fonte.
Preserve toda a estrutura restante do arquivo.

Exemplo do que alterar:

```css
/* ANTES (template advogado-premium) */
@theme {
  --color-primary: oklch(0.28 0.022 264.1);   /* slate-800 */
  --color-accent: oklch(0.77 0.164 70.1);      /* amber-500 */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}

/* DEPOIS (nicho odontologia) */
@theme {
  --color-primary: oklch(0.60 0.118 184.7);   /* teal-600 */
  --color-accent: oklch(0.76 0.112 185.6);     /* teal-400 */
  --font-display: 'DM Sans', sans-serif;
  --font-body: 'Nunito', sans-serif;
}
```

---

## Passo 6 — Verificar

- [ ] A cor primária é adequada para o nicho?
- [ ] Os valores oklch estão corretos?
- [ ] As fontes estão disponíveis no Google Fonts?
- [ ] O `index.html` foi atualizado com o novo import de fontes (se necessário)?
- [ ] Nenhum componente foi alterado?
- [ ] O `src/index.css` continua CSS válido?

Só avance para a Skill 04 após verificar.
