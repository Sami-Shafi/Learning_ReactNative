import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function AddTodo({handleAdd}) {
	const [text, setText] = useState("");

	const changeHandler = (value) => {
		setText(value);
	};

	return (
		<View style={styles.wrapper}>
			<TextInput
				placeholder="e.g. Sleeping.."
				onChangeText={changeHandler}
				style={styles.inputBox}
			/>
			<Button
				title="Add Todo"
				color={"#0000cd"}
				onPress={() => handleAdd(text)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputBox: {
		padding: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#0000cd",
		fontWeight: "500",
		fontSize: 16,
		marginBottom: 20,
	},
	wrapper: {
		marginBottom: 30,
	},
});
