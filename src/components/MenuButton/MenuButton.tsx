import "./MenuButton.scss";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const MenuButton: React.FC<Props> = ({ isMenuOpen, toggleMenu }) => {
  return (
    // <div className="flex gap-3 text-white">
    <button
      className={`burger-menu ${isMenuOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
  {
    /* MENU
    </div> */
  }
};
