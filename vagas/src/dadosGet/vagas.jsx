import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { apiVagas } from "../api/api";
import { DataGrid } from "@mui/x-data-grid";

const Vagas = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'title',
          headerName: 'Vaga',
          width: 600,
          editable: true,
        },
        {
          field: 'html_url',
          headerName: 'Link da Página',
          width: 600,
          editable: false,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];



  const [dados, setDados] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiVagas();
      setDados(response.data);
    })();
  }, []);

  
const rows = dados

    const rows1  = dados.map((titulo) => titulo.title)

      console.log(rows)
    
 
 

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default Vagas;

/*
<>
 <Container className="container-grid" maxWidth="lg">
        <ul>
          {dados.map((vaga) => (
            <li key={vaga.id}>{vaga.title}</li>
          ))}
        </ul>
      </Container>
</>
*/
