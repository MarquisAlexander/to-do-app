import { View, Text, Image } from "react-native";

import { styles } from "./styles";

export function EmptyList() {
	return (
		<View
			style={{
				alignItems: "center",
				borderTopWidth: 1,
				borderColor: "#333333",
			}}
		>
			<Image
				source={{
					uri: "https://user-images.githubusercontent.com/51330232/198156570-b3e4e01c-84f5-4885-aafc-0127e25ac041.png",
				}}
				resizeMode="contain"
				style={{ height: 56, width: 56, marginTop: 24, marginTop: 48 }}
			/>
			<Text style={styles.emptyListTitle}>
				Você ainda não tem tarefas cadastradas
			</Text>
			<Text style={styles.emptyListSubTitle}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
}
