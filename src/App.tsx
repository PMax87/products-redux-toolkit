import { Provider } from "react-redux";
import { store } from "./redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer, Navbar, SingleProductPage } from "./components";
import { HomePage, ProductsPage } from "./pages";

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
