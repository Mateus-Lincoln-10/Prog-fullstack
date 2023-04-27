import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [publicationTitle, setPublicationTitle] = useState("");
  const [publicationDescription, setPublicationDescription] = useState("");
  const [vehiculoPlate, setVehiculoPlate] = useState("");
  const [vehiculoColor, setVehiculoColor] = useState("");
  const [vehiculoModel, setVehiculoModel] = useState("");
  const [vehiculoBrand, setVehiculoBrand] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();


  return (
    <C.Container>
      <C.Label>Publicação de veiculo</C.Label>
      <C.Content>
        <Input
          type="title"
          placeholder="Digite o título da publicação"
          value={publicationTitle}
          onChange={(e) => [setPublicationTitle(e.target.value)]}
        />
        <Input
          type="description"
          placeholder="Descrição"
          value={publicationDescription}
          onChange={(e) => [setPublicationDescription(e.target.value)]}
        />
        <Input
          type="plate"
          placeholder="Digite a placa"
          value={vehiculoPlate}
          onChange={(e) => [setVehiculoPlate(e.target.value)]}
        />
         <Input
          type="color"
          placeholder="Digite a cor"
          value={vehiculoColor}
          onChange={(e) => [setVehiculoColor(e.target.value)]}
        />
        <Input
          type="model"
          placeholder="Digite o modelo"
          value={vehiculoModel}
          onChange={(e) => [setVehiculoModel(e.target.value)]}
        />
          <Input
          type="Brand"
          placeholder="Digite a marca"
          value={vehiculoBrand}
          onChange={(e) => [setVehiculoBrand(e.target.value)]}
        />
        <Button Text="Cadastrar"/>
      </C.Content>
    </C.Container>
  );
};

export default Signup;