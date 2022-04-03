export interface IFilmResponse {
	Search: IFilmData[]
	totalResults: string
	Response: "True"
}
export interface IFilmData {
	readonly Title: string
	readonly Year: string
	readonly imdbID: string
	readonly Type: string
	readonly Poster: string
}
export interface IFilmDataError {
	readonly Response: "False"
	readonly Error: string
}
