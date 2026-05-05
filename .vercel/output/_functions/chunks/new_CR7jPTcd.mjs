import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_B-rHfi_b.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { T as TeamForm } from './TeamForm_CAo22NmU.mjs';

const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nowa drużyna" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamForm", TeamForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/teams/components/Team/TeamForm/TeamForm", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/teams/new.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/teams/new.astro";
const $$url = "/settings/teams/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
