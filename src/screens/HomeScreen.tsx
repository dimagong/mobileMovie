import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import RestApi from "../services/RestApi"
import InputFilm from "../widget/InputFilm"
import { IFilmData, IFilmDataError, IFilmResponse } from "../interfaces/interfaces"

export default function HomeScreen({ navigation }: any) {
	const [nameFilm, onChangeMovie] = useState<string>("")
	const [searchResult, onSearchResult] = useState<number | string>(0)
	const [listFilms, onListFilms] = useState<IFilmData[]>([])
	useEffect(() => {
		console.log("useEffect")
		RestApi.findListMovies(nameFilm)
			.then((data: IFilmResponse | IFilmDataError) => {
				if ((data as IFilmDataError).Error) {
					if ((data as IFilmDataError).Error === "Incorrect IMDb ID.") {
						onSearchResult(0)
					} else {
						onSearchResult((data as IFilmDataError).Error)
					}
				} else if ((data as IFilmResponse).totalResults) {
					onSearchResult(+(data as IFilmResponse).totalResults)
					onListFilms((data as IFilmResponse).Search)
				}
			})
			.catch((err) => console.error("Fucking error occurred: ", err))
			.finally(() => {})
	}, [nameFilm])

	console.log("nameFilm is", nameFilm)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Enter the movie title </Text>
			<StatusBar animated={true} backgroundColor='#61dafb' style='auto' />
			<InputFilm {...{ value: nameFilm, onChangeMovie }} />

			<Text style={styles.title}>Search results: </Text>
			<Text style={styles.subtitle}> -- {searchResult} -- </Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Films", { listFilms: listFilms })}
			>
				<Text style={styles.buttonTitle}>Show selected films</Text>
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
	title: {
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 10,
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#3f51b5",
	},
	button: {
		backgroundColor: "#3f51b5",
		padding: 10,
		borderRadius: 10,
		marginTop: 10,
	},
	buttonTitle: {
		fontSize: 20,
		padding: 10,
		color: "white",
	},
})
