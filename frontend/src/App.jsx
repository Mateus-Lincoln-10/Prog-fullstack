import React from "react";
import RoutesApp from "./routes/Routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/AuthContext";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;