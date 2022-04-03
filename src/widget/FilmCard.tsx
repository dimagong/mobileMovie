import * as React from "react"
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper"

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
		<Card.Cover source={{ uri: urlFilm }} />
		<Card.Actions>
			<Button>Cancel</Button>
			<Button>Ok</Button>
		</Card.Actions>
	</Card>
)

export default FilmCard
