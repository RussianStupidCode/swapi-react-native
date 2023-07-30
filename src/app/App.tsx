import { QueryClient, QueryClientProvider } from "react-query";

import { Router } from "@/pages/router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router></Router>
    </QueryClientProvider>
  );
};

export { App };
