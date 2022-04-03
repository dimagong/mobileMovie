import axios from "axios"
import { IFilmData, IFilmDataError, IFilmResponse } from "../interfaces/interfaces"
import BaseApi from "./BaseApi"

export default class RestApi extends BaseApi {
	public static findListMovies = async (
		nameFilm: string
	): Promise<IFilmResponse | IFilmDataError> => {
		//const resp = await axios.get(`${BaseApi.HOST}t=movie&y=2020`, BaseApi.getConfig())
		const resp = await axios.get(`${RestApi.HOST}s=${nameFilm}`)
		console.log("${RestApi.endpoint}s=day", resp)
		return resp.data
	}
}
