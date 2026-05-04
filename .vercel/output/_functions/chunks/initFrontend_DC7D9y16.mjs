import SuperTokens from 'supertokens-web-js';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword/index.js';
import Session from 'supertokens-web-js/recipe/session/index.js';
import ThirdParty from 'supertokens-web-js/recipe/thirdparty/index.js';

let frontendInitialized = false;
function ensureSuperTokensFrontendInitialized() {
  if (typeof window === "undefined" || frontendInitialized) {
    return;
  }
  frontendInitialized = true;
  const apiDomain = window.location.origin;
  SuperTokens.init({
    appInfo: {
      appName: "Wheelchair Rugby Manager",
      apiDomain,
      apiBasePath: "/api/auth"
    },
    recipeList: [EmailPassword.init(), ThirdParty.init(), Session.init()]
  });
}

export { ensureSuperTokensFrontendInitialized as e };
