import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_BRj9trZt.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { signInAndUp } from 'supertokens-web-js/recipe/thirdparty/index.js';
import { e as ensureSuperTokensFrontendInitialized } from './initFrontend_DC7D9y16.mjs';

function SuperTokensOAuthFinish() {
  const [message, setMessage] = useState("Completing sign-in…");
  useEffect(() => {
    let cancelled = false;
    (async () => {
      ensureSuperTokensFrontendInitialized();
      try {
        const result = await signInAndUp();
        if (cancelled) return;
        if (result.status === "OK") {
          window.location.replace("/dashboard");
          return;
        }
        if (result.status === "SIGN_IN_UP_NOT_ALLOWED") {
          setMessage(result.reason || "Ten e-mail jest już używany przez inne konto.");
          return;
        }
        setMessage("Sign-in with Google did not complete. Please try again.");
      } catch {
        if (!cancelled) setMessage("Something went wrong. Please try again.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return /* @__PURE__ */ jsx("p", { children: message });
}

const $$Callback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logowanie" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SuperTokensOAuthFinish", SuperTokensOAuthFinish, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/SuperTokensOAuthFinish", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/auth/callback.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/auth/callback.astro";
const $$url = "/auth/callback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Callback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
