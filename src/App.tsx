import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/"></Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2024 Restaurant</footer>
    </div>
  );
};

export default App;
