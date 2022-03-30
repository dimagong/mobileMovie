import { createDrawerNavigator } from "@react-navigation/drawer"
import MenuScreen from "../screens/MenuScreen"

const Drawer = createDrawerNavigator()

export default function MenuDrawerNavigator() {
	return (
		<Drawer.Navigator initialRouteName='Menu'>
			<Drawer.Screen name='Menu' component={MenuScreen} />
		</Drawer.Navigator>
	)
}
