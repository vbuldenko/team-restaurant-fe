import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link, Outlet, NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import "./Menu.scss";
import { DishCard } from "../../components/DishCard";
import MenuItemCard from "../../components/MenuItemCard";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/data/menu.json")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setSelectedItem(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu items: ", error);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = [
    "All",
    ...new Set(
      menuItems
        .filter((item) => item.type === "Food")
        .map((item) => {
          return item.category;
        })
    ),
  ];

  let filteredMenuItems = menuItems;

  if (selectedCategory !== "All") {
    filteredMenuItems = menuItems.filter(
      (item) => item.category === selectedCategory
    );
    // setSelectedItem(filteredMenuItems[0]);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pt-24 pb-10 menu">
      <div className="menu__container container">
        <div className="menu__categories">
          {uniqueCategories.map((category, index) => (
            <span
              key={index}
              className={`menu__category ${category === selectedCategory ? "menu__category--selected" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="menu__items">
          {filteredMenuItems.map((item) => (
            <MenuItemCard
              key={item.id}
              data={item}
              selected={item.id === selectedItem?.id}
              clickHandler={handleItemClick}
            />
          ))}
        </div>
        <div className="menu__selected-item">
          {selectedItem && <DishCard item={selectedItem} />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
