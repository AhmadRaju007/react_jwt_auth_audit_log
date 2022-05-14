import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as Yup from 'yup';
import {useEffect, useState} from "react";
import axios from "axios";
import {Checkbox, FormControlLabel, Grid, Paper, TextField} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import Box from "@mui/material/Box";
import {Formik} from 'formik';

const theme = createTheme();
const useStyles = makeStyles({
	paper: { borderRadius: 20, borderColor: "yellow", padding: 50 }
});

const CreateSite = () =>{
	const { classes } = useStyles();
	const initVal = {
		name: "",
		jurisdiction: "",
		description: "",
		latitude: "",
		longitude: ""
	}
	const [initialValues, setInitialValues] = useState(initVal);
	
	useEffect(() => {
		setInitialValues({
			name: "",
			jurisdiction: "",
			description: "",
			latitude: "",
			longitude: ""
		});
	}, [])
	
	const validation = Yup.object({
		name: Yup.string()
			.required("First name is required")
			.min(2, "First name must have at least 2 characters"),
		jurisdiction: Yup.string(),
		description: Yup.string(),
		latitude: Yup.number()
			.required("Please provide valid latitude"),
		longitude: Yup.number()
			.required("Please provide valid longitude"),
	});
	
	const submitForm = async (data) => {
		console.log(data);
		// axios({
		// 	method:"post",
		// 	url:process.env.REACT_APP_SERVER_URL+'auth/login',
		// 	data: {
		// 		username: data.get('username'),
		// 		password: data.get('password')
		// 	},
		// 	headers:{
		// 		'Content-Type':'application/json',
		// 		dataType: 'json'
		// 	}
		// })
		// 	.then(function (response) {
		// 		sessionStorage.setItem("authToken", response.data.token);
		// 		window.location.reload();
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	};
	
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Formik initialValues={initialValues} validationSchema={validation} onSubmit={submitForm}>
				{({
					  values,
					  errors,
					  touched,
					  handleChange,
					  handleSubmit,
					  isSubmitting,
						resetForm
				  }) => {
					return (
						<form onSubmit={handleSubmit}>
							<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
								<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 2 } }}>
									<Grid container justifyContent="flex-start" spacing={1}>
										<Grid item xs={2} sm={2}>
											<Button variant="outlined" size="small" type="submit" disabled={isSubmitting}>
												<SaveIcon variant="filled" fontSize="small"/>
												<span>Save</span>
											</Button>
										</Grid>
										<Grid item xs={3} sm={3}>
											<Button variant="outlined" size="small" onClick={resetForm}>
												<CloseIcon variant="filled" fontSize="small"/>
													<span>Cancel</span>
											</Button>
										</Grid>
									</Grid>
									<br style={{ height:"30pt" }} />
									
									<Divider variant={"fullWidth"}/>
									<Box sx={{ px:1, my: 1 }} >
									<Grid item container xs={6} >
										<Typography fontSize={"16px"}>Site Id: {1}</Typography>
									</Grid>
									</Box>
									<Box sx={{ px: 1, mt:3 }} >
										<Grid container spacing={3}>
											<Grid item xs={12} sm={11}>
												<TextField
													id="name"
													name="name"
													label="Name"
													fullWidth
													autoComplete="name"
													variant="outlined"
													value={values.name}
													onChange={event => {handleChange(event);}}
													error={!!(touched.name && errors.name)}
													helperText={touched.name && errors.name}
												/>
											</Grid>
											<Grid item xs={11} sm={11}>
												<TextField
													multiline={true}
													rows={2}
													id="jurisdiction"
													name="jurisdiction"
													label="Jurisdiction/City/Region"
													fullWidth
													autoComplete="jurisdiction"
													value={values.jurisdiction}
													onChange={event => {handleChange(event);}}
													error={!!(touched.jurisdiction && errors.jurisdiction)}
													helperText={touched.jurisdiction && errors.jurisdiction}
												/>
											</Grid>
											<Grid item xs={11}>
												<TextField
													multiline={true}
													rows={2}
													id="description"
													name="description"
													label="Site Description"
													fullWidth
													autoComplete="description"
													variant="outlined"
													value={values.description}
													onChange={event => {handleChange(event);}}
													error={!!(touched.description && errors.description)}
													helperText={touched.description && errors.description}
												/>
											</Grid>
											<Grid item xs={4}>
												<TextField
													id="latitude"
													name="latitude"
													label="Latitude"
													fullWidth
													autoComplete="latitude"
													variant="outlined"
													value={values.latitude}
													onChange={event => {handleChange(event);}}
													error={!!(touched.latitude && errors.latitude)}
													helperText={touched.latitude && errors.latitude}
												/>
											</Grid>
											<Grid item xs={4} sm={4}>
												<TextField
													id="longitude"
													name="longitude"
													label="Longitude"
													fullWidth
													autoComplete="longitude"
													variant="outlined"
													value={values.longitude}
													onChange={event => {handleChange(event);}}
													error={!!(touched.longitude && errors.longitude)}
													helperText={touched.longitude && errors.longitude}
												/>
											</Grid>
										</Grid>
									</Box>
									<Box
										sx={{
											px:2,
											py:1,
											mt:2,
											borderRadius:1,
											backgroundColor: "#eeeeee",
											opacity: [0.3, 0.5, 0.8],
											'&:hover': {
												backgroundColor: '#bdbdbd',
												opacity: [0.9, 0.8, 1],
											},
										}}
									>
										<Grid item container xs={6} >
											<Typography sx={{py:1 }} fontSize={"14px"}>Audit Log</Typography>
										</Grid>
										<Divider sx={{color: "#212121"}} variant={"fullWidth"}/>
									</Box>
								</Paper>
							</Container>
						</form>
					);
				}}
			</Formik>
		</ThemeProvider>
	);
}

export default CreateSite;