import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
	const [people, setPeople] = useState([
		{ name: "Sami", id: 1 },
		{ name: "Salman", id: 2 },
		{ name: "Jerin", id: 3 },
		{ name: "Palash", id: 4 },
		{ name: "Madhobi", id: 5 },
	]);

	return (
		<View style={styles.container}>
			<FlatList
				keyExtractor={(item) => item.id}
				data={people}
				renderItem={({ item }) => (
					<View>
						<Text style={styles.item}>{item.name}</Text>
					</View>
				)}
			/>
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
