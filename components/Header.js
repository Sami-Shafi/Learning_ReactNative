import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
	return (
		<View style={styles.headerWrap}>
			<Text style={styles.headerText}>TodoApp</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerWrap: {
		height: 90,
		backgroundColor: "#0000cd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
	},
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    }
});
