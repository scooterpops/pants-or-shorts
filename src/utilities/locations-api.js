import sendRequest from "./send-request";
const BASE_URL = '/locations';


export async function create(location) {
    return sendRequest(BASE_URL, 'POST', location)
}
  