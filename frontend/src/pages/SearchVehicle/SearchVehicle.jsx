import React, { useState, useMemo, useCallback } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import api from './../../services/api';
import { useAuth } from "../../hooks/useAuth";

const SearchVehicle = () => {
  const [searchVehicle, setSearchVehicle] = useState("");
  const [vehicleList, setVehicleList] = useState([]);
  const { isLogged } = useAuth()

  console.log(vehicleList);

  const handleSearch = async () => {
    try {
      const response = await api.get('/vehicle', {
        headers: {
          Authorization: `Bearer ${isLogged()}`
        },
        params: {
          search: searchVehicle
        }
      });

      setVehicleList(response.data)
    } catch(e) {
      console.error(e);
    }
  }

  const handleCards = useCallback((vehicle) => {
    return (
      <C.Card key={vehicle.id}>
        <span><C.Strong>Modelo: </C.Strong> <C.Label>{vehicle.vehicleModel}</C.Label></span>
        <span><C.Strong>Placa: </C.Strong> <C.Label>{vehicle.vehiclePlate}</C.Label></span>
        <span><C.Strong>Cor: </C.Strong> <C.Label>{vehicle.vehicleColor}</C.Label></span>
        <span><C.Strong>Marca: </C.Strong> <C.Label>{vehicle.vehicleBrand}</C.Label></span>
      </C.Card>
    );
  }, [searchVehicle]);

  const cardList = useMemo(() => {
    return vehicleList.map(handleCards);
  }, [vehicleList]);

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
        <Button Text="Buscar" onClick={handleSearch}/>
      </C.Content>
      <C.Title>Resultado da Pesquisa</C.Title>
      {vehicleList.length > 0 && (
        <C.CardContainer>
          {cardList}
        </C.CardContainer>
      )}
    </C.Container>
  );
};

export default SearchVehicle;