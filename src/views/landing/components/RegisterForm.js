import React, {useState, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {NavLink} from 'react-router-dom'; 
import {useForm, Controller} from "react-hook-form";
import services from "../../../services/auth";
import { UserContext } from "../../../services/userContext";
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Collapse from "@mui/material/Collapse"
import Alert from '@mui/material/Alert';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://joaoemmerich.com">
        Joao Emmerich
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function LoginForm() {
    const theme = useTheme();
    const { login } =useContext(UserContext);
    const [open, setOpen] = useState(false)
    const [error, setError] = useState("");
    const submitRegister = async (data, e) => {
      try {
        e.preventDefault();
        const {username, password, email} = data;
        const user = await services.registerNewUser(username, password, email);
        login(user);
       } catch (error) {
         setOpen(true)
   setError(error.response.data.error);
   setTimeout(() => {
    setError("");
    setOpen(false)
  }, 3000);
      }
    };
  const {control, handleSubmit, watch} = useForm({defaultValues:{}});
  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ width: '100%' }}>
          <Container>
      <Collapse in={open}>
       {error && 
        <Alert
        severity="error"
          action={
            <IconButton
              aria-label="close"
              color="error"
              size="small"
              onClick={() => {
                setError("")
                setOpen(false);
              }}

           
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert> }


      </Collapse>
        </Container>
        </Box>
          <Box component="form" onSubmit={handleSubmit(submitRegister)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
              <Controller
        name="username"
        control={control}
        rules={{required: "Campo requerido",
        minLength: {value: 6, message: "El nombre de usuario tiene que tener mínimo de 6 letras" }}}
        render={({field, fieldState: {error}})=><TextField margin='normal' fullWidth autoFocus helperText={error? error.message : null} error={!!error} {...field} variant="outlined" label="Nombre de usuario"></TextField>}>
        </Controller>
              </Grid>
            
              <Grid item xs={12}>
              <Controller
        name="email"
        control={control}
        rules={{required: "Campo requerido",
        pattern: {value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Formato del correo no es valido."}}}
        render={({field, fieldState: {error}})=><TextField margin='normal' fullWidth helperText={error? error.message : null} error={!!error} {...field} variant="outlined" label="Correo Electronico"></TextField>}>
        </Controller>
              </Grid>
              <Grid item xs={12}>
              <Controller
        name="password"
        control={control}
        rules={{required: "Campo requerido"}}
        render={({field, fieldState: {error}})=><TextField margin='normal' fullWidth helperText={error? error.message : null} error={!!error} {...field} variant="outlined" label="Password" type="password"></TextField>}>
        </Controller>
        
              </Grid>
              <Grid item xs={12}>
              <Controller
        name="passwordRepeat"
        control={control}
        rules={{required: "Campo requerido",
        validate: value => value === watch('password') || "Contraseñas diferentes"
      }}
        render={({field, fieldState: {error}})=><TextField margin='normal' fullWidth helperText={error? error.message : null} error={!!error} {...field} variant="outlined" label="Repetir Password" type="password"></TextField>}>
        </Controller>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/login">
                  Ya tienes una cuenta? Acceder

                </NavLink>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
       
        </Container>

  )
}