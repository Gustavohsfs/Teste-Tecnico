import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import VagasBack from "../dadosGet/back";

const BackPage = () => {
  return (
    <>
    <Link to="/">
    <Button variant="contained" color="primary">Home</Button>
    </Link>
      <VagasBack />
    </>
  );
};

export default BackPage;
