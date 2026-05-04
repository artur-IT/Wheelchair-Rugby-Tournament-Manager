import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { a4 as addAttribute, b7 as renderHead, b8 as renderSlot, Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Wheelchair Rugby Manager" } = Astro2.props;
  return renderTemplate`<html lang="pl" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
