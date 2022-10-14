import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
	const [todos, setTodos] = useState([
		{ name: "Go To College", key: 1 },
		{ name: "Coding", key: 2 },
		{ name: "Meeting", key: 3 },
		{ name: "Prospecting", key: 4 },
	]);

	const handleRemove = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key !== key);
		});
	};

	const handleAdd = (text) => {
		if (text.length > 3) {
			setTodos([{ name: text, key: Math.random() }, ...todos]);
		} else {
			Alert.alert("OOPS!", "Task content must be above 3 characters.", [
				{ text: "Okay" },
			]);
		}
	};

	return (
		<View style={styles.container}>
			<Header />

			<View style={styles.content}>
				<AddTodo handleAdd={handleAdd} />

				<View>
					<FlatList
						data={todos}
						renderItem={({ item }) => {
							return (
								<TodoItem
									handleRemove={handleRemove}
									item={item}
								/>
							);
						}}
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
});
