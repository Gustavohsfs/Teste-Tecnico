import React, { useState, useEffect } from "react";
import { apiVagasPage } from "../api/api";
import { DataGrid } from "@mui/x-data-grid";

const Vagas = () => {
  const [busca, setBusca] = useState("");
  const [dados, setDados] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await apiVagasPage();
      setDados(response.data);
    })();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "titulo",
      headerName: "Vaga",
      width: 540,
      editable: true,
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
      width: 500,
      height: 800,
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
          rowHeight={50}
        />
      </div>
    </>
  );
};

export default Vagas;
