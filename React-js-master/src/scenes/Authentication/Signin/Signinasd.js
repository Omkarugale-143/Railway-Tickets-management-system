import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../image-1.png"
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  React.useEffect(()=>{
    props.setWlc(false);
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const datapass = {
        email: data.get('email'),
        password: data.get('password'),
      };
      const response = await axios.post(`http://localhost:8080/user/login`, datapass);
      if (response.status === 200) {
        
        props.setWlc(true);
        toast.success(response.data.message);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{background: `url(${img})`,backgroundSize: 'cover', 
  backgroundPosition: 'center',backgroundRepeat:"no-repeat" , height:"100vh"}}>
      <Container component="main" maxWidth="xs" sx={{pt:10}} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "White",
            // color: colors.grey[100],
            borderRadius: '10px',
            p:3,
            
            

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colors.primary[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1"  variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} color={colors.grey[100]} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: colors.primary[500] }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              
              <Grid item>
                <Link href="/signup" style={{color:colors.primary[500]}} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
      </div>
    </ThemeProvider>
  );
}