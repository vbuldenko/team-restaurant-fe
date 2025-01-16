import { Dish } from "./Dish";

export interface Order {
  id: number;
  userId: number;
  orderItems: Dish[];
  totalAmount: number;
  orderDate: string;
  status: "pending" | "preparing" | "ready" | "completed" | "cancelled";
  total: number;
  specialInstructions?: string;
}
