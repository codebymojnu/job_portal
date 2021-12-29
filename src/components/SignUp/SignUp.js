import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = createTheme();


const handleSigninClick = () => {
  document.getElementById('signinArea').style.display = 'block';
  document.getElementById('signupArea').style.display = 'none';
}

const handleSignUpClick = () => {
  document.getElementById('signinArea').style.display = 'none';
  document.getElementById('signupArea').style.display = 'block';
}
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  // eslint-disable-next-line no-console
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

const SignUp = () => {
  return (
    <div>
      <div id="signupArea">
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 1,
                  m: 1,
                }}>
                  <Button style={{cursor: 'pointer', backgroundColor: '#000000', color: '#5bbc2e', padding: '10px'}} id="clickSignin" onClick={handleSigninClick}>SIGN IN </Button>

                  <Button style={{cursor: 'pointer', backgroundColor: '#063970', color: 'white', padding: '10px', marginLeft: '80px'}}>SIGN UP</Button>
                </Box>
                <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                SIGN UP
              </Typography>
              <Typography component="p" variant="p">
                Register To Get A Job
              </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="Phone Number"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        required
                        fullWidth
                        id="dateOfBirth"
                        label="Date of Birth"
                        name="Date of Birth"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="gender"
                        label="Gender"
                        name="gender"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Confirm Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
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
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
            />
          </Grid>
        </ThemeProvider>
      </div>
      <div id="signinArea" style={{ display: 'none' }}>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box sx = {{p: 1, m: 1}}>
                  <Button style={{cursor: 'pointer', backgroundColor: '#000000', color: '#5bbc2e', padding: '10px'}} >SIGN IN </Button>
                  <Button style={{cursor: 'pointer', backgroundColor: '#063970', color: 'white', padding: '10px', marginLeft: '80px'}} id="clickSignUp" onClick={handleSignUpClick}>SIGN UP</Button>
                </Box>
                <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                SIGN IN
              </Typography>
              <Typography component="p" variant="p">
                lorem ipsum dolor sit amet
              </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
            />
          </Grid>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SignUp;