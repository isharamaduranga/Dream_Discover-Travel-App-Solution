import ApiService from "./apiService"


export async function createNewClient(userDetails) {
  const apiObject = {}
  apiObject.method = "POST"
  apiObject.authentication = false
  apiObject.endpoint = "client"
  apiObject.urlencoded = false
  apiObject.X_API_KEY = true
  apiObject.X_CLIENT_KEY = false
  apiObject.body = userDetails
  return await ApiService.callApi(apiObject)
}

export async function loginExistingClient(userCredentials) {
  const apiObject = {}
  apiObject.method = 'POST'
  apiObject.authentication = false
  apiObject.endpoint = 'client/login'
  apiObject.isBasicAuth = false
  apiObject.urlencoded = false
  apiObject.X_API_KEY = true
  apiObject.X_CLIENT_KEY = false
  apiObject.body = userCredentials
  return await ApiService.callApi(apiObject)
}
