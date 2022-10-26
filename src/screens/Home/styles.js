import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1A1A1A",
		alignItems: "center",
	},
	headerBackground: {
		backgroundColor: "#0D0D0D",
		height: "21%",
		width: "100%",
		position: "absolute",
	},
	content: {
		flex: 1,
	},
	logo: {
		height: 32,
		width: 110,
		marginTop: 44,
	},
	resumeHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 20,
		paddingHorizontal: 24,
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
	},
	lenght: {
		color: "#D9D9D9",
		fontWeight: "bold",
	},
	flatList: {
		paddingHorizontal: 24,
	},
});
