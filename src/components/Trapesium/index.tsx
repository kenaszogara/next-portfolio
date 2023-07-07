import styles from "./Trapesium.module.scss";

type ColorOption = "red" | "blue" | "green" | "yellow";

type TrapesiumProps = {
  width?: string;
  height?: string;
  color?: ColorOption;
};

export default function Trapesium({
  width = "100px",
  height = "100px",
  color = "green",
}: TrapesiumProps) {
  return (
    <div
      className={`${styles.box} ${styles[color]}`}
      style={{ width, height }}
    ></div>
  );
}
