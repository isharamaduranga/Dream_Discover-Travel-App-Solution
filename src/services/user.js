import ApiService from "./apiService"


export async function createNewClient(userDetails) {
  const apiObject = {}
  apiObject.method = "POST"
  apiObject.authentication = false
  apiObject.endpoint = "register"
  apiObject.isBasicAuth = false
  apiObject.urlencoded = false
  apiObject.multipart = true
  apiObject.body = userDetails
  return await ApiService.callApi(apiObject)
}

export async function loginExistingClient(userCredentials) {
  const apiObject = {}
  apiObject.method = 'POST'
  apiObject.authentication = false
  apiObject.endpoint = 'login'
  apiObject.isBasicAuth = false
  apiObject.urlencoded = false
  apiObject.body = userCredentials
  return await ApiService.callApi(apiObject)
}
