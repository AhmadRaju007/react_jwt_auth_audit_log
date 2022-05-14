import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

const theme = createTheme();

const Login = () => {
	const navigate = useNavigate();
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		axios({
			method:"post",
			url:process.env.REACT_APP_SERVER_URL+'auth/login',
			data: {
				username: data.get('username'),
				password: data.get('password')
			},
			headers:{
				'Content-Type':'application/json',
				dataType: 'json'
			}
		})
		.then(function (response) {
			sessionStorage.setItem("authToken", response.data.token);
			window.location.reload();
		})
		.catch(function (error) {
			console.log(error);
		});
	};
	
	return (
		<ThemeProvider theme={theme}>
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
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
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
						<Link to="/register">
							{"Don't have an account? Sign Up"}
						</Link>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Login;