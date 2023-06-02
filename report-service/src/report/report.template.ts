
export class ReportTemplate {

  getHTML() {
    `
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

      <h2>Dados do Veículo ${vehicleIndex}:</h2>
      <ul>
        <li><strong>ID:</strong> <span> ${vehicleId}</span></li>
        <li><strong>Placa:</strong> <span>${vehiclePlate}</span></li>
        <li><strong>Cor:</strong> <span>${vehicleColor}</span></li>
        <li><strong>Modelo:</strong> <span>${vehicleModel}</span></li>
        <li><strong>Marca:</strong> <span>${vehicleBrand}</span></li>
        <li><strong>Data de Criação:</strong> <span>${vehicleBrand}</span></li>
        <li><strong>Ano:</strong> <span>${vehicleYear}</span></li>
      </ul>

    </body>
    </html>
    `
  }
}