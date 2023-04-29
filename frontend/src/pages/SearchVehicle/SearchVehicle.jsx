import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";

const SearchVehicle = () => {
  const [searchVehicle, setSearchVehicle] = useState("");

  return (
    <C.Container>
      <C.Label>Pesquisa de veiculo</C.Label>
      <C.Content>
        <Input
          type="title"
          placeholder="Digite o nome do veículo"
          value={searchVehicle}
          onChange={(e) => [setSearchVehicle(e.target.value)]}
        />
        <Button Text="Buscar"/>
      </C.Content>
    </C.Container>
  );
};

export default SearchVehicle;