import {
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import {LoadingButton} from '@mui/lab';
  import React, { useState } from "react";
  import { publicRequest } from "../../requests";
  import { login } from "../../redux/apiCalls";
import {useDispatch, useSelector} from 'react-redux'
import CircularProgress from "@mui/material/CircularProgress";

  const LoginComponent = () => {
    const user = useSelector((state)=>state.user)
    const [messages, setMessages] = useState("");
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState({
      email: "",
      password: "",
    });
  
    const fieldChange = (e) => {
      setLoginForm((prevLoginForm) => ({
        ...prevLoginForm,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleClick = (e) => {
      e.preventDefault()
      login(dispatch,{...loginForm})
      // try {
      //   const { repeatPassword, ...other } = loginForm;
      //   const sendData = other;
      //   publicRequest
      //     .post("/auth/login", {
      //       ...sendData,
      //     })
      //     .then(function (response) {
      //       setMessages(response.data.message);
      //       console.log(response)
      //     });
      // } catch (e) {
      //   console.log(e);
      // }
    };
    return (
      <Container maxWidth='md'>
        <Paper sx={{ marginTop: "35px" }}>
          <Stack spacing={2} sx={{ margin: "15px" }} >
            <Typography sx={{padding: 2,fontWeight:500}} variant="h1">Zaloguj się</Typography>
            <TextField
              name="email"
              label="Email"
              type="email"
              value={loginForm.email}
              onChange={fieldChange}
            />
            <TextField
              name="password"
              label="password"
              type="password"
              value={loginForm.password}
              onChange={fieldChange}
            />
            <LoadingButton loading={user.isFetching} variant="contained" onClick={handleClick}>
              Zaloguj
            </LoadingButton>
            {user.error != '' && <Typography sx={{ color: "red" }}>Nieprawidłowe dane</Typography>}
          </Stack>
        </Paper>
      </Container>
    );
  };
  
  export default LoginComponent;
  