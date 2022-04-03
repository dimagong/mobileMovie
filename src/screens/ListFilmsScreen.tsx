import { DrawerScreenProps } from "@react-navigation/drawer"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { IFilmData } from "../interfaces/interfaces"
import FilmCard from "../widget/FilmCard"

import { v4 } from "uuid"

export default function ListFilms({ route, navigation }: DrawerScreenProps<any>) {
	const listFilms = route.params?.listFilms as IFilmData[]
	console.log("listFilms", listFilms)
	console.log("uuid()", v4())
	return (
		<ScrollView>
			<Text style={styles.content}>Films List</Text>
			{listFilms.map((el) => {
				return (
					<View key={v4()}>
						{FilmCard({ title: el.Title, subtitle: el.Year, urlFilm: el.Poster })}
					</View>
				)
			})}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		// backgroundColor: "#6573c3",
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		color: "white",
	},
})
