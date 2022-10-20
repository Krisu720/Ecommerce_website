import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { publicRequest } from "../../requests";

const RegisterComponent = () => {
  const [messages, setMessages] = useState("");

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const fieldChange = (e) => {
    setRegisterForm((prevRegisterForm) => ({
      ...prevRegisterForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    try {
      const { repeatPassword, ...other } = registerForm;
      const sendData = other;
      publicRequest
        .post("/auth/register", {
          ...sendData,
        })
        .then(function (response) {
          setMessages(response.data.message);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container maxWidth='md'>
      <Paper sx={{ marginTop: "35px" }}>
        <Stack spacing={2} sx={{ margin: "15px" }} >
          <Typography sx={{padding: 2,fontWeight:500}} variant="h1">Zarejestruj się</Typography>
          <TextField
            name="firstName"
            label="imię"
            value={registerForm.firstName}
            onChange={fieldChange}
          />
          <TextField
            name="surname"
            label="nazwisko"
            value={registerForm.surname}
            onChange={fieldChange}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={registerForm.email}
            onChange={fieldChange}
          />
          <TextField
            name="password"
            label="password"
            type="password"
            value={registerForm.password}
            onChange={fieldChange}
          />
          <TextField
            name="repeatPassword"
            label="repeat password"
            type="password"
            value={registerForm.repeatPassword}
            onChange={fieldChange}
          />
          <Button variant="contained" onClick={handleClick}>
            Register Account
          </Button>
          <Typography sx={{ color: "red" }}>{messages}</Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default RegisterComponent;
