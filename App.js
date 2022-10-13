import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
	const [people, setPeople] = useState([
		{ name: "Sami", key: 1 },
		{ name: "Salman", key: 2 },
		{ name: "Jerin", key: 3 },
		{ name: "Palash", key: 4 },
		{ name: "Madhobi", key: 5 },
	]);

	return (
		<View style={styles.container}>
			{people.map((individual) => {
				return (
					<View key={individual.key}>
						<Text>{individual.name}</Text>
					</View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40,
		paddingHorizontal: 20,
	},
});
