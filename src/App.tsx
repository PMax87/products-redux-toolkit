import { Provider } from "react-redux";
import { store } from "./redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PRova from "./PRova";
import Pippo from "./Pippo";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PRova />
        <Pippo />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
