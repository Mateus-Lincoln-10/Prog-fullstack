import { VehicleDto } from './vehicle.dto';

export class ReportTemplate {
  getVehicles(vehicles: VehicleDto[]) {
    let vehicleBlock = '';

    for (let vehicleIndex = 0; vehicleIndex < vehicles.length; vehicleIndex++) {
      const vehicle = vehicles[vehicleIndex];
      vehicleBlock += `
      <h2>Dados do Veículo ${vehicleIndex + 1}:</h2>
      <ul>
        <li><strong>ID:</strong> <span>${vehicle.vehicleId}</span></li>
        <li><strong>Placa:</strong> <span>${vehicle.vehiclePlate}</span></li>
        <li><strong>Cor:</strong> <span>${vehicle.vehicleColor}</span></li>
        <li><strong>Modelo:</strong> <span>${vehicle.vehicleModel}</span></li>
        <li><strong>Marca:</strong> <span>${vehicle.vehicleBrand}</span></li>
        <li><strong>Ano:</strong> <span>${vehicle.vehicleYear}</span></li>
      </ul>
      `;
    }
    return vehicleBlock;
  }

  getHTML(vehicles: VehicleDto[]) {
    const string = `
    <!DOCTYPE html>
    <html>

    <head>
      <title>Relatório Veículos</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }

        h1 {
          text-align: center;
        }

        ul {
          list-style-type: none;
          padding: 0;
          border-bottom: solid 1px #bebebe;
        }

        ul li {
          margin-bottom: 16px;
        }

        ul li h2 {
          margin-bottom: 10px;
        }

        ul li ul {
          margin-left: 0px;
        }

        strong {
          font-weight: bold;
          color: #222222;
        }

        span {
          font-weight: normal;
          color: #3b3b3b;
        }
      </style>
    </head>

    <body>
      <h1>Listagem de Veículos</h1>

        ${this.getVehicles(vehicles)}

    </body>
    </html>
    `;
    return string;
  }
}
