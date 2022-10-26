import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

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
						paddingHorizontal: 24,
					}}
				>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.textTotalTasks}>Criadas </Text>
						<View style={styles.wrapperLenght}>
							<Text style={styles.lenght}>{items.length}</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.textTotalFinishedTasks}>Concluídas </Text>
						<View style={styles.wrapperLenght}>
							<Text style={styles.lenght}>
								{items.filter((item) => item.isFinished).length}
							</Text>
						</View>
					</View>
				</View>
				<FlatList
					data={items}
					style={{
						paddingHorizontal: 24,
					}}
					extraDat={loading}
					ListEmptyComponent={() => (
						<View>
							<Text>Você ainda não tem tarefas cadastradas</Text>
							<Text>Crie tarefas e organize seus itens a fazer</Text>
						</View>
					)}
					ItemSeparatorComponent={() => <View style={styles.line} />}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={
								item.isFinished ? styles.finishedCardItem : styles.cardItem
							}
							onPress={() => checkTask(item)}
						>
							{item.isFinished ? (
								<MaterialIcons name="check-circle" color="#5E60CE" size={24} />
							) : (
								<MaterialIcons
									name="radio-button-unchecked"
									color="#4EA8DE"
									size={24}
								/>
							)}
							<Text style={styles.itemTitle}>{item.itemName}</Text>
							<TouchableOpacity onPress={() => removeTask(item.id)}>
								<Ionicons name="trash-outline" color="#808080" size={18} />
							</TouchableOpacity>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
}
