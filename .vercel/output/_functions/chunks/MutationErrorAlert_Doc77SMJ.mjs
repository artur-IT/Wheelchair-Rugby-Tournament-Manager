import { jsx } from 'react/jsx-runtime';
import { A as Alert } from './ThemeRegistry_BXk5lg02.mjs';

function MutationErrorAlert({
  error,
  fallbackMessage = "Wystąpił błąd podczas zapisywania zmian."
}) {
  if (!error) return null;
  const message = error instanceof Error ? error.message : fallbackMessage;
  return /* @__PURE__ */ jsx(Alert, { severity: "error", children: message });
}

export { MutationErrorAlert as M };
