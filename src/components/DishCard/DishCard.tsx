import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import "./DishCard.scss";

export const DishCard = ({ item }) => {
  // const { id } = useParams<{ id: string }>();
  // const [item, setItem] = useState<any>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  // useEffect(() => {
  //   axios
  //     .get("/data/menu.json")
  //     .then((response) => {
  //       const data = response.data;
  //       const foundItem = data.find((el: any) => el.id === Number(id));
  //       if (foundItem) {
  //         setItem(foundItem);
  //       } else {
  //         setError("Dish not found");
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError("Failed to fetch dish data");
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className="dish">
      <div className="dish__image-container">
        <img src={item.image_url} alt={item.name} className="dish__image" />
      </div>
      <div className="dish__content">
        <h2 className="dish__name">{item.name}</h2>
        <p className="dish__description">{item.description}</p>
        <p className="dish__category">{item.category}</p>
        <div className="dish__calories">
          <span>{item.calories} kcal</span>
        </div>
        <div className="dish__likes">
          <HeartIcon className="h-5 w-5" />
          <span>{item.likes}</span>
        </div>
        <div className="dish__counter">
          <button className="dish__counter-button" onClick={decrement}>
            -
          </button>
          <span className="dish__counter-value">{count}</span>
          <button className="dish__counter-button" onClick={increment}>
            +
          </button>
        </div>
        <p className="dish__price">${item.price.toFixed(2)}</p>
        <button className="dish__order-button">
          <ShoppingCartIcon className="h-5 w-5" />
          Add to order
        </button>
      </div>
    </div>
  );
};

export default DishCard;
