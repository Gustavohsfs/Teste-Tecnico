import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { apiVagas, apiVagasPage } from "../api/api";
import { DataGrid } from "@mui/x-data-grid";

const Vagas = () => {
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Vaga",
      width: 600,
      editable: true,
    },
    {
      field: "html_url",
      headerName: "Link da Página",
      width: 330,
      editable: false,
    },
    {
      field: "labels",
      headerName: "Labels",
      width: 500,
      height: 800,
      editable: false,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const [busca, setBusca] = useState("");
  const [dados, setDados] = useState([]);
 

  useEffect(() => {
    (async () => {
      const response = await apiVagasPage();
      setDados(response.data);
    })();
  }, []);

  const labels  = dados.map((label) => (label.labels))
  console.log(labels)
  const rows = dados;
  //const rows1  = dados.map((titulo) => titulo.title)
  //const dadosFiltrados = rows1.filter((dado) => dado.toLowerCase().includes(busca.toLowerCase()))
  const dadosFiltrados = rows.filter((dado) =>
    JSON.stringify(dado).toLowerCase().includes(busca.toLowerCase())
  );

  //console.log(dadosFiltrados);

  return (
    <>
      <div style={{ height: 700, width: "100%" }}>
        <input
          type="text"
          value={busca}
          onChange={(event) => {
            setBusca(event.target.value);
          }}
        />
        <DataGrid
          rows={dadosFiltrados}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
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
