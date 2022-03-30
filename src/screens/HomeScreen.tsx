import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar animated={true} backgroundColor='#61dafb' style='auto' />
			<TouchableOpacity
				onPress={() => navigation.navigate("Films")}
				style={{ backgroundColor: "#3f51b5", padding: 10, borderRadius: 10 }}
			>
				<Text style={{ fontSize: 20, color: "white" }}>Best films</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
