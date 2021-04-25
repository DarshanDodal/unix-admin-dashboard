import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	MenuItem,
	Select,
	TextField,
} from "@material-ui/core";
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
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableM from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";

import avatar from "assets/img/faces/marc.jpg";
import { bugs, website, server } from "variables/general.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Tasks from "components/Tasks/Tasks.js";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import { format, addMonths, addHours } from "date-fns";

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
	aadhar: {
		display: "flex",
		flexDirection: "column",
	},
	aadharlabel: {
		fontWeight: "bold",
		fontSize: 20,
		marginLeft: 20,
		color: "gray",
	},
	courselabel: {
		fontSize: 20,
		marginLeft: 40,
	},
	footer: {
		justifyContent: "flex-end",
	},
	table: {
		width: 600,
	},
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
	const classes = useStyles();
	const [gender, setGender] = React.useState("male");
	const [courseQuantity, setCourseQuantity] = React.useState(1);
	const [StartTime, setStartTime] = React.useState(null);
	const [EndTime, setEndTime] = React.useState("");
	const handleChange = (event) => {
		setGender(event.target.value);
	};
	const handleCourseChange = (event) => {
		setCourseQuantity(event.target.value);
	};

	const handleStartTimeChange = (event) => {
		// console.log(event);
		setStartTime(event);
	};

	const handleEndTimeChange = (event) => {
		setEndTime(event);
		// console.log(event);
	};

	const CourseInput = () => {
		var i;
		var courseFieldArray = [];
		for (i = 0; i < courseQuantity; i++) {
			courseFieldArray.push(
				<>
					<InputLabel className={classes.courselabel}>{`Course ${
						i + 1
					}`}</InputLabel>
					<GridContainer>
						<InputLabel className={classes.courselabel}> </InputLabel>
						<GridItem xs={12} sm={12} md={3}>
							<CustomInput
								labelText="Course Name"
								id={`course${i + 1}Name`}
								formControlProps={{
									fullWidth: true,
								}}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<CustomInput
								labelText="Start Date"
								id={`course${i + 1}Start`}
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									type: "date",
									defaultValue: format(new Date(), "yyyy-MM-dd"),
								}}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<CustomInput
								labelText="End Date"
								id={`course${i + 1}End`}
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									type: "date",
									defaultValue: format(addMonths(new Date(), 3), "yyyy-MM-dd"),
								}}
							/>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<InputLabel className={classes.courselabel}> </InputLabel>
						<GridItem xs={12} sm={12} md={3}>
							<CustomInput
								labelText="Course Faculty"
								id={`course${i + 1}Faculty`}
								formControlProps={{
									fullWidth: true,
								}}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<CustomInput
								labelText="Start Time"
								id={`course${i + 1}StartTime`}
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									type: "time",
									name: "start-time",
									defaultValue: "08:00",
									onChange: handleStartTimeChange(),
								}}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<CustomInput
								labelText="End Time"
								id={`course${i + 1}EndTime`}
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									type: "time",
									name: "end-time",
									defaultValue: "09:00",
									onChange: handleEndTimeChange(),
								}}
							/>
						</GridItem>
					</GridContainer>
					<br></br>
					<br></br>
				</>
			);
		}
		return courseFieldArray;
	};
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<CustomTabs
						title=""
						headerColor="primary"
						tabs={[
							{
								tabName: "Users",
								tabIcon: PersonIcon,
								tabContent: (
									<Table
										tableHeaderColor="primary"
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
								tabName: "Add Users",
								tabIcon: PersonAddIcon,
								tabContent: (
									<>
										<Card>
											<CardBody>
												<GridContainer>
													<InputLabel className={classes.label}>
														{" "}
														Profile Details
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
															inputProps={{
																type: "number",
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
															inputProps={{
																type: "number",
															}}
														/>
													</GridItem>
												</GridContainer>
												<GridContainer>
													<GridItem xs={12} sm={12} md={3}>
														<CustomInput
															labelText="Date of Birth"
															id="dob"
															formControlProps={{
																fullWidth: true,
															}}
															inputProps={{
																type: "date",
																defaultValue: format(new Date(), "yyyy-MM-dd"),
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={3}>
														<CustomInput
															labelText="Age"
															id="age"
															formControlProps={{
																fullWidth: true,
															}}
															inputProps={{
																type: "number",
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={3}>
														<CustomInput
															labelText="Gender"
															id="gender"
															formControlProps={{
																fullWidth: true,
															}}
															inputProps={{
																defaultValue: gender,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={3}>
														<CustomInput
															labelText="Caste"
															id="caste"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
												</GridContainer>
												<GridContainer>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Father's Name"
															id="fatherName"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Mother's Name"
															id="motherName"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Parent's Contact"
															id="parentContact"
															formControlProps={{
																fullWidth: true,
															}}
															inputProps={{
																type: "number",
															}}
														/>
													</GridItem>
												</GridContainer>
												<GridContainer>
													<GridItem xs={12} sm={12} md={8}>
														<CustomInput
															labelText="Address"
															id="address"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Aadhar UUID"
															id="aadhar"
															placeholder="optional"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
												</GridContainer>

												<GridContainer>
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
												</GridContainer>
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
												<br></br>
												<br></br>
												<br></br>
												<GridContainer>
													<InputLabel className={classes.label}>
														{" "}
														Qualification
													</InputLabel>
												</GridContainer>
												<GridContainer>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Completed Qualification"
															id="completedQualification"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Current Qualification"
															id="currentQualification"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Current School/College"
															id="currentSchoolCollege"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
												</GridContainer>
												<br></br>
												<br></br>
												<br></br>
												<GridContainer>
													<InputLabel className={classes.label}>
														{" "}
														Courses
													</InputLabel>
												</GridContainer>
												<GridContainer>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="No of courses"
															id="courseNumber"
															formControlProps={{
																fullWidth: true,
															}}
															inputProps={{
																type: "number",
																defaultValue: courseQuantity,
																onChange: handleCourseChange,
															}}
														/>
													</GridItem>

													{/* <GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText={`Course ${i}`}
															id={`course${i}`}
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem> */}
												</GridContainer>
												<br></br>
												<br></br>
												<br></br>
												<CourseInput />
												<br></br>
												<br></br>
												<br></br>
												<GridContainer>
													<InputLabel className={classes.label}>
														{" "}
														Uploads
													</InputLabel>
													<br></br>
													<br></br>
												</GridContainer>
												<TableContainer>
													<TableM
														className={classes.table}
														aria-label="simple table"
													>
														<TableBody>
															<TableRow>
																<TableCell
																	className={classes.aadharlabel}
																	component="th"
																	scope="row"
																>
																	Aadhar Card
																</TableCell>
																<TableCell align="left">
																	<TextField id="time" type="file" />
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell
																	className={classes.aadharlabel}
																	component="th"
																	scope="row"
																>
																	Photo
																</TableCell>
																<TableCell align="left">
																	<TextField id="time" type="file" />
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell
																	className={classes.aadharlabel}
																	component="th"
																	scope="row"
																>
																	Qualification Proof
																</TableCell>
																<TableCell align="left">
																	<TextField id="time" type="file" />
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell
																	className={classes.aadharlabel}
																	component="th"
																	scope="row"
																>
																	Signature
																</TableCell>
																<TableCell align="left">
																	<TextField id="time" type="file" />
																</TableCell>
															</TableRow>
														</TableBody>
													</TableM>
												</TableContainer>
												<br></br>
												<br></br>
												<br></br>
												<GridContainer>
													<InputLabel className={classes.label}>
														{" "}
														User Credentials
													</InputLabel>
												</GridContainer>
												<GridContainer>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="User ID"
															id="user-id"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<CustomInput
															labelText="Password"
															id="password"
															formControlProps={{
																fullWidth: true,
															}}
														/>
													</GridItem>
												</GridContainer>
											</CardBody>
											<CardFooter className={classes.footer}>
												<Button color="primary">Create Profile</Button>
											</CardFooter>
										</Card>
									</>
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
