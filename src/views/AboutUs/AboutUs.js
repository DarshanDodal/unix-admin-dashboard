import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Editor } from "react-draft-wysiwyg";
import { Paper } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

export default function AboutUs() {
	const classes = useStyles();
	const [editorState, setEditorState] = React.useState(null);
	return (
		<div>
			<GridContainer component={Paper}>
				<Editor
					editorState={editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={setEditorState}
				/>
			</GridContainer>
		</div>
	);
}
