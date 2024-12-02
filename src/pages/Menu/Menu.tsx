import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu.scss";
import classNames from "classnames";
import { HeartIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

type MenuItemCardProps = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  selected: boolean;
  clickHandler: (id: number) => void;
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  description,
  category,
  price,
  image_url,
  selected,
  calories,
  weight,
  likes,
  clickHandler,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);
  return (
    <div
      className={classNames("menu-item", {
        "menu-item--selected": selected,
      })}
      onClick={() => clickHandler(id)}
    >
      <div className="menu-item__calories">
        <span className="w-min">{calories} kcal</span>
      </div>
      <div className="menu-item__likes">
        <span className="w-min">
          <HeartIcon className="h-5 w-5" />
          {likes}
        </span>
      </div>
      <div className="menu-item__image-container">
        <img src={image_url} alt={name} className="menu-item__image" />
      </div>
      <div className="menu-item__content">
        <h3 className="menu-item__name">{name}</h3>
        <p className="menu-item__description">{description}</p>
        <div className="flex gap-4 items-center justify-between w-full py-2">
          <div className="menu-item__counter">
            <button className="menu-item__counter-button" onClick={decrement}>
              -
            </button>
            <span className="menu-item__counter-value">{count}</span>
            <button className="menu-item__counter-button" onClick={increment}>
              +
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="menu-item__price">${price.toFixed(2)}</p>
            <button className="menu-item__order-button">
              <ShoppingCartIcon className="h-5 w-5" />
              {selected && "Add to order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const { t } = useTranslation();
  const [menuItems, setMenuItems] = useState<MenuItemCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

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

  const handleItemClick = (id: number) => {
    setSelectedItemId(id);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container py-20">
      <h1>Restaurant Menu</h1>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItemCard
            key={item.id}
            {...item}
            selected={item.id === selectedItemId}
            clickHandler={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
