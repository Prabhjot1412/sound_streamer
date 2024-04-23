import Consts from "../../consts.json"

export async function fundCalendarsFromUserToken(user_token) {
  try {
    let url = `${Consts.backend_base}/api/fetch_calendars?user_token=${user_token}`
    console.log(url)
    let response = await fetch(url)
    let response_json = await response.json()
    return response_json
  } catch(er) {
    console.log(er)
  }
}
