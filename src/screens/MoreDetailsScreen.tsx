import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Constants from "expo-constants"
// or any pure javascript modules available in npm
import { Card } from "react-native-paper"
import InfoCard from "../widget/InfoCard"

export default function MoreDetails({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>MoreDetails MoreDetails MoreDetails MoreDetails</Text>
			{/* <Card>
				<InfoCard />
			</Card> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
})
