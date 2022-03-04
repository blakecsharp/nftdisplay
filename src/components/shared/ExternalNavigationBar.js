import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ExternalNavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: "2vh",
        position: "static",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        border: "1",
        borderColor: "blue",
      }}
    >
      <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
        LOGO
      </Typography>

      <Button onClick={() => navigate("/login")}>Login</Button>
    </Container>
  );
};
export default ExternalNavigationBar;
