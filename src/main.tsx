import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./Common/Context/AuthContext.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </Router>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
