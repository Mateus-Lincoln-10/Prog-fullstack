import {React, useState} from 'react';
import * as C from "./styles";

const ReportList = () => {
      const [reportId, setReportId] = useState("");
      const { isLogged } = useAuth();

      const handleReport = async () => {
        try {
          const response = await api.get('/report', {
            headers: {
              Authorization: `Bearer ${isLogged()}`
            },
          });

          if(response.data.length === 0) {
            toast.warning(response.data.message,  {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light"
              })
          }
          setReportList(response.data)
        } catch(e) {
          console.error(e);
        }
      }

  return (
    <C.Container>

    <table className="report-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Url</th>
          <th>Criado em</th>
        </tr>
      </thead>
      <tbody>
      {/*
          <tr key={reportId}>
            <td>{vehiclePlate}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
    </C.Container>
  );
};

export default ReportList;


