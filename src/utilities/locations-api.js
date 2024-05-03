import sendRequest from "./send-request";
const BASE_URL = '/locations';


export async function create(searchTerm) {
    return sendRequest(BASE_URL, 'POST', searchTerm)
}
  