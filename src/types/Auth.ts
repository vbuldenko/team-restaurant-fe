export interface AuthCredentials {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: "client" | "admin";
}

export interface ResetPasswordData {
  password: string;
  passwordConfirm: string;
  resetToken: string | undefined;
}

export interface ResetData {
  email: string;
}
