import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, handleRemove }) {
	return (
		<TouchableOpacity
			style={styles.listItem}
			onPress={() => {
				handleRemove(item.key);
			}}
		>
			<Text style={styles.listText}>{item.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		marginBottom: 30,
		padding: 15,
		backgroundColor: "#0000cd20",
		borderRadius: 8,
	},
	listText: {
		fontWeight: "500",
		fontSize: 16,
	},
});
