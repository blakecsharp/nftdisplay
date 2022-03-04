import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { auth } from "../../AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

import ExternalNavigationBar from "../shared/ExternalNavigationBar";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
  }, [user, loading]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#ffffff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ExternalNavigationBar />
      <Box
        sx={{
          display: "flex",
        }}
      >
        Create a beautiful way to display your NFTs
      </Box>
    </Container>
  );
};

export default Home;
