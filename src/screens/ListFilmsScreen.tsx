import { StyleSheet, View, Text } from "react-native"

export default function ListFilms() {
	return (
		<View style={styles.box}>
			<Text style={styles.content}>Films List</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: "#6573c3",
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		color: "white",
	},
})
