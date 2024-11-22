import { UserDTO } from "./UserDTO";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: "client" | "admin";
  // settings: { fontSize: number };
  createdAt: Date;
  updatedAt: Date;
  activationToken: string | null;
}

export interface LoginReturnData {
  user: UserDTO;
  accessToken: string;
}
