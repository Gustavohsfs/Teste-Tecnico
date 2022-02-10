import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import VagasFront from "../dadosGet/front";

const FrontPage = () => {
  return (
    <>
    <Link to="/">
    <Button variant="contained" color="primary">Home</Button>
    </Link>
      <VagasFront />
    </>
  );
};

export default FrontPage;
