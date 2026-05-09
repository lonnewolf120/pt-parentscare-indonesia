export const setUserCookie = (user: any, token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
  }
}

export const baseUrl = "https://ap2.shalish.xyz"
