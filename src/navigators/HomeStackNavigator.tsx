import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../../src/screens/HomeScreen"
import ListFilms from "../../src/screens/ListFilmsScreen"

const Stack = createNativeStackNavigator()

export default function HomeStackNavigator() {
	return (
		<Stack.Navigator initialRouteName='Home Page'>
			<Stack.Screen
				name='Home Page'
				component={HomeScreen}
				options={{
					title: "Watch the best films",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='Films'
				component={ListFilms}
				options={{ title: "Films page", headerTitleAlign: "center" }}
			/>
		</Stack.Navigator>
	)
}
