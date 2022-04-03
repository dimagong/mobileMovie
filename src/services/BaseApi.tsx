//import AppConstants from "../app/AppConstants"
import { AxiosRequestConfig } from "axios"

export default class BaseApi {
	static HOST: string = BaseApi.init()

	protected static init(): string {
		console.info("ENV:", process.env.NODE_ENV)

		let REST_ENDPOINT = "http://www.omdbapi.com/?apikey=19ee6e93&"

		if (process.env.NODE_ENV === "production") {
			REST_ENDPOINT = "http://www.omdbapi.com/?apikey=19ee6e93&" // NginX
		} else if (process.env.NODE_ENV === "development") {
			REST_ENDPOINT = "http://www.omdbapi.com/?apikey=19ee6e93&"
		} else if (process.env.NODE_ENV === "test") {
			REST_ENDPOINT = "http://www.omdbapi.com/?apikey=19ee6e93&"
		}
		console.info("REST API ENDPOINT:", REST_ENDPOINT)

		return REST_ENDPOINT
	}

	protected static getConfig(): AxiosRequestConfig {
		//let token = sessionStorage.getItem("accessToken");
		//let token = "310cfb111bmsh8ba8881333f54bcp16ce84jsn7f800c010af2"
		const HEADERS = {
			// "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
			// "X-RapidAPI-Key": "310cfb111bmsh8ba8881333f54bcp16ce84jsn7f800c010af2",
			Accept: "application/json",
			"Content-Type": "application/json",
			//Authorization: "Bearer " + token,
			//Language: stores.applicationStore.getUserLanguage
		}

		const CONFIG: AxiosRequestConfig = {
			baseURL: BaseApi.HOST,
			headers: HEADERS,
		}

		return CONFIG
	}
}
