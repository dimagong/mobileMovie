import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import InfoScreen from "./src/screens/InfoScreen"
import HomeStackNavigator from "./src/navigators/HomeStackNavigator"
import { Ionicons } from "@expo/vector-icons"
import MenuDrawerNavigator from "./src/navigators/MenuDrawerNavigator"
import HomeDrawNavigator from "./src/navigators/HomeDrawNavigator"
import InfoStackNavigator from "./src/navigators/InfoStackNavigator"

const Tab = createBottomTabNavigator()
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				// initialRouteName='HomeStackNavigator'
				initialRouteName='HomeDrawNavigator'
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === "Home") {
							return (
								<Ionicons
									name={focused ? "ios-information-circle" : "ios-information-circle-outline"}
									size={size}
									color={color}
								/>
							)
						} else if (route.name === "InfoData") {
							return (
								<Ionicons
									name={focused ? "ios-list-circle" : "ios-list"}
									size={size}
									color={color}
								/>
							)
						}
					},
					tabBarInactiveTintColor: "gray",
					tabBarActiveTintColor: "tomato",
				})}
			>
				{/* <Tab.Screen name='Home' component={HomeStackNavigator} /> */}
				<Tab.Screen name='Home' component={HomeDrawNavigator} />
				<Tab.Screen name='InfoData' component={InfoStackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
