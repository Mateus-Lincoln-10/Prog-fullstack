import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import PublicationVehicle from "../pages/PublicationVehicle/PublicationVehicle";
import SearchVehicle from "../pages/SearchVehicle/SearchVehicle";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ element: Component, ...props }) => {
  const { isLogged } = useAuth();

  return isLogged() ? <Outlet /> : <Navigate to="/"/>
};

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route  element={<PrivateRoute/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/publication" element={<PublicationVehicle />} />
          <Route path="/search-vehicle" element={<SearchVehicle />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;