import css from "./FormLayout.module.css";

type Props = {
  title: string;
  text: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

export default function FormLayout({ title, text, onSubmit, children }: Props) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>

      <form className={css.form} onSubmit={onSubmit}>
        <div className={css.fields}>
          {children}
        </div>
      </form>
    </div>
  );
}