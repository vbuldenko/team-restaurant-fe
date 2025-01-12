// import { useTranslation } from "react-i18next";
import "./Reservation.scss";
import Slider from "../../components/Slider/Slider";
import RoomSchema from "../../components/RoomSchema";

export default function ReservationPage() {
  // const { t } = useTranslation();

  return (
    <div className="py-24">
      <Slider />
      <RoomSchema />
    </div>
  );
}
