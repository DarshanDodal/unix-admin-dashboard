import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";
import Table from "components/Table/Table.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import avatar from "assets/img/faces/marc.jpg";
import { bugs, website, server } from "variables/general.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Tasks from "components/Tasks/Tasks.js";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import { format } from "date-fns";

const styles = {
	cardCategoryWhite: {
		color: "rgba(255,255,255,.62)",
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		marginBottom: "0",
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
	},
	label: {
		fontWeight: "bold",
		fontSize: 30,
		marginLeft: 20,
	},
	footer: {
		justifyContent: "flex-end",
	},
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
	const classes = useStyles();
	console.log(format(new Date(), "dd/MM/yyyy"));
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<CustomTabs
						title=""
						headerColor="success"
						tabs={[
							{
								tabName: "Pending Inquiry",
								tabIcon: LibraryBooksIcon,
								tabContent: (
									<Table
										tableHeaderColor="success"
										tableHead={[
											"Name",
											"Phone",
											"Course",
											"User ID",
											"Password",
										]}
										tableData={[
											[
												"Purva Narsing",
												"9725363333",
												"Tally, Basics",
												"UN001",
												"Purva@UN001",
											],
											[
												"Mansi Nandwana",
												"8725678933",
												"Advance Basics",
												"UN002",
												"Mansi@UN002",
											],
											[
												"Jeel Patel",
												"78354627364",
												"English",
												"UN003",
												"Jeel@UN003",
											],
											[
												"Vidhi Sharma",
												"8886252242",
												"AutoCAD",
												"UN004",
												"Vidhi@UN004",
											],
											[
												"Manuni Mistry",
												"86353636363",
												"C Programming",
												"UN005",
												"Manuni@UN005",
											],
										]}
									/>
								),
							},
							{
								tabName: "History",
								tabIcon: LibraryAddCheckIcon,
								tabContent: (
									<Table
										tableHeaderColor="success"
										tableHead={[
											"Name",
											"Phone",
											"Course",
											"User ID",
											"Password",
										]}
										tableData={[
											[
												"Purva Narsing",
												"9725363333",
												"Tally, Basics",
												"UN001",
												"Purva@UN001",
											],
											[
												"Mansi Nandwana",
												"8725678933",
												"Advance Basics",
												"UN002",
												"Mansi@UN002",
											],
											[
												"Jeel Patel",
												"78354627364",
												"English",
												"UN003",
												"Jeel@UN003",
											],
											[
												"Vidhi Sharma",
												"8886252242",
												"AutoCAD",
												"UN004",
												"Vidhi@UN004",
											],
											[
												"Manuni Mistry",
												"86353636363",
												"C Programming",
												"UN005",
												"Manuni@UN005",
											],
										]}
									/>
								),
							},
							{
								tabName: "Create Inquiry",
								tabIcon: LibraryAddIcon,
								tabContent: (
									<Card>
										<CardBody>
											<GridContainer>
												<InputLabel className={classes.label}>
													{" "}
													New Inquiry
												</InputLabel>
											</GridContainer>
											<GridContainer>
												<GridItem xs={12} sm={12} md={4}>
													<CustomInput
														labelText="First Name"
														id="first-name"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<CustomInput
														labelText="Middle Name"
														id="middle-name"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<CustomInput
														labelText="Last Name"
														id="last-name"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
											</GridContainer>

											<GridContainer>
												<GridItem xs={12} sm={12} md={4}>
													<CustomInput
														labelText="Email"
														id="email"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<CustomInput
														labelText="Phone 1"
														id="phone-1"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={4}>
													<CustomInput
														labelText="Phone 2"
														id="phone-2"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
											</GridContainer>
											<GridContainer>
												<GridItem xs={12} sm={12} md={6}>
													<CustomInput
														labelText="Course"
														id="course"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={6}>
													<CustomInput
														labelText="Date of Joining"
														id="doj"
														formControlProps={{
															fullWidth: true,
														}}
														inputProps={{
															type: "date",
															defaultValue: format(new Date(), "dd/MM/yyyy"),
														}}
													/>
													{/* <TextField
														id="date"
														label="Birthday"
														type="date"
														defaultValue="2017-05-24"
														className={classes.textField}
														InputLabelProps={{
															shrink: true,
														}}
													/> */}
												</GridItem>
											</GridContainer>
											{/* <GridContainer> */}
											{/* <GridItem xs={12} sm={12} md={5}>
												 <CustomInput
														labelText="Company (disabled)"
														id="company-disabled"
														formControlProps={{
															fullWidth: true,
														}}
														inputProps={{
															disabled: true,
														}}
													/> 
												</GridItem> */}
											{/* <GridItem xs={12} sm={12} md={6}>
													<CustomInput
														labelText="User ID"
														id="user-id"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={6}>
													<CustomInput
														labelText="Password"
														id="password"
														formControlProps={{
															fullWidth: true,
														}}
													/>
												</GridItem> */}
											{/* </GridContainer> */}
											<GridContainer>
												<GridItem xs={12} sm={12} md={12}>
													{/* <CustomInput
														labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
														id="about-me"
														formControlProps={{
															fullWidth: true,
														}}
														inputProps={{
															multiline: true,
															rows: 5,
														}}
													/> */}
												</GridItem>
											</GridContainer>
										</CardBody>
										<CardFooter className={classes.footer}>
											<Button color="success">Create Inquiry</Button>
										</CardFooter>
									</Card>
								),
							},
						]}
					/>
				</GridItem>
				{/* <GridItem xs={12} sm={12} md={8}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>Edit Profile</h4>
							<p className={classes.cardCategoryWhite}>Complete your profile</p>
						</CardHeader>
						<CardBody>
							<GridContainer>
								<GridItem xs={12} sm={12} md={5}>
									<CustomInput
										labelText="Company (disabled)"
										id="company-disabled"
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											disabled: true,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={3}>
									<CustomInput
										labelText="Username"
										id="username"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText="Email address"
										id="email-address"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="First Name"
										id="first-name"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="Last Name"
										id="last-name"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText="City"
										id="city"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText="Country"
										id="country"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText="Postal Code"
										id="postal-code"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={12}>
									<InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
									<CustomInput
										labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
										id="about-me"
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											multiline: true,
											rows: 5,
										}}
									/>
								</GridItem>
							</GridContainer>
						</CardBody>
						<CardFooter>
							<Button color="primary">Update Profile</Button>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card profile>
						<CardAvatar profile>
							<a href="#pablo" onClick={(e) => e.preventDefault()}>
								<img src={avatar} alt="..." />
							</a>
						</CardAvatar>
						<CardBody profile>
							<h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
							<h4 className={classes.cardTitle}>Alec Thompson</h4>
							<p className={classes.description}>
								Don{"'"}t be scared of the truth because we need to restart the
								human foundation in truth And I love you like Kanye loves Kanye
								I love Rick Owens’ bed design but the back is...
							</p>
							<Button color="primary" round>
								Follow
							</Button>
						</CardBody>
					</Card>
				</GridItem> */}
			</GridContainer>
		</div>
	);
}
