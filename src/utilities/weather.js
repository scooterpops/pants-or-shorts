import sendRequest from "./send-request";
const BASE_URL = '/api/weather';

export async function getWeather(searchTerm) {
  return sendRequest(BASE_URL, 'GET', searchTerm)
}