import { Nanny } from "@/types/nannies";
import css from "./NannyInfo.module.css"

type Props = {
  nanny: Nanny
}

export default function NannyInfo({ nanny }: Props) {
  return (
    <div className={css.nannyInfo}>
      <div className={css.image}>
        <img
          width="44"
          height="44"
          src={nanny.avatar_url}
          alt={nanny.name}
          className={css.avatar}
        />
      </div>

      <div className={css.nannyName}>
        <p className={css.yourNanny}>Your nanny</p>
        <h3 className={css.nanny}>{nanny.name}</h3>
      </div>
    </div>
  )
}
