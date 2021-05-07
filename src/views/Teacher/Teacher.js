import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Input, Box } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AddLibraryIcon from "@material-ui/icons/LibraryAdd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Menu from "@material-ui/core/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";

import { infoColor, hexToRgb } from "assets/jss/material-dashboard-react.js";

const styles = {
	cardCategoryWhite: {
		"&,& a,& a:hover,& a:focus": {
			color: "rgba(255,255,255,.62)",
			margin: "0",
			fontSize: "14px",
			marginTop: "0",
			marginBottom: "0",
		},
		"& a,& a:hover,& a:focus": {
			color: "#FFFFFF",
		},
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
		"& small": {
			color: "#777",
			fontSize: "65%",
			fontWeight: "400",
			lineHeight: "1",
		},
	},
	grid: {
		marginBottom: 100,
	},
	root: {
		maxWidth: 345,
		marginBottom: 20,
	},
	Header: {},
	Menu: {
		position: "absolute",
		right: 10,
		top: 10,
	},
	rootBlank: {
		maxWidth: 345,
		height: 360,
		marginBottom: 20,
		backgroundColor: "rgba(0,0,0,0.04)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		borderRadius: 5,
	},
	rootBlankCard: {
		backgroundColor: "rgba(0,0,0,0.04)",
		padding: 45,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		borderRadius: 30,
	},
	mediaView: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		position: "relative",
	},
	Title: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		width: "100%",
	},
	TitleName: {
		alignSelf: "center",
		padding: 15,
	},
	media: {
		paddingTop: "56.25%", // 16:9
		width: "60%",
		height: "100%",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	rootAdd: {
		marginTop: "45.5%",
	},
	addCircle: {
		alignItems: "center",
		width: "100%",
	},
	addIcon: {
		fontSize: 65,
		color: "rgba(1,1,1,0.7)",
	},
	addLabel: {
		color: "rgba(1,1,1,0.7)",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		margin: "auto",
		width: "fit-content",
	},
	formControl: {
		minWidth: 12,
	},
	formControlLabel: {
		// marginTop: theme.spacing(1),
	},
};

const useStyles = makeStyles(styles);

const courses = [
	{
		title: "Purva Jain",
		shortDescription:
			"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",

		price: "10,000",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/0/09/Tally_-_Logo.png",
	},
	{
		title: "Mansi Nandwana",
		shortDescription:
			"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
		longDescription: "",
		price: "15,000",
		image:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAChCAMAAABkv1NnAAAA+VBMVEU/SMz+/v5dbL8pNpM5Sar///89Rs1lc8AnM8g3QcssOMlPWMY5Q8sxPMofNaQ/SM5DTM3u7/cwQqgkMchca79bYtL4+P3U1fFXZ70zPcq0t+gqPaaEidvf4PVxdtZLXbqEjMW8vup7gNlSY7yyttlVXNCfo+IjMZFiaNNbZrUjOKWordTa2/NsctWRld6sr+bo6fgdK8cAE4kAHYsXKI5bZ8a/xOOepNBNVc9zebFDTMSOl9BsecSUndK3vN9+icoRI8aKj9yaneDLze87RZmLkL1WXqQtOpG+wNlBS7xMVaBDTL87RqxEVLAAJaB0fb5ncbWbn8VCTJzLuxvgAAANFUlEQVR4nO2de1/aSBSGwyUxiYEAwQFUREkpVkABKd7qpVIvbXW1+/0/zM6ZBEjIzCQK1N+Gef9YCwRwHs+c98yZgZUkISEhISEhISEhISEhISEhISEhoZjIVEzzo3+H/6GUXGN9fT2nCHZvkmJ+TRJ9zSkf/bv8j6SYG2vJsb6aAl00mcZ6MenVukAXQaZyWk7OqNgwRKoLkZL7ujbLDat8KlyCp4knBLQmXIItU1lnYCPo9iWBjibTaBQ53EAbItUFRfEEioRLzEiRqJ4QlHAJrxRpPxq2pHAJj3DBG5Wao31REEuA7TTME4JaF/M1micEtOpricieENQqu4RiRveEoFbWJfjrhEjoVtEl3uUJQa2cSyg51mr+jVotl4jmCUWsCOhWxyUUZT8ERdm2azUb6hT4adtlLsAVcYmQdUIRc7puDav5hOwIdUufLpIORqbi7xJ8TyjatZerrkss4ci5kR9e2Fx26/FOdVxPKNe+DdGUmE8Ar3RRs9nU4+wSisnxhHLtosugNmGHWjYHXVxdQjHXedgu8zxqE3ZXts18kVi6hGk0mANOFmvXEbC56Fo1dq6L3VrCVHieUC6XomFz0OWv2UEXs7UEY7PUVe0iERmbg25Y41lzw/jo8S5KBie54Wk6jB5uY3T5NU5psvY1JtNV4TWPysX8W7GRoNvlTdd4kDNPedy+oXdwA3InNWYMP6d/xyHPKZya175+8zSdoLtikKulsWIBbincMLkhjZydJjr/6FEvQApzppZf5uBGjbly2lUc5ioTXHltLm6Y3InfIXByG2s9xuCK9vt8wUvu2luV1NLplQBXq87LDXvr2qQSttPp1QBnf5qbG1TCtZnkFntw2Bjm5wYGYfuTW+zB1d6zYKCReykmA9hiDC50ospT8a9DFGzxBVdMcnFgWt1h6/Li4vLkqprgsMPXrRVWCZxd4vbI25ewJ0hk27XrYYK1EYF2s080bnEFV/zG5ibLw6R/I7Vs105oJZ8st7LUcIsvOE7AydU1yn5MuXY1G3Sy/JjeYmCLLThmhoNuEb25a/v7Tzi5fckyscUVnH3FACcn2NsJZbsrT7Exk1uswdUYi1Q58Y3TES9O1mg4LpnJLc7gyhcMbjKPG5AjMcdPbnEGx7IG+YK3j0CQwwmJ6peDMGwxBceYqfSOrh/ctYyu+cktxuCK13RuKJQb9NoPPMmtsOWoEES5PHBapfKX9m1nwdktOrjL8A881NJeTyictIhOLoOVydLAaYdHR/W/Qy4Ark0DN+msccJtBk4WTfoA1VmTXRo4vS3Lm5klvbhfs+DoKU4+CQm4cqALks1POyjd7N8CV/oocMUilZvMd9Rgq9IPTr4o/CVwOOL2PgRcmeoNcpsLrhbE5oBr/ZPNPg9hso5rlCcXnGJ4zkH4bpDb5Idp+O9XnEOdiu9sp2H4HjttNE7HTzI9T599i/k1C+7kzTN1Nrl5wH2CUvifLl6DZdOFbHarUHgtQOz9thqdhqW549Olzqmu6KqK78D/NfTGvmpKip7Z72zoOgCp4McMdaOT0SRFPe0YJKbgUk3d31cNCR7TK+ROy8IPKqqqS5lKZ0N1seq5Tk434RnLAkfv/crfmAe3ZvdhguC2PuGQyxZ2ERp+wf/aLaSzR2Ac6FAlv4A2ghPE6gihuqbj/3Y28WOSIZXIJN/D5CqbCH1vwFHaQ11qw50qpDOENur4hVBH34C0cKvjO/HzjyrKBkLVmyN4jw78dRTyWqMefkZnYeRmwQ2p4FieSktuAXBXDji8GANeL4Vs2818myrEm3OOvYrxbWskucOAVX2cIkuqlNmT5SPn1o5z91FG0quy/Nm5c9/5sa255qBsYD/adO7EE9fUHIMv4ffdWRo42oKLWf1Sk5sX3EGhsAV1SZ6AI8putSaegYeaIQOsujd1J8zkPQuY5AnThgLg4CMVzh4HuVYl4DAfByR5rKp7wEFrC9r62Cr0kfu0xF8H16V6AyO5ecANX19e4Ni1PNxywF1e4n8Bko1eB2aZZaowet3KoSm4an1vu4dvH91YOXIvAbd3cwMA8nrvEP/YUAi4w94NICv1buASywNOTjR6ELVV3TTgNVWrARyXB45W/1LBMZObB9xEdpqAO8kWtgqXMIE0qdLBP+uVHZhqhlTZnoLTtIym5Lb3DFO5wXQOHXCWqX0n1xAQOwaA6/aciD01DHgdxfSAu81IGTy/86q2Ta6QModLBRcx4oo/mqlUZHAnWw44iNEDPLY22EIPx8qmdYvjrgepbgKu6nqGqlunn3Hg3RJw+F6t7uQsC4hrAA7Pwwqe04meZACrnOIBh/8a2iFkywrG17XAIv4+uMCC6xljS/HJTcHld3EVR8DBAuKg6xb3kHpGPRgVkLLQGNxIJ7+XVR85Od0BV9IlElX4wSm4owoBh19AacyCw4QhRJHqPhv/pZYKLoqr2qmJQnLcl7Uv9hbpB0/AZbtkwBgcHlC7t0mSuiSp+TG4PbipmI4VTCJu5IKzooJTTBecPgZnLdUcwuu48kMzlQpH57jq07inBOASvIhLTMDBgyqULKPv8OOd4DTTE3Fk+lvLjDjGymHaVCLJzS8OuGkTHcAhALf16M1xKmTsDF4nnE5yHFAlN3dUTZ2Yw/vBwRXwNKOzVHC7VHClsTs8B7Cx0LHAFU5cV4WydUeDAX+2tN7IB84AH7jBcNH84AiwQ1W7KS0TXHGNCs6tgJ9p1BjkWODSaVLH3UAdl7ckC3LZUR24ecGRKkXt3crzT1XiO/LnOqmtlwYuWaN+AEm+wHO1nKKGGwMdExxZuzqqa06NAfUq8oIjtVpik4z1qDInOKhKiNEs0xySNvUIq1ytUZIbFx074iZr1SNIdaqzqKz7wBHLBY3AEecEJ1kknsmSdnngyvR9fPl1wMdG0HnblQddhFpecAjl3a6c0x3JbzuVrvq9ito7N4jQIN0NuFsFcvlOA+XzmcwmQqMMBocQcFDzeVQ3oDvyGUfsLUJtHYNDKJEzp92RhIHBbSOEoZqmddjNl/Zv8CsurTvCcAe8eOiHgxvslj2bqgfZrHdnupDNTh78bTV2TlXSj8vlrF5P1Q3LGZWuqhXnF8sYnYZqGKqqkn4chKFzA5MjfTWngSdp0HsjLTjVlNznuzfgMcwtJ03fYmNh/czghjTjtNtdaMg1H3DJG76Nn/Z2gHHdkeh+1hUt5xT7HpkLatoa+zLqHmYUYuOZhTXtg+Co21w4r/4bkuNS/S40bloHIQdH0r49B+iOJOqNnSr0ShY1KJ+I0aCdRr3r1tqLUfDsyCXjCAQa8Mn1H52zI+gi7MyNF9zYBaBiqCxsVD6Nm3xQzmkLe1XKMS/GoV45zyXXHy/WcE5/CTkI4QFnVsbfZFJaXDTMDFEa9xtGC3wLCjjqOp+Q4xRyTryN0VW55wp924OKeljq5ruj7eVMVPIW+i15i/oi/zRBcOwjwDK6P6ZjGwz85R+On2fOqSX/vqqGrVDVFzeJgjKX8BaUo6zsj3HhkvaYYq7N/llgvYEvLTANNo6nlZKsTelx0N31Z1LdoH9fpaVFzsnMmIJL1roccjL686M/GDQxvWazOTge3FGxJdyzwCsFzr7nfbIGlkKPd6//ppo/7s9asNfEuTT/ZYXA/WgeP/LI+T7KFXJhYkBrOcUSHGlVDt727TZscGfgJasAznYT/tliPq/66LQGYg9uug/TD5ms0bihSe0Sa3C+VuXxAj7qK997XjC+4Pz7MM0fc357RrATNQUXp+8dsQOrqNc5wY0THAVdfMDNbDI75Oi94Mjc2rSecYzAFambzCTN3c1BTq7Se+0EXCy+W+krY5PZIffub/OixpuL7vmjB70QnT+wRojJnb2THCW/efQzBjNVkszfnCEO7t+zhJDlPzxuhVhww+R+cmKu2eR0SljcEq+MfifRU0y4YXK5Jza6Zr/1tukqy9UUZycxfR4bbljmeZo91ONfEb8+2eV212fvTDz8jNn/sdtUOB7R7N+FtY+m2B6b7HB7eJLihQ1kSpxUNxh8ioJOltu/2Nnt4SkXP2wgnOqYg04Nmi3GNwFNqcmPv47ZszReyc0vPrrj3Sqz4wvt9D8pDrbUeZy+5Dworks0j1N37cRMv9zpn3dbv/ocK334GcPk5pfJrYdx2PXv/zx2kWfPIf/YOhsc805HxDa5+cV1CYi7AaY3+Pf+DOv1V7N/zIWGtRrYQNxUN8bnKvTCOHtCUFHQRdPvmBW8oeK6RFStgCcEZXLX/pGwrU5y88vMzYUuvaLYQHOkutXyhKDemepi1wR5u0yFWxAzsK2gJwT1ZpdYVU8IitshntWqJze/orvE+contxlFcgnhCRSZ5u+Q+bqyBW+YQlxCYGOL4xLCE/hiuMTDyjVB3i7zXHjC+zSb6oQnRJavuS6wvUUTlxCe8FaZuZ9PW09infAOYWYCm5CQkJCQkJCQkJCQkJCQkFAM9R/5z68TGM7chQAAAABJRU5ErkJggg==",
	},
	{
		title: "Jeel Patel",
		shortDescription:
			"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
		longDescription: "",
		price: "15,000",
		image:
			"data:image/png;base64,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",
	},
];

export default function TableList() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [expanded, setExpanded] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const { search } = useSelector((state) => {
		return state;
	});
	const filteredCourses = courses.filter((course) => {
		return (
			course.title
				.toString()
				.toLowerCase()
				.indexOf(search.toString().toLowerCase()) !== -1
		);
	});
	console.log(filteredCourses);

	return (
		<>
			<GridContainer spacing={3}>
				{filteredCourses.map((course) => (
					<GridItem xs={12} sm={12} md={4} lg={3}>
						<Card className={classes.root}>
							{/* <CardHeader
								className={classes.Header}
								action={
									<>
										<IconButton onClick={handleMenuClick} aria-label="edit">
											<MoreVertIcon />
										</IconButton>
										<Menu
											id="menu-edit"
											anchorEl={anchorEl}
											keepMounted
											open={Boolean(anchorEl)}
											onClose={handleMenuClose}
										>
											<MenuItem onClick={handleMenuClose}>Edit</MenuItem>
											<MenuItem onClick={handleMenuClose}>Delete</MenuItem>
										</Menu>
									</>
								}
							/> */}
							<div className={classes.mediaView}>
								<CardMedia
									className={classes.media}
									image={course.image}
									title="Paella dish"
								/>
								<div className={classes.Menu}>
									<>
										<IconButton onClick={handleMenuClick} aria-label="edit">
											<MoreVertIcon />
										</IconButton>
										<Menu
											id="menu-edit"
											anchorEl={anchorEl}
											keepMounted
											open={Boolean(anchorEl)}
											onClose={handleMenuClose}
										>
											<MenuItem onClick={handleMenuClose}>Edit</MenuItem>
											<MenuItem onClick={handleMenuClose}>Delete</MenuItem>
										</Menu>
									</>
								</div>
							</div>
							<CardContent>
								<div className={classes.Title}>
									<Typography
										className={classes.TitleName}
										color="textPrimary"
										component="h2"
									>
										<b>{course.title}</b>
									</Typography>
								</div>
								<Typography variant="body2" color="textSecondary" component="p">
									{course.shortDescription}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								{/* <IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton> */}
								{/* <Typography align="center" color="textPrimary" variant="h6">
									<strong> ₹ {course.price}</strong>
								</Typography>
								<IconButton
									// className={clsx(classes.expand, {
									// 	[classes.expandOpen]: expanded,
									// })}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
								>
									<ExpandMoreIcon />
								</IconButton> */}
							</CardActions>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography paragraph>{course.longDescription}</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</GridItem>
				))}
				<GridItem xs={12} sm={12} md={4} lg={3}>
					<div onClick={handleClickOpen} className={classes.rootBlank}>
						<div className={classes.rootBlankCard}>
							<PersonAddIcon className={classes.addIcon} />
							<Typography className={classes.addLabel}>New Teacher</Typography>
						</div>
					</div>
				</GridItem>
				{/* <GridItem xs={12} sm={12} md={4}>
					<Card className={classes.rootAdd}>
						<Fab color="secondary" aria-label="add" className={classes.margin}>
							<AddIcon />
						</Fab>
					</Card>
				</GridItem> */}
			</GridContainer>
			<Dialog
				fullWidth={true}
				maxWidth={"sm"}
				open={open}
				onClose={handleClose}
				aria-labelledby="max-width-dialog-title"
			>
				<DialogTitle id="form-dialog-title">New Teacher</DialogTitle>
				<DialogContent>
					{/* <Grid item md={6} xs={12}> */}
					<InputLabel>Profile Image</InputLabel>
					<br />
					<Box classes={{ root: classes.uploadDiv }}>
						<Button color="white" variant="contained" component="label">
							<Input
								type="file"
								name="file"
								hidden
								color="white"
								// onChange={handleFileChoose}
								// filename={temp}
							/>
						</Button>
					</Box>

					{/* <InputLabel fullwidth color="primary" shrink>
						<a href={file}>{file}</a>
					</InputLabel> */}
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="text"
						name="teacherName"
						fullWidth
						// value={name}
						// onChange={handleNameChange}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="category"
						label="Description"
						type="text"
						name="description"
						multiline={true}
						fullWidth
						// value={category}
						// onChange={handleCategoryChange}
					/>
				</DialogContent>
				<DialogActions>
					{/* <Button
						startIcon={<DeleteIcon />}
						color="secondary"
						style={{ left: 15, position: "absolute" }}
						// onClick={handleDishDelete}
					>
						Delete
					</Button> */}
					{/* {Loading ? (
						<CircularProgress size={24} className={classes.buttonProgress} />
					) : null} */}
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button color="primary">Done</Button>
				</DialogActions>
			</Dialog>
		</>
		// <GridContainer>
		//   <GridItem xs={12} sm={12} md={12}>
		//     <Card>
		//       <CardHeader color="primary">
		//         <h4 className={classes.cardTitleWhite}>Simple Table</h4>
		//         <p className={classes.cardCategoryWhite}>
		//           Here is a subtitle for this table
		//         </p>
		//       </CardHeader>
		//       <CardBody>
		//         <Table
		//           tableHeaderColor="primary"
		//           tableHead={["Name", "Country", "City", "Salary"]}
		//           tableData={[
		//             ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
		//             ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
		//             ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
		//             ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
		//             ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
		//             ["Mason Porter", "Chile", "Gloucester", "$78,615"]
		//           ]}
		//         />
		//       </CardBody>
		//     </Card>
		//   </GridItem>
		//   <GridItem xs={12} sm={12} md={12}>
		//     <Card plain>
		//       <CardHeader plain color="primary">
		//         <h4 className={classes.cardTitleWhite}>
		//           Table on Plain Background
		//         </h4>
		//         <p className={classes.cardCategoryWhite}>
		//           Here is a subtitle for this table
		//         </p>
		//       </CardHeader>
		//       <CardBody>
		//         <Table
		//           tableHeaderColor="primary"
		//           tableHead={["ID", "Name", "Country", "City", "Salary"]}
		//           tableData={[
		//             ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
		//             ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
		//             ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
		//             [
		//               "4",
		//               "Philip Chaney",
		//               "$38,735",
		//               "Korea, South",
		//               "Overland Park"
		//             ],
		//             [
		//               "5",
		//               "Doris Greene",
		//               "$63,542",
		//               "Malawi",
		//               "Feldkirchen in Kärnten"
		//             ],
		//             ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
		//           ]}
		//         />
		//       </CardBody>
		//     </Card>
		//   </GridItem>
		// </GridContainer>
	);
}
