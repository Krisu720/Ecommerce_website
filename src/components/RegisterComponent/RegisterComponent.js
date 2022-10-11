import { Button, Container, Paper, Stack, TextField, Typography,  } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const RegisterComponent = () => {
    const [messages,setMessages] = useState('dd')
    
    const [registerForm, setRegisterForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const fieldChange = (e) => {
        setRegisterForm(prevRegisterForm=>({
            ...prevRegisterForm,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = () => {
      try {
        axios.post('http://localhost:3001/users/', {
          ...registerForm
      }).then(function (response) {
        setMessages(response.data.message)
      })
      } catch(e) {
        console.log(e)
      }
      
    }
  return (
    <Container>
      <Paper sx={{marginTop: '35px'}}>
        <Stack spacing={2} sx={{margin: '15px'}}>
            <TextField name="name" label='imię' value={registerForm.name} onChange={fieldChange}/>
            <TextField name="surname" label='nazwisko' value={registerForm.surname} onChange={fieldChange}/>
            <TextField name="email" label='Email' type='email' value={registerForm.email} onChange={fieldChange}/>
            <TextField name="password" label='password' type='password' value={registerForm.password} onChange={fieldChange}/>
            <TextField name="repeatPassword" label='repeat password' type='password' value={registerForm.repeatPassword} onChange={fieldChange}/>
            <Button variant='contained' onClick={handleClick}>Register Account</Button>
        <Typography sx={{color: 'red'}}>{messages}</Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default RegisterComponent;
