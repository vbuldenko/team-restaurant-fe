export interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  reservationDate: string;
  reservationTime: string;
  specialRequests?: string;
  tableNumber: number;
  status: "pending" | "confirmed" | "cancelled";
}
