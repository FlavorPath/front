import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes/router";
import Layout from "./ui/components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const appRouter = createBrowserRouter(router);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
