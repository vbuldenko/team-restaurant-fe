import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../app/features/user/userThunk";
import { Path } from "../../types/Path";
import "./Auth.scss";
import Notification from "../../components/Notification";
import { useTranslation } from "react-i18next";
import { selectUser } from "../../app/features/user/userSlice";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, error } = useAppSelector(selectUser);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  // const location = useLocation();
  // const path = location.state?.from || "/account";

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await dispatch(login({ email, password }));
    setIsSubmitting(false);
    // setIdentifier("");
    // setPassword("");
    // navigate(path, { replace: true });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth__form-wrapper card-element ">
      <form className="auth__form" onSubmit={handleLogin}>
        <h2 className="auth__title">{t("login.title")}</h2>
        {error && (
          <Notification
            className="notification--error"
            message={error}
            type="error"
          />
        )}
        <div className="auth__input-wrapper">
          {/* <label htmlFor="identifier">Email or Phone Number</label> */}
          <input
            id="email"
            type="text"
            value={email}
            name="email"
            placeholder={t("login.identifierPlaceholder")}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="auth__input-wrapper">
          {/* <label htmlFor="password">Password</label> */}
          <input
            id="password"
            type="password"
            value={password}
            name="password"
            placeholder={t("login.passwordPlaceholder")}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit" className="auth__button" disabled={isSubmitting}>
          {isSubmitting && <div className="reservation-btn__spinner"></div>}
          {!isSubmitting && t("login.submitButton")}
        </button>
      </form>
      <div className="auth__signup-subsection">
        <div>
          <Link
            className="auth__signup-subsection__link auth__signup-subsection__link--accent"
            to={`/${Path.SignUp}`}
          >
            {t("login.register")}
          </Link>
        </div>
        <Link
          className="auth__signup-subsection__link text-sm"
          to={Path.Restore}
        >
          {t("login.forgotPassword")}
        </Link>
      </div>
    </div>
  );
};

export default Login;
