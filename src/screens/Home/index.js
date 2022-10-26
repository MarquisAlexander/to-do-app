import React, { useState } from "react";

import {
	View,
	Text,
	FlatList,
	Image,
} from "react-native";

import { styles } from "./styles";
import { EmptyList } from "../../components/EmptyList";
import { CardItem } from "../../components/CardItem";
import { Input } from "../../components/Input";

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
			<Image
				source={{
					uri: "https://user-images.githubusercontent.com/51330232/198155529-7870ddfd-21cd-4aa1-9aff-432dc85e21ed.png",
				}}
				resizeMode="contain"
				style={styles.logo}
			/>
			<View style={styles.content}>
				<Input
					value={itemName}
					onPressAdd={() => handleAddItemToList(itemName)}
					onChangeText={(e) => setItemName(e)}
				/>
				<View style={styles.resumeHeader}>
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
					style={styles.flatList}
					extraDat={loading}
					ListEmptyComponent={() => <EmptyList />}
					ItemSeparatorComponent={() => <View style={styles.line} />}
					renderItem={({ item }) => (
						<CardItem
							item={item}
							checkTask={(item) => checkTask(item)}
							removeTask={(id) => removeTask(id)}
						/>
					)}
				/>
			</View>
		</View>
	);
}
