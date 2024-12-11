import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  HeartIcon,
  ShoppingCartIcon,
  ClockIcon,
  FireIcon,
  BanknotesIcon,
  ScaleIcon,
  PlusIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import "./DishCard.scss";

export const DishCard = ({ item, backHandler }) => {
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
      <button className="dish__back-btn" onClick={backHandler}>
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <h2 className="dish__name">{item.name}</h2>
      <div className="dish__info">
        {/* <p className="dish__category">{item.category}</p> */}
        <div className="dish__info-item">
          <HeartIcon className="h-5 w-5" />
          <span>{item.likes}</span>
        </div>
        <div className="dish__info-item">
          <FireIcon className="h-5 w-5" />
          <span>{item.calories} kcal</span>
        </div>
        <div className="dish__info-item">
          <ScaleIcon className="h-5 w-5" />
          <span>{item.weight} gramm</span>
        </div>
        <div className="dish__info-item">
          <ClockIcon className="h-5 w-5" />
          <span>{item.preparation_time} min</span>
        </div>
        <div className="dish__info-item">
          <BanknotesIcon className="h-5 w-5" />
          <span>{item.price.toFixed(2)} UAH</span>
        </div>
      </div>
      <div className="dish__image-container">
        <img src={item.image_url} alt={item.name} className="dish__image" />
      </div>
      <p className="dish__description">{item.description}</p>
      <div className="dish__suggestion suggestion">
        <h2 className="suggestion__title">Drink suggestions</h2>
        <div className="suggestion__content">
          <div className="suggestion__item flex flex-col">
            <div className="suggestion__image"></div>
            <p className="suggestion__name">Pellegrino Vine</p>
            <p className="suggestion__price">150 UAH</p>
            <div className="flex justify-between w-full">
              <button>
                <HeartIcon className="h-5 w-5" />
              </button>
              <button className="bg-orange-400 text-white p-1 rounded-lg">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="suggestion__item flex flex-col">
            <div className="suggestion__image"></div>
            <p className="suggestion__name">Pellegrino Vine</p>
            <p className="suggestion__price">150 UAH</p>
            <div className="flex justify-between w-full">
              <button>
                <HeartIcon className="h-5 w-5" />
              </button>
              <button className="bg-orange-400 text-white p-1 rounded-lg">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="suggestion__item flex flex-col">
            <div className="suggestion__image"></div>
            <p className="suggestion__name">Pellegrino Vine</p>
            <p className="suggestion__price">150 UAH</p>
            <div className="flex justify-between w-full">
              <button>
                <HeartIcon className="h-5 w-5" />
              </button>
              <button className="bg-orange-400 text-white p-1 rounded-lg">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dish__ordering">
        {/* <div className="dish__counter">
          <button className="dish__counter-button" onClick={decrement}>
            -
          </button>
          <span className="dish__counter-value">{count}</span>
          <button className="dish__counter-button" onClick={increment}>
            +
          </button>
        </div> */}
        <button className="dish__order-button">
          <ShoppingCartIcon className="h-5 w-5" />
          Add to order
        </button>
      </div>
    </div>
  );
};

export default DishCard;
