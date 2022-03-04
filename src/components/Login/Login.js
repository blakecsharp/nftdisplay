import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { auth } from "../../AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

import ExternalNavigationBar from "../shared/ExternalNavigationBar";
import TextInput from "../shared/TextInput";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      <TextInput
        id="email-input"
        value={email}
        handleChange={(e) => {
          console.log(e.target.value);
          setEmail(e.target.value);
        }}
        placeholder={"Email"}
        style={{ width: "50%" }}
        border="black"
      />
      <TextInput
        id="password-input"
        value={password}
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder={"Password"}
        style={{ width: "50%" }}
        border="black"
        type="password"
      />
    </Container>
  );
};

export default Home;
