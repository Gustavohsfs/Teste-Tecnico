import React, { useState, useEffect } from "react";
import { apiServerBack, apiVagasBack } from "../api/api";
import { DataGrid } from "@mui/x-data-grid";
import { Container, TextField, Typography } from "@mui/material";

const VagasBack = () => {
  const [busca, setBusca] = useState("");
  const [dados, setDados] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      if (busca.length > 0) {
        setSearch(busca);
        const response = await apiServerBack(search);
        setDados(response.data);
      } else {
        const response = await apiVagasBack();
        setDados(response.data);
      }
    })();
  }, [search, busca]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "titulo",
      headerName: "Vaga",
      width: 500,
      editable: false,
    },
    {
      field: "link",
      headerName: "Link da Página",
      width: 330,
      editable: false,
    },
    {
      field: "nomes",
      headerName: "Labels",
      width: 740,
      editable: false,
    },
  ];

  const rows = dados.map((nome) => {
    return {
      id: nome.id,
      link: nome.html_url,
      titulo: nome.title,
      nomes: nome.labels.map((nomear) => nomear.name),
    };
  });

  const dadosFiltrados = rows.filter((dado) =>
    JSON.stringify(dado).toLowerCase().includes(busca.toLowerCase())
  );

  function handleEventInput(event) {
    if (event.key === "Enter") {
      setBusca(event.target.value);
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <Typography align="center" variant="h3" component="h1" mt={1}>
          Vagas Back-End
        </Typography>
        <TextField
          id="filtro"
          label="Pesquise sua vaga"
          variant="outlined"
          type="text"
          onKeyUp={handleEventInput}
          fullWidth
        />
      </Container>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={dadosFiltrados}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          rowHeight={50}
          sx={{
            margin: 2,
            fontSize: 12,
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </>
  );
};

export default VagasBack;
