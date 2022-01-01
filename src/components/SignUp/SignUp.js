import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem, Stack, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { red } from '@mui/material/colors';


const theme = createTheme();

// Form Clear 



const SignUp = () => {
  const [gender, setGender] = React.useState('Male');
  const [birthDate, setBirthDate] = React.useState(new Date('1998-06-06T21:11:54'));
  const [users, setUsers] = React.useState([]);
  // Select Gender
  const genders = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    }
  ];
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Birth Date Change 
  const handleBirthDateChange = (newValue) => {
    setBirthDate(newValue);
  };

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
    const userInfo = {
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('firstName'),
      phone: data.get('phone'),
      gender: gender,
      birthdate: birthDate
    }
    console.log(data.get('confirm-password'));
    console.log(data.get('password'));
    if(data.get('password') === data.get('confirm-password')){
      postToServer(userInfo);
      window.location.reload('/');
    }
    else{
      const div = document.createElement('div');
      div.innerHTML = `<p style="color: red;">Password Not Matching</p>`;
      document.getElementById("match-password").appendChild(div);
    }
  };

  // handle signin submit
  const handleSigninSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const userEmail = users.map(user => user.email);
    const userPassword = users.map(user => user.password);

    for (let i = 0; i < userEmail.length; i++) {
      if(userEmail[i] === data.get('signinEmail') && userPassword[i] === data.get('signinPassword')){
        alert('Welcome');
      }
    }
  };



  // LOAD USERS FROM DATABASE

  React.useEffect(() => {
    fetch('http://localhost:5000/api/user')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  // POST TO SERVER

  // post data

  function postToServer(postInfo) {
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      body: JSON.stringify(postInfo),
      headers: {
        "Content-type": "application/json;charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }
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
                   justifyContent: 'center',
                }}>
                  <Button
                    variant="contained"
                    sx={{ mr: 3}}
                    style= {{backgroundColor: `${red[500]}`}}
                    onClick={handleSigninClick}
                  >
                    Sign In
                  </Button>

                  <Button
                    variant="contained"
                    sx={{ ml: 3 }}
                  >
                    Sign Up
                  </Button>
                </Box>
                <Typography component="p" variant="p" sx = {{mt: 3}}>
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
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            label="Birthday"
                            inputFormat="MM/dd/yyyy"
                            value={birthDate}
                            onChange={handleBirthDateChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="gender"
                        select
                        label="Gender"
                        value={gender}
                        onChange={handleGenderChange}
                        helperText="Please select your gender"
                      >
                        {genders.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
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
                    <Grid item xs={12} sm={6} id="match-password">
                      <TextField
                        required
                        fullWidth
                        name="confirm-password"
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
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
                <Box sx={{
                  display: 'flex',
                   justifyContent: 'center',
                }}>
                  <Button
                    variant="contained"
                    sx={{ mr: 3}}
                    style= {{backgroundColor: `${red[500]}`}}
                  >
                    Sign In
                  </Button>

                  <Button
                    variant="contained"
                    sx={{ ml: 3 }}
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </Button>
                </Box>
                <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                  SIGN IN
                </Typography>
                <Typography component="p" variant="p">
                  lorem ipsum dolor sit amet
                </Typography>
                <Box component="form" noValidate onSubmit={handleSigninSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="signinEmail"
                    label="Email Address"
                    name="signinEmail"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="signinPassword"
                    label="Password"
                    type="password"
                    id="signinPassword"
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