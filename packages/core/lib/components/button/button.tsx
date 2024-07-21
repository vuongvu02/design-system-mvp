import styles from "./button.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return (
    <button className={`${className} ${styles.button}`} {...restProps}>
      test
    </button>
  );
}
