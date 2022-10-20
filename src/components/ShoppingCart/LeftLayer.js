import React, { useEffect, useState } from "react";

import {
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MiniPaymentComponent from "./MiniPaymentComponent";
import MiniShippingComponent from "./MiniShippingComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../../redux/cartRedux";

const LeftLayer = () => {
  const getredux = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
      email: '',
      phone_number: 0,
      name: '',
      surname: '',
      address: '',
      City: '',
      zipCode: 0,
  })

  console.log(getredux)

  const [fetch, setFetch] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/api/methods').then(data => setFetch(data.data))

   }, [])



   const handleChange = (e) => {
    
    dispatch(addInfo({
      [e.target.name]: e.target.value 
    }))
   }

  return (
    <Paper sx={{ width: "100%", minHeight: "400px" }}>
      <Stack sx={{ p: 5 }} spacing={2}>
        <Typography>Metoda płatności:</Typography>
        <Stack>
          <Grid container spacing={1}>
            {fetch && fetch.map((item) => (
                item.type == "pay" ? <MiniPaymentComponent key={item._id} cardDetails={item} /> : ""
                
          ))}
          </Grid>
        </Stack>
        <Typography>Dostawa:</Typography>
        <Stack>
          <Grid container spacing={1}>
          {fetch && fetch.map((item) => (
                item.type == "deliver" ? <MiniShippingComponent key={item._id} cardDetails={item} /> : ""
            ))}
          </Grid>
        </Stack>
        <Typography>Dane odbiorcy:</Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <TextField label="Email" name="email" onChange={(e)=>handleChange(e)}/>
          <TextField label="Numer telefonu" name="phone_number" onChange={(e)=>handleChange(e)}/>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <TextField label="Imie" name="name" onChange={(e)=>handleChange(e)}/>
          <TextField label="Nazwisko" name="surname" onChange={(e)=>handleChange(e)}/>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <TextField label="Ulica i nr budynku" name="address" onChange={(e)=>handleChange(e)}/>
          <TextField label="Miasto" name="city" onChange={(e)=>handleChange(e)}/>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <TextField label="Kod pocztowy" name="zipCode" onChange={(e)=>handleChange(e)}/>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default LeftLayer;
