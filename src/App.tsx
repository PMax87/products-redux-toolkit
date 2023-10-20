import { Provider } from "react-redux";
import { store } from "./redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PRova from "./PRova";
import Pippo from "./Pippo";
import { Navbar } from "./components";

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
        <Router>
          <Navbar />
          <PRova />
          <Pippo />
        </Router>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
