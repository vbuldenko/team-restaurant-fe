import { useTranslation } from "react-i18next";
import "./Reservation.scss";
import Slider from "../../components/Slider/Slider";

export default function ReservationPage() {
  const { t } = useTranslation();

  // const slides = [
  //   { id: 1, imageUrl: "images/rooms/room_1.jpg" },
  //   { id: 2, imageUrl: "images/rooms/room_2.jpg" },
  //   { id: 3, imageUrl: "images/rooms/room_4.jpg" },
  // ];
  const slides = [
    "images/rooms/room_1.jpg",
    "images/rooms/room_2.jpg",
    "images/rooms/room_4.jpg",
  ];

  return (
    <div className="py-24">
      <Slider images={slides} />
      {/* <Slider slides={slides} /> */}
      Reservation Page
    </div>
  );
}
