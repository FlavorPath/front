import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import { Suspense } from 'react';
import LoadingPage from './pages/LoadingPage';

function App() {
  const appRouter = createBrowserRouter(router);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={<LoadingPage />}
      >
        <RouterProvider router={appRouter} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
