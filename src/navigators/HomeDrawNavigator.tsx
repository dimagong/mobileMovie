import * as React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "../screens/HomeScreen"
import ListFilmsScreen from "../screens/ListFilmsScreen"

const Drawer = createDrawerNavigator()

export default function HomeDrawNavigator() {
	return (
		<Drawer.Navigator initialRouteName='Main page'>
			<Drawer.Screen
				name='Main page'
				component={HomeScreen}
				options={{
					title: "Best movies",
					headerTitleAlign: "center",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			/>
			<Drawer.Screen
				name='Films'
				component={ListFilmsScreen}
				options={{
					title: "Films page",
					headerTitleAlign: "center",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			/>
		</Drawer.Navigator>
	)
}
