import toast from "react-hot-toast"

export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const PASSWORD_REGEX = /^.{5,}$/
export const NAME_REGEX = /^[A-z ]+$/


export const validateLoginDetails = (state) => {
  if (state.username.trim() === "" || !EMAIL_REGEX.test(state.username)) {
    toast.error("Please enter valid email address")
    return false
  }
  if (state.password.trim() === "" || !PASSWORD_REGEX.test(state.password)) {
    toast.error("Please enter valid password")
    return false
  }

  return true
}
export const validateRegisterDetails = (state) => {
  if (state.username.trim() === "" || !NAME_REGEX.test(state.username)) {
    toast.error("Please enter valid user name")
    return false
  }
  if (state.email.trim() === "" || !EMAIL_REGEX.test(state.email)) {
    toast.error("Please enter valid email address")
    return false
  }
  if (state.password.trim() === "" || !PASSWORD_REGEX.test(state.password)) {
    toast.error("Please enter valid password")
    return false
  }
  if (state.user_img === null) {
    toast.error("Please enter valid file img")
    return false
  }
  return true
}

