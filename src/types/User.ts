import { Order } from "./Order";
import { Reservation } from "./Reservation";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
  isActivated: boolean;
  reservations: Reservation[];
  orders: Order[];
}
