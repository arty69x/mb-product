# MB UI Reverse Engineering Master

## 1 Environment Profile
- Viewport width: **1440px**.
- Device pixel ratio: **1**.
- Zoom: **100%**.
- Scrollbar width assumption: **0px**.
- Font rendering assumption: system sans fallback.

## 2 Global Defaults
- Container fallback: max-width 1280px, `px-4`, centered.
- Typography fallback: Helvetica Neue, 1.5 line-height, tracking 0.
- Spacing scale: 8px base, 4px sub-step.
- Radius fallback: 4px cards, 9999px pills.
- Shadow fallback: `0 10px 30px rgba(0,0,0,0.08)`.

## 3 Design Tokens
- `--mb-bg`: `#efefef`
- `--mb-text`: `#111111`
- `--mb-muted`: `#737373`
- `--mb-border`: `#e5e5e5`
- `--mb-footer-bg`: `#000000`
- Type scale: 12/13/16/24/36/48/64.

## 4 Page Map
| filename | inferred route | dimensions | notes |
|---|---|---:|---|
| home-desktop.png | `/` | 736x1537 | Hero collage, featured story, arrivals grid, footer |
| listing-mobile.png | `/shop` | 736x1537 | Mobile listing with sort/filter and 2-col cards |
| cart-mobile.png | `/cart` | 828x1792 | Empty cart state with centered CTA |
| new-arrivals-desktop.png | `/new-arrivals` | 1334x1668 | Desktop listing with hero banner + product grid |
| product-desktop.png | `/blog/[slug]` or product detail | 671x1536 | Detail layout with media, meta and related products |

## 5 Section Structure (per page)
All pages follow: `main > section > div.container.mx-auto.px-4`.
- Home: Hero / Story / New Arrivals / About / Service strip / Footer.
- Listing: Hero / Controls / Product grid / Pagination / Footer.
- Cart: Header / Empty-state card / Footer.
- Detail: Breadcrumb/meta / media-content split / tabbed info / related grid / footer.

## 6 Component Structure
Shared components:
- `SiteLayout`, `Header`, `Footer`, `PageHero`.
- Template primitives: `StaticPage`, `ListingPage`, `DetailPage`, `FormPage`, `NotFoundPage`.
- Commerce: `ProductGrid`, `ProductCard`.

## 7 Full DOM Tree (per page)
- Root: `div.min-h-screen`
  - `header`
    - logo, nav links, icon controls
  - `main`
    - per-page sequence of sections
  - `footer`
    - address block, link columns, opening time

## 8 Node Table
Representative nodes:
- `n-header`: type element, parent root, role navigation container.
- `n-hero-title`: text, parent hero overlay, role heading.
- `n-list-controls`: element, parent listing section, role sort/filter toolbar.
- `n-product-card-*`: element, parent product grid, role product summary.
- `n-empty-cart`: text/button group, parent cart section, role empty state CTA.

## 9 Bounding Box Map
Measured/computed at 1440 desktop:
- Header: `(x:0,y:0,w:1440,h:56)` REAL_MEASURED_VALUE.
- Hero desktop: `(0,56,1440,540)` COMPUTED_VALUE.
- Main listing container width: `(80..1360)` COMPUTED_VALUE from blueprint margins.
- Footer: `(0,auto,w:1440,h:320)` COMPUTED_VALUE.

## 10 Stacking Context Map
- Background layer: page background and media.
- Content layer: cards, text, forms.
- Overlay layer: hero dark tint and icon badges.
- Controls layer: sort/filter strip and header controls.
- Modal layer: none observed (DEFAULT_VALUE).

## 11 Interaction State Matrix
Interactive elements implement `default/hover/active/focus-visible/disabled` using Tailwind classes.
- Buttons: dark background default, darker on hover, outline on focus-visible.
- Links: underline on hover and keyboard focus.
- Inputs: neutral border default, visible outline on focus.
- Empty/select/open/loading/error states are documented for template forms and listing data guards.

## 12 Responsive Rule Tree
- Base/mobile: two-column listing cards, compact 56px header, stacked details.
- `md`: nav links appear, detail and story sections become two-column.
- `lg`: five-column listing where blueprint implies wider desktop grids.
All breakpoint adjustments are COMPUTED_VALUE from desktop/mobile references.

## 13 Accessibility Map
- `header/nav/main/footer` landmarks present.
- Icon-only links include `aria-label`.
- Images include `alt` text.
- Form controls retain focus-visible styles and semantic inputs.
- Keyboard path: header links -> page controls -> form/grid items.

## 14 Animation Map
- No explicit blueprint motion; transitions minimized.
- Hover/focus transitions: color/background/underline only.
- Animation baseline: none (DEFAULT_VALUE).

## 15 Validation Plan
1. Render each route at 1440 and mobile widths.
2. Compare grid count, spacing rhythm, typography scale, and layer ordering.
3. Check image aspect behavior (`object-cover`) and CTA alignment.
4. Validate fallback/template pages for consistency with extracted system.

## 16 Global Default Values Used
- `n-footer-shadow`: no shadow visible -> none (DEFAULT_VALUE).
- Missing modal layers -> none (DEFAULT_VALUE).
- Missing explicit font family declarations -> system sans fallback (DEFAULT_VALUE).
- Unreferenced routes use locked templates with base spacing scale (DEFAULT_VALUE/COMPUTED_VALUE).

## 17 Missing Reference Pages
| route | expected blueprint filename | chosen template | derived from | computed/default notes |
|---|---|---|---|---|
| `/about` | about-desktop.png (inferred) | StaticPage | home about block | prose spacing COMPUTED_VALUE |
| `/customer-service` | customer-service.png (inferred) | StaticPage | footer help content | section copy DEFAULT_VALUE |
| `/legal-privacy` | legal-privacy.png (inferred) | StaticPage | footer/help typography | legal paragraphs DEFAULT_VALUE |
| `/find-a-store` | find-a-store.png (inferred) | StaticPage | footer address block | map block omitted DEFAULT_VALUE |
| `/shop`,`/bags`,`/accessories` | listing variants | ListingPage | new-arrivals desktop + listing mobile | filters and pagination COMPUTED_VALUE |
| `/checkout`,`/contact`,`/account`,`/affiliates`,`/gift-card`,`/careers` | form variants | FormPage | detail form area + cart typography | form card spacing COMPUTED_VALUE |
| `/blog/[slug]`,`/careers/[slug]` | detail variants | DetailPage | product desktop detail | content blocks DEFAULT_VALUE |
| `/404` | 404.png (inferred) | NotFoundPage (System) | cart empty-state visual language | CTA + card style COMPUTED_VALUE |

System Consistency Checklist: all missing pages keep locked templates, container hierarchy, token palette, responsive rules, accessibility primitives, and no overflow regressions.
