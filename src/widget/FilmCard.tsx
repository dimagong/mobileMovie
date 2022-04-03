import * as React from "react"
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper"
import { StyleSheet } from "react-native"
//const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />
export interface IProps {
	title: string
	subtitle: string
	urlFilm: string
}
const FilmCard = ({ title, subtitle, urlFilm }: IProps): JSX.Element => (
	<Card>
		{/* <Card.Title title='Card Title' subtitle='Card Subtitle' left={LeftContent} /> */}
		{/* <Card.Title title={title} subtitle={subtitle} /> */}
		<Card.Content>
			<Title>{title}</Title>
			<Paragraph>{subtitle}</Paragraph>
		</Card.Content>
		<Card.Cover style={styles.img} source={{ uri: urlFilm }} />
		<Card.Actions>
			<Button>Cancel</Button>
			<Button>Ok</Button>
		</Card.Actions>
	</Card>
)

const styles = StyleSheet.create({
	img: {
		textAlign: "center",
		height: 400,
		width: "auto",
	},
})

export default FilmCard
