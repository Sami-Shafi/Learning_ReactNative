import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";

export default function App() {
	const [todos, settodos] = useState([
		{ name: "Go To College", key: 1 },
		{ name: "Coding", key: 2 },
		{ name: "Meeting", key: 3 },
		{ name: "Prospecting", key: 4 },
	]);

	return (
		<View style={styles.container}>
			<Header />

			<View style={styles.content}>
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => (
							<Text style={styles.listItem}>{item.name}</Text>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		padding: 35,
		backgroundColor: "#f1f1f1",
	},
	listItem: {
		marginBottom: 30,
		padding: 15,
		backgroundColor: "#0000cd20",
		fontWeight: "500",
		fontSize: 16,
	},
});
