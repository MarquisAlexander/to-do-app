import { TouchableOpacity, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

export function CardItem({ item, checkTask, removeTask }) {
	return (
		<TouchableOpacity
			style={item.isFinished ? styles.finishedCardItem : styles.cardItem}
			onPress={() => checkTask(item)}
		>
			<View style={{flexDirection: "row", flex: 1, alignItems: "center"}}>
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
			</View>
			<TouchableOpacity onPress={() => removeTask(item.id)}>
				<Ionicons name="trash-outline" color="#808080" size={18} />
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
