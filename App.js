import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

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
			<ScrollView>
				{people.map((individual) => {
					<View key={individual.key}>
						<Text style={styles.item}>{individual.name}</Text>
					</View>;
				})}
			</ScrollView>
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
	item: {
		paddingHorizontal: 15,
		paddingVertical: 20,
		marginVertical: 15,
		backgroundColor: "#f1f1f1",
		fontSize: 20,
		fontWeight: "500",
	},
});
