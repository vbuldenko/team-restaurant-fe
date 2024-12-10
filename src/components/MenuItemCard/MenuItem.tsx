import { HeartIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type MenuItemCardProps = {
  data: any;
  selected?: boolean;
  clickHandler?: (id: number) => void;
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  data,
  selected,
  clickHandler,
}) => {
  const {
    id,
    name,
    description,
    category,
    price,
    image_url,
    weight,
    calories,
    likes,
  } = data;
  return (
    // <NavLink to={id.toString()}>
    <div
      className={classNames("menu-item", {
        "menu-item--selected": selected,
      })}
      onClick={() => clickHandler(data)}
    >
      {/* <div className="menu-item__calories">
        <span className="w-min">{calories} kcal</span>
      </div> */}
      {/* <div className="menu-item__likes">
        <span className="w-min text-center">
          {weight} gram
        </span>
      </div> */}
      <div className="menu-item__image-container">
        <img src={image_url} alt={name} className="menu-item__image" />
      </div>
      <div className="menu-item__content">
        <h3 className="menu-item__name">{name}</h3>
        <p className="menu-item__description">{description}</p>
        {/* <div className="flex gap-4 items-center justify-between w-full py-2">
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
        </div> */}
      </div>
    </div>
    // </NavLink>
  );
};

export default MenuItemCard;
