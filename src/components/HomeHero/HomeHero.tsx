import Link from "next/link"
import css from "./HomeHero.module.css"

export default function HomeHero({ children }: { children: React.ReactNode }) {
  return (
    <section className={css.hero}>
      {children}
      <div className={css.heroContainer}>
        <div className={css.heroInfo}>
          <h1 className={css.heroTitle}>Make Life Easier for the Family:</h1>
          <p className={css.heroText}>
            Find Babysitters Online for All Occasions
          </p>
        
<Link href="/nannies" className={css.heroBtn}>
  Get started
  <span>
    <svg width="14" height="16" className={css.heroIcon1}>
      <use href="/symbol-defs.svg#icon-Arrow-16"></use>
    </svg>
  </span>
</Link>
        </div>
      </div>
      <div className={css.imgWrapper}>
        <img
          className={css.heroImg}
          src="/HeroPicture.jpg"
          width="699"
          height="736"
          alt="Hero Picture"
        />
        <div className={css.badgeWrapper}>
            <div className={css.bedjeIcon}>
            <svg width="28" height="18" className={css.heroIcon2}>
                <use href="/symbol-defs.svg#icon-feCheck0"></use>
              </svg>
              </div>
          <div className={css.badjeInfo}>
            <p className={css.badjeText}>Experienced nannies</p>
            <h3 className={css.badjeNumber}>15,000</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
