import React, { useEffect } from "react";
import RoutesApp from "./routes/Routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import socket from "./services/socket";

const App = () => {
  useEffect(() => {
    socket.connect();
    // Ouvir o evento "reports" do servidor WebSocket
    socket.on('report', (data) => {
      if (data && data.message) {
        console.log(data.message);
        toast.info(data.message);
      }
    });

    return () => {
      // Desconectar do servidor WebSocket ao desmontar o componente
      socket.off("reports");
    };
  }, []);

  return (
    <AuthProvider>
      <ToastContainer />
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;