import { jsx } from 'react/jsx-runtime';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

function QueryProvider({ children }) {
  const [client] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: 60 * 1e3
        }
      }
    })
  );
  return /* @__PURE__ */ jsx(QueryClientProvider, { client, children });
}

export { QueryProvider as Q };
