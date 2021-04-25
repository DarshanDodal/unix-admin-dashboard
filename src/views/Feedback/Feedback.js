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

export default function Feedback() {
	const classes = useStyles();
	console.log(format(new Date(), "dd/MM/yyyy"));
	return (
		<div>
			<GridContainer>
				{/* <GridItem xs={12} sm={12} md={6}>
					<CustomTabs
						title="Tasks:"
						headerColor="primary"
						tabs={[
							{
								tabName: "Bugs",
								tabIcon: BugReport,
								tabContent: (
									<Tasks
										checkedIndexes={[0, 3]}
										tasksIndexes={[0, 1, 2, 3]}
										tasks={bugs}
									/>
								),
							},
							{
								tabName: "Website",
								tabIcon: Code,
								tabContent: (
									<Tasks
										checkedIndexes={[0]}
										tasksIndexes={[0, 1]}
										tasks={website}
									/>
								),
							},
							{
								tabName: "Server",
								tabIcon: Cloud,
								tabContent: (
									<Tasks
										checkedIndexes={[1]}
										tasksIndexes={[0, 1, 2]}
										tasks={server}
									/>
								),
							},
						]}
					/>
				</GridItem> */}
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="info">
							<h4 className={classes.cardTitleWhite}>Feedback</h4>
						</CardHeader>
						<CardBody>
							<Table
								tableHeaderColor="info"
								tableHead={["Name", "User ID", "Feedback"]}
								tableData={[
									["Purva Narsing", "Purva@001", "Tally"],
									["Mansi Nandwana", "Mansi@002", "Graphics"],
									["Jeel Patel", "Jeel@003", "Basic"],
									["Vidhi Sharma", "Vidhi@004", "English"],
									["Manuni Mistry", "Manuni@005", "Programming"],
								]}
							/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
