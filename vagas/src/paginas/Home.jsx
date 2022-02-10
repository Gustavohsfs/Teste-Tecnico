import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
  <>
  <Link to="/front">
  <Button>Vagas Front-End</Button>
  </Link>
  <Link to="/back">
  <Button>Vagas Back-End</Button>
  </Link>
  </>
  );
};

export default Home;
