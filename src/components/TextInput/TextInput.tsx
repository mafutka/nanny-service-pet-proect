import css from "./TextInput.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput(props: Props) {
  return <input className={css.input} {...props} />;
}