import Button from "@mui/material/Button";
import * as React from "react";
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";


const style = makeStyles({
	titleItemRight: {
		float: "right",
		right: "20px",
		position: "fixed",
	}
});

const LogoutButton= () => {
	const classes  = style();
	const navigate = useNavigate();
	
	const logout = () =>{
		sessionStorage.removeItem("authToken");
		navigate('/');
		window.location.reload();
	}
	
	return (
		<Button variant="contained" className={classes.titleItemRight} onClick={logout}>
			Log Out
		</Button>
	)
}

export default LogoutButton;