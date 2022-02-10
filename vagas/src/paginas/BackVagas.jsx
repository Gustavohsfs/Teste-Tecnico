import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import VagasBack from "../dadosGet/vagas";

const BackPage = () => {
  return (
    <>
    <Link to="/">
    <Button>Home</Button>
    </Link>
      <VagasBack />
    </>
  );
};

export default BackPage;
