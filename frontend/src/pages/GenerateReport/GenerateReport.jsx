import {React, useEffect, useState} from 'react';
import * as C from "./styles";
import { useAuth } from './../../hooks/useAuth';
import api from './../../services/api';
import { useMemo } from 'react';
import { useCallback } from 'react';

const ReportList = () => {
      const [reportList, setReportList] = useState([]);
      const { isLogged } = useAuth();

      useEffect(() => {
        handleReport()
      },[])

      const handleReport = useCallback(async () => {
        try {
          const response = await api.get('/report', {
            headers: {
              Authorization: `Bearer ${isLogged()}`
            }
          });
          console.log(response);
          setReportList(response.data);
        } catch (e) {
          console.error(e);
        }
      }, [isLogged]);

      const handleCards = useCallback((report) => {
        return (
          <C.Card key={report.reportId}>
            <span><C.Strong>Data de criação: </C.Strong> <C.Label>{report.reportCreatedAt}</C.Label></span>
            <span><C.Strong>URL: </C.Strong> <C.Label>{report.reportUrl}</C.Label></span>
            <span><C.Strong>ID: </C.Strong> <C.Label>{report.reportId}</C.Label></span>
          </C.Card>
        );
      }, []);

      const cardList = useMemo(() => {
        if(reportList.length === 0) {
          return;
        }
        return reportList.map(handleCards);
      }, [handleCards, reportList]);

  return (
    <C.Container>

      <C.Title>Resultado da Pesquisa</C.Title>
        {reportList.length > 0 && (
          <C.CardContainer>
            {cardList}
          </C.CardContainer>
        )}
    </C.Container>
  );
};
export default ReportList;


