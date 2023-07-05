import { useTheme } from "next-themes";
import css from "./index.module.css";

const ButtonToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
        checked={theme == "dark" ? true : false}
        id="chk"
      />
      <label className={css.label} htmlFor="chk">
        <i className={`fas fa-moon ${css.faMoon}`}></i>
        <i className={`fas fa-sun ${css.faSun}`}></i>
        <div className={css.ball}></div>
      </label>
    </div>
  );
};

export default ButtonToggleDarkMode;
