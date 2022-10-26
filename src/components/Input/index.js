import { View, TextInput, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export function Input({ onPressAdd, value, onChangeText }) {
	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={(e) => onChangeText(e)}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor="#808080"
			/>
			<TouchableOpacity style={styles.button} onPress={() => onPressAdd()}>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
}
