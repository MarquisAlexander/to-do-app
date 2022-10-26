import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        paddingLeft: 10,
	},
});
