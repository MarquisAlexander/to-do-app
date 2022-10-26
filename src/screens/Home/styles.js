import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1A1A1A",
	},
	headerBackground: {
		backgroundColor: "#0D0D0D",
		height: "20%",
		width: "100%",
		position: "absolute",
	},
	content: {
		flex: 1,
	},
	form: {
		width: "100%",
		flexDirection: "row",
		marginTop: 36,
		marginBottom: 42,
		paddingHorizontal: 24,
	},
	input: {
		flex: 1,
		height: 56,
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		color: "#FFF",
		padding: 16,
		fontSize: 16,
		marginRight: 12,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#1E6F9F",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#FFF",
		fontSize: 24,
	},
	cardItem: {
		width: "100%",
		backgroundColor: "#262626",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#808080",
		alignItems: "center",
	},
	finishedCardItem: {
		width: "100%",
		backgroundColor: "#262626",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#262626",
		alignItems: "center",
	},
	itemTitle: {
		color: "#F2F2F2",
		fontSize: 14,
		maxWidth: "70%",
	},
	textTotalTasks: {
		color: "#1E6F9F",
		fontSize: 14,
		fontWeight: "bold",
	},
	textTotalFinishedTasks: {
		color: "#8284FA",
		fontSize: 14,
		fontWeight: "bold",
	},
	line: {
		height: 10,
	},
	wrapperLenght: {
		backgroundColor: "#333333",
		borderRadius: 100,
		paddingHorizontal: 10,
		// maxHeight: 100,
		// width: 10,
	},
	lenght: {
		color: "#D9D9D9",
		fontWeight: "bold",
	},
});
