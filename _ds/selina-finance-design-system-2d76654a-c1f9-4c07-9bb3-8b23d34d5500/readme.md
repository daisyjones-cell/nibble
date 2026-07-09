# Selina Finance — Design System

The reference for building anything that looks and feels like **Selina** — prototypes, mockups, slides, marketing pages or production-bound UI. It captures the brand's tokens, components, voice and assets so every artefact is consistent without re-deriving the style.

**Selina Finance** is a UK fintech that lets homeowners borrow against the value of their home — a **HELOC** (home equity line of credit), **secured loans** and **debt consolidation**, from £10,000 to £500,000. The product promise is *a clearer, calmer way to borrow*: check your real rate in ~2 minutes with a soft search (no credit-score impact), apply online, money in as little as 5 days. The brand feel is **warm, human and physical** — chunky pressable buttons, warm off-white surfaces, a tight named palette and friendly isometric illustrations. Live site: https://www.selinafinance.co.uk/

## Sources

This system was built from the brand's own design artefacts:

- **`DESIGN.md`, `tokens.css`, `components.md`, `forms.css`** — the canonical brand guide, design tokens, component catalog and working form-component CSS, supplied by the Selina team (originally distilled from the Figma libraries below).
- **Figma "Tokens - Components"** (`uhksmygJDQQw35tIoxyevW`) — tokens + components (Button, Forms, Table, Thumbnails, TrustPilot, Icons).
- **Figma "Illustrations"** (`bOEBC8TuaRruqdET41oqjZ`) — the 11 brand illustrations.
- **GitHub** — `Selina-Finance/selina-product-os` → `design-system/` subtree (the `@selina/design-system` React library + Storybook). *Not read for this build* — access wasn't granted to that repo. If you can reach it, explore it for the production component source, Storybook stories, and any components added since (Table, offer cards, TrustPilot). Pulling from it will let you match the real implementation even more closely.

> The `uploads/` copies of `DESIGN.md` / `tokens.css` / `forms.css` / `components.md` are the team's working files; the versions wired into this system live at the project root (`tokens/tokens.css`, `styles/forms.css`) so the compiler can ship them.

---

## Content fundamentals — how Selina writes

The voice is **warm, plain-spoken and reassuring** — a calm expert, never a salesman. Copy de-jargons borrowing and keeps the customer in control.

- **Person:** second person — *"your home", "your real rate", "tell us about you"*. Selina refers to itself as *"we"*. Direct and personal.
- **Tone:** confident and calm. Leads with the customer benefit and the reassurance, not the product mechanics. Anxiety-reducers are stated up front and often: *"no impact on your credit score"*, *"soft search only"*, *"won't affect your credit file"*.
- **Casing:** **sentence case everywhere** — headings, buttons, labels. Buttons read like spoken actions: *"Check my rate"*, *"Continue"*, *"See my result"*, *"Get a quote"*. Never Title Case or UPPERCASE for UI copy (the only uppercase is the tracked eyebrow/label token, used sparingly for section kickers).
- **Numbers & money:** GBP with the £ symbol and thousands separators (*£25,000*, *£500k*). Rates as *6.4% APR* / *APR representative*. UK spelling throughout (*personalised, colour, optimise*).
- **Headlines:** short, plain, benefit-led — *"A clearer way to borrow"*, *"One home. Three ways to borrow."*, *"Good news — you're pre-approved"*. Often a friendly fragment.
- **Microcopy:** helpful and specific. Helper text explains *why* (*"We'll text a code to verify it later."*). Time and effort are quantified (*"takes 2 minutes", "in as little as 5 days"*).
- **No emoji.** The warmth comes from the illustrations and palette, not emoji or exclamation-heavy copy. Keep punctuation calm.

---

## Visual foundations

**The five things that make it "Selina":**

1. **Chunky & physical.** The signature move is a **hard offset shadow** — a 0-blur Midnight shadow sitting *directly below* an element (`--shadow-hard-m` = `0 4px 0 0`), paired with a **thick navy border** (2px) and heavy rounding. Buttons and key cards look like real, pressable objects.
2. **Warm, not clinical.** Surfaces lean to a warm off-white (`--color-bg-primary` `#fcfaf9`, `--color-bg-light-tint` `#f9f6f3`) and Almond (`#efe8e0`) — never cold grey.
3. **A tight, named palette.** Midnight ink + three soft accents (Peppermint, Periwinkle, Almond) and one highlight (Peach). **Peppermint is the hero / CTA colour.** No hues outside these families.
4. **Two typefaces, clear roles.** **Sora** (geometric) for headings + labels; **Inter** (neutral) for body. Big headings get tight negative tracking (down to −4px).
5. **The notched button corner.** Buttons aren't pills — a clipped corner: Radius/L (16px) on three corners and Radius/XS (4px) on the bottom-right (`--radius-button` = `16 16 4 16`). Subtle but signature.

**Colour.** Six primitive families (Monochrome, Almond, Midnight, Peach, Peppermint, Periwinkle), each a full 100→900 ramp with the **500** as the anchor, mapped to semantic roles (text, surfaces, fills, forms, buttons). Feedback: Error `#e92e4a`, Success `#7aba8a`, Focus yellow `#f3ce3a`; **form focus uses peach-400 `#ffd8a9`**. Always prefer the semantic token (`--color-text-primary`, `--color-btn-primary-bg`) over a raw ramp step.

**Type scale.** Desktop headings (Sora): 3XL 80/80 · 2XL 64/64 (600, −4px) · XL 44/48 · L 36/40 (700, −2px) · M 28/32 (700, −1px) · S 18/20 · XS 16/20. Headings scale down on mobile (`--h-*-size-mob`); body + labels stay constant. Paragraphs (Inter): L 24 · M 18 · S 14. Labels (Sora 800, LH 100%): lowercase + uppercase (uppercase carries +4px tracking).

**Spacing & layout.** Global **8-point scale** (`--space-*`; 2/4/12 are sanctioned off-grid). 12-column desktop grid / 4-column mobile, **24px gutters & margins**, `--container-max` 1280px. Form pages put the form in cols 2–8 and a sticky rail in cols 9–13.

**Radius & border.** Radii 0 · 4 · 8 · 12 · 16 · 24 · pill. Border widths 1–4px; **default UI border is 2px (M)**, navy. Cards: white fill, 2px navy border, `--radius-l` (16px), `--shadow-hard-m`. Softer surfaces drop the border/shadow (`.sel-card--soft` / `--tint`).

**Backgrounds & imagery.** Flat warm colour fields — **no photographic heroes, no gradients, no glassmorphism**. Imagery means the **isometric illustrations**: full-colour line-work (Periwinkle / Peppermint / Peach / Midnight fills, white faces, navy strokes) on a soft dotted ground. Cool-free, friendly, geometric. Dark sections use `--color-bg-contrast` (Midnight) with light text and the inverse logo.

**Motion.** Restrained and physical. The hero interaction is the **button press**: on hover the fill darkens and the shadow shortens (`--shadow-hard-s`) as the element nudges down `translateY(1px)`; on active the fill lightens, the shadow collapses to flat and it presses in `translateY(4px)`. Transitions are short (`.12s`) on background / box-shadow / transform. The "Read more" callout tweens open via `grid-template-rows 0fr→1fr` with an ease-out curve. No bounces, no parallax, no infinite loops.

**States.** *Hover* darkens fills / shows a tinted row; *focus* adds a ring (periwinkle on controls, `--shadow-focus-form` peach on form fields); *active* presses in. *Selected* form cards turn their border green + a green ring (`:has(input:checked)`). *Disabled* buttons get a per-variant tinted fill, light-grey text, **no border, no shadow**.

**Dark theme.** `data-theme="dark"` on any ancestor re-themes the whole system via the semantic tokens; the hard shadow flips to light so the signature offset stays visible.

---

## Iconography

- **Line icons, navy, `currentColor`.** The library defines **9 core icons** — Check, Close, Loading, Copy, Email, Download, Add, Padlock, Search — single-colour, navy by default, drawn to match the illustrations' line weight. The `Icon` component (`components/display/Icon.jsx`) ships these plus the UI glyphs the chrome needs (chevron, arrow, info, location, error, tick-circle, star, phone, menu, bulb). All render with `fill="none" stroke="currentColor"` at a 2px stroke, so they recolour via `color` and scale by `size`. *(The star uses a filled treatment; the bulb powers the callout.)*
- **No emoji, no Unicode glyphs** as icons — always the `Icon` component or an inline SVG using `currentColor`.
- **No external icon font / CDN.** This system's icons are hand-rolled to the brand line style rather than pulled from Lucide/Heroicons. If you need a glyph that isn't in `Icon`, add it to `Icon.jsx` in the same 24×24 / 2px-stroke style rather than importing another set.
- **Illustrations** (the 11 in `assets/illustrations/`) are the system's hero artwork — use them on heroes, empty states, success screens and product cards via the `Illustration` component. Don't redraw them; reference the SVGs.

---

## What's in here — index

**Foundations**
- `styles.css` — **the one file consumers link.** A manifest of `@import`s only → fonts, tokens, forms, buttons, components.
- `tokens/tokens.css` — colour ramps + semantics, type, spacing, radius, border, grid, elevation; + dark theme. *(269 tokens.)*
- `tokens/fonts.css` — Sora + Inter via Google Fonts. **Font substitution flag:** these load from the Google Fonts CDN (the brand's stated source), so no font binaries ship in this project and the compiler reports 0 webfonts. If you need them embedded/offline, drop the `.woff2` files in and add real `@font-face` rules — ask the Selina team for the licensed files.
- `styles/forms.css` + `styles/forms.js` — the working `.f-*` form library (inputs, affixes, select, checkbox, radio, yes/no, switch, slider, OTP, callout, address lookup, calendar) and its vanilla behaviours.
- `styles/buttons.css`, `styles/components.css` — class styling behind the Button + chrome/surface React components.

**Components** (`window.SelinaFinanceDesignSystem_2d7665.<Name>`)
- *Core:* `Button`
- *Forms:* `TextField`, `Textarea`, `Select`, `Checkbox`, `Radio`, `YesNo`, `Switch`, `Slider`, `OtpInput`, `Callout`
- *Chrome:* `NavBar`, `TrustBar`, `ProgressBar`, `ProgressTimeline`, `NeedHelpCard`, `FixedActionBar`
- *Display:* `Card`, `Badge`, `Tag`, `OfferCard`, `Logo`, `Icon`, `Illustration`

**UI kits** (full interactive recreations)
- `ui_kits/application/` — the 4-step HELOC **loan application** journey (details → property & loan → verify → approved). The canonical FormPage layout.
- `ui_kits/website/` — the marketing **homepage** (hero, product cards, how-it-works, CTA band).

**Guidelines** — `guidelines/*.card.html` foundation specimens (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Assets** — `assets/logos/` (primary / white / accent, full + logomark) · `assets/illustrations/` (11 SVGs).

**Using it in a prototype:** link `styles.css`, load `_ds_bundle.js`, then `const { Button, TextField, … } = window.SelinaFinanceDesignSystem_2d7665`. For form behaviours also include `styles/forms.js`. Build the real components — never hand-roll a Selina button, field or nav.
