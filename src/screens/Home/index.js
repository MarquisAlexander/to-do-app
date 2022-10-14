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

	function handleAddItemToList(item) {
		setItems((prevState) => [...prevState, item]);
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
				<FlatList
					data={items}
					ListEmptyComponent={() => (
						<View>
							<Text>Você ainda não tem tarefas cadastradas</Text>
							<Text>Crie tarefas e organize seus itens a fazer</Text>
						</View>
					)}
					renderItem={({ item }) => (
						<View style={styles.cardItem}>
							<Text>x</Text>
							<Text style={styles.itemTitle}>{item}</Text>
							<TouchableOpacity>
								<Text>Trash</Text>
							</TouchableOpacity>
						</View>
					)}
				/>
			</View>
		</View>
	);
}
