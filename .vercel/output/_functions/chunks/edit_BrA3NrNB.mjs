import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_B-rHfi_b.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';

const $$Edit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Edit;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/tournaments");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edytuj turniej" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TournamentForm", null, { "client:only": "react", "tournamentId": id, "client:component-hydration": "only", "client:component-path": "@/features/tournaments/components/TournamentForm/TournamentForm", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/tournaments/[id]/edit.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/tournaments/[id]/edit.astro";
const $$url = "/tournaments/[id]/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
