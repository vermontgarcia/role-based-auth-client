export type UserDataType = {
  _id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  role: string,
  clientId: number,
}

export type AlertType = {
  severity: "error" | "success" | "info" | "warning",
  message: string
}