import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_B-rHfi_b.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { S as SeasonForm } from './SeasonForm_Be_2wB7o.mjs';

const $$Edit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Edit;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/settings");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edytuj sezon" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SeasonForm", SeasonForm, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/settings/components/SeasonForm/SeasonForm", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/seasons/[id]/edit.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/seasons/[id]/edit.astro";
const $$url = "/settings/seasons/[id]/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
