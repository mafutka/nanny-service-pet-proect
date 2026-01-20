import css from "./TextInput.module.css"

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea(props: Props) {
  return <textarea className={css.input} {...props} />
}