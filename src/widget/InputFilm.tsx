import React from "react"
import {
	NativeSyntheticEvent,
	SafeAreaView,
	StyleSheet,
	TextInput,
	TextInputChangeEventData,
} from "react-native"

export interface IProps {
	value: string
	onChangeMovie: Function
}

const InputFilm = ({ value, onChangeMovie }: IProps): JSX.Element => {
	const onChange = (text: string) => {
		onChangeMovie(text)
	}
	return (
		<SafeAreaView>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChange(text)}
				value={value}
				placeholder='enter movies name'
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
})

export default InputFilm
