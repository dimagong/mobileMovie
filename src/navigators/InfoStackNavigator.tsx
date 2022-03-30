import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../../src/screens/HomeScreen"
import ListFilms from "../../src/screens/ListFilmsScreen"
import InfoScreen from "../screens/InfoScreen"
import MoreDetailsScreen from "../screens/MoreDetailsScreen"

const Stack = createNativeStackNavigator()

export default function InfoStackNavigator() {
	return (
		<Stack.Navigator initialRouteName='Info Page'>
			<Stack.Screen
				name='Info Page'
				component={InfoScreen}
				options={{
					title: "About us",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='More details'
				component={MoreDetailsScreen}
				options={{ title: "More details", headerTitleAlign: "center" }}
			/>
		</Stack.Navigator>
	)
}
