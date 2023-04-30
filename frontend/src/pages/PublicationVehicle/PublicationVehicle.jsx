import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const PublicationVehicle = () => {
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const {isLogged} = useAuth();
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
        const response = await api.post('/vehicle', {
          vehiclePlate,
          vehicleColor,
          vehicleModel,
          vehicleBrand
        }, {
          headers: {
            Authorization: `Bearer ${isLogged()}`,
          }
        })

      if(response.status === 201) {
        toast.success('Vehicle registered successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light"
          });
      } 

      navigate('/home');
    } catch(e) {
      toast.error('Failed to register Vehicle',  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored"
        })
    }
  }

  return (
    <C.Container>
      <C.Label>Publicação de veiculo</C.Label>
      <C.Content>
      <ToastContainer />
        <Input
          type="plate"
          placeholder="Digite a placa"
          value={vehiclePlate}
          onChange={(e) => [setVehiclePlate(e.target.value)]}
        />
         <Input
          type="color"
          placeholder="Digite a cor"
          value={vehicleColor}
          onChange={(e) => [setVehicleColor(e.target.value)]}
        />
        <Input
          type="model"
          placeholder="Digite o modelo"
          value={vehicleModel}
          onChange={(e) => [setVehicleModel(e.target.value)]}
        />
          <Input
          type="Brand"
          placeholder="Digite a marca"
          value={vehicleBrand}
          onChange={(e) => [setVehicleBrand(e.target.value)]}
        />
        <Button Text="Cadastrar" onClick={handlePost}/>
      </C.Content>
    </C.Container>
  );
};

export default PublicationVehicle;