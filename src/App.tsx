import { Outlet, Route, Routes } from "react-router";
import { Path } from "./types/Path";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import { DishCard } from "./components/DishCard";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={Path.Menu} element={<MenuPage />}>
          <Route path=":id" element={<DishCard />} />
        </Route>

        {/* <Route path={Path.Services} element={<ServicesPage />} />        <Route path={Path.Login} element={<LoginPage />} />
        <Route path={Path.SignUp} element={<SignUpPage />} />
        <Route path={Path.CheckEmail} element={<CheckEmailPage />} />
        <Route path={Path.Activate} element={<AccountActivation />} />
        <Route path={Path.Restore} element={<ForgotPassword />} />
        <Route path={Path.Reset} element={<ResetPassword />} /> */}
        {/* <Route element={<AuthRequired />}>
          <Route path={Path.Account} element={<AccountPage />}>
            <Route index element={<Overview />} />
            <Route path={Path.Settings} element={<Settings />} />
          </Route>
        </Route> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
