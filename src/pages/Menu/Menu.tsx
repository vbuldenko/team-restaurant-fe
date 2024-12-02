import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu.scss";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  available: boolean;
}

const Menu = () => {
  const { t } = useTranslation();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Adjust the path based on where your JSON is located
    axios
      .get("/data/menu.json") // If in 'public' folder
      .then((response) => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch menu data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
