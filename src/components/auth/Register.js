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
import {toast} from "react-toastify";

const theme = createTheme();

const Register = () => {
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		axios({
			method:"post",
			url:process.env.REACT_APP_SERVER_URL+'auth/register',
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
			navigate("../");
			toast.dark(response.data.message, {
				toastId: "register_success"
			});
		})
		.catch(function (error) {
			toast.dark(error.response.data.message, {
				toastId: "register_success"
			});
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
						Register
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
							Sign Up
						</Button>
						<Link to="/">
							{"Already have an account? Sign In"}
						</Link>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Register;