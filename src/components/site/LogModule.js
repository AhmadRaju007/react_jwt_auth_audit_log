import Box from "@mui/material/Box";
import {Divider, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {unixTime} from "../../utils";
import * as React from "react";

const LogModule = (props) => {
	const {logs}= props;
	return logs ?
		<Box
			sx={{
				px: 2,
				py: 1,
				mt: 2,
				borderRadius: 1,
				backgroundColor: "#eeeeee",
				opacity: [0.3, 0.5, 0.8],
				'&:hover': {
					backgroundColor: '#bdbdbd',
					opacity: [0.9, 0.8, 1],
				},
			}}
		>
			<Grid item container xs={6}>
				<Typography sx={{py: 1}} fontSize={"14px"}>Audit Log</Typography>
			</Grid>
			<Divider sx={{color: "#212121"}} variant={"fullWidth"}/>
			{
				logs?.map(log => (
						<Grid item container xs={12} key={log.id}>
							<Typography sx={{py: 1}} fontSize={"14px"}>
								{log.operation === "CREATE" ? "Created by " : "Updated by "}{log.username + " on " + unixTime(log.created_at)}
							</Typography>
						</Grid>
					)
				)}
		</Box> : <></>
}

export default LogModule;