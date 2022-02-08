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

  const labels = dados.map((label) => label.labels);

//IMPORTANTE
  //const nomes = labels.map((nome) => nome.map((nm) => nm.name));

  
//dá certo
/*
  const nomes = labels.map((nome) => {
    return {
      id: nome.map((nm) => nm.id),
      nomes: nome.map((nm) => nm.name ),
    }
  });
*/

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
      //valueGetter: ({ value }) =>  {for(var i = 0; i<nomes.length ; i++){ value = nomes[i]; return value}} ,
      editable: false,
    },
  ];

  const rows = dados.map((nome) => {
    
  
    return {
      id: nome.id,
      link: nome.html_url,
      titulo: nome.title,
      nomes: nome.labels.map((nomear) => nomear.name)
    };
  });

  /*
  const rows = dados.map((nome) => {
    const nomear = labels.map((e) => e.map((nm) => nm.name));

    return {
      id: nome.id,
      link: nome.html_url,
      titulo: nome.title,
      nomes: nomear
    };
  });
  */

  //const rows = dados;

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
          rowHeight={50}
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
