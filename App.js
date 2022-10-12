import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
	const [name, setName] = useState("Sami");
	const [newName, setNewName] = useState("");

	// const handleInput = (e) => setNewName(e.target.value);

	return (
		<View style={styles.container}>
			<Text>My Name is {name}.</Text>
			<TextInput
				style={[styles.mTop20, styles.input]}
				placeholder="Type New Name.."
				keyboardType="alphanumeric"
				value={newName}
				onChangeText={setNewName}
			/>
			<View style={styles.mTop20}>
				<Button
					disabled={!newName}
					title="Click to Change Name"
					onPress={() => {
						setName(newName);
						setNewName("");
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	mTop20: {
		marginTop: 30,
	},
	input: {
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		width: "70%",
	},
});
