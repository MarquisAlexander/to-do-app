import React, { useState } from "react";

import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	FlatList,
} from "react-native";

import { styles } from "./styles";

export function Home() {
	const [items, setItems] = useState([]);
	const [itemName, setItemName] = useState("");
	const [loading, setLoading] = useState(false);

	function handleAddItemToList(title) {
		const newItems = items;
		newItems.push({
			id: Math.floor(Math.random() * 1000),
			itemName: title,
			isFinished: false,
		});

		setItems(newItems);
		setItemName("");
		setLoading(!loading);
	}

	function checkTask(task) {
		const newArray = items.map((item) => {
			if (item.id === task.id) {
				return { ...item, isFinished: !item.isFinished };
			}
			return item;
		});
		setItems(newArray);
	}

	function removeTask(id) {
		const array = items;
		array.splice(
			items.findIndex((item) => item.id === id),
			1,
		);
		console.log("newArray", array);
		setItems(array);
		setLoading(!loading);
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerBackground} />
			<View style={styles.content}>
				<View style={styles.form}>
					<TextInput
						style={styles.input}
						value={itemName}
						onChangeText={(e) => setItemName(e)}
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor="#808080"
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleAddItemToList(itemName)}
					>
						<Text style={styles.buttonText}>+</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingBottom: 20,
					}}
				>
					<Text style={styles.textTotalTasks}>
						Criadas <Text>{items.length}</Text>
					</Text>
					<Text style={styles.textTotalFinishedTasks}>
						Concluídas <Text>{items.length}</Text>
					</Text>
				</View>
				<FlatList
					data={items}
					extraDat={loading}
					ListEmptyComponent={() => (
						<View>
							<Text>Você ainda não tem tarefas cadastradas</Text>
							<Text>Crie tarefas e organize seus itens a fazer</Text>
						</View>
					)}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.cardItem}
							onPress={() => checkTask(item)}
						>
							<Text>{item.isFinished ? "ok" : "x"}</Text>
							<Text style={styles.itemTitle}>{item.itemName}</Text>
							<TouchableOpacity onPress={() => removeTask(item.id)}>
								<Text>Trash</Text>
							</TouchableOpacity>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
}
