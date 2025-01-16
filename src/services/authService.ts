import { authClient } from "../api/authClient";

interface AuthCredentials {
  email: string;
  password: string;
}

interface ResetPasswordData {
  newPassword: string;
  newPasswordConfirmation: string;
  resetToken: string;
}

interface ResetData {
  email: string;
}

interface LoginReturnData {
  token: string;
}

function register(credentials: AuthCredentials) {
  return authClient.post("/auth/registration", credentials);
}

function login(
  credentials: Partial<AuthCredentials>
): Promise<LoginReturnData> {
  return authClient.post("/auth/login", credentials);
}

/**
 * Initiates Google login by redirecting the user to the Google authentication page.
 */
function loginGoogle(): void {
  window.open(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, "_self");
}

function loginGoogleFireBase(idToken: string) {
  return authClient.post("/auth/google", { idToken });
}

function logout() {
  return authClient.post("/logout");
}

function activate(activationToken: string): Promise<LoginReturnData> {
  return authClient.get(`/activate/${activationToken}`);
}

function refresh(): Promise<LoginReturnData> {
  return authClient.get("/refresh");
}

function reset(data: ResetData) {
  return authClient.post("/forgotPassword", data);
}

function resetPassword(data: ResetPasswordData) {
  return authClient.post(`/resetPassword/${data.resetToken}`, {
    password: data.newPassword,
    passwordConfirm: data.newPasswordConfirmation,
  });
}

export const authService = {
  register,
  login,
  loginGoogle,
  loginGoogleFireBase,
  logout,
  activate,
  refresh,
  reset,
  resetPassword,
};
