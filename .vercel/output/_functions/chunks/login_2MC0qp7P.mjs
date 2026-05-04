import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_BRj9trZt.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { L as LandingPage } from './LandingPage_TTof7UN_.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logowanie — Wheelchair Rugby Manager" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", LandingPage, { "client:load": true, "initialLoginOpen": true, "client:component-hydration": "load", "client:component-path": "@/components/LandingPage/LandingPage", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/login.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
