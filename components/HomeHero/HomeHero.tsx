import css from "./HomeHero.module.css"

export default function HomeHero() {
    return (
        <section className={css.hero}>
        <div className={css.HeroContainer}>
        <div className={css.heroInfo}>
            <h1 className={css.heroTitle}>Make Life Easier for the Family:</h1>
            <p className={css.heroText}>Find Babysitters Online for All Occasions</p>
            <button className={css.heroBtn}>Get started 
                <span>

                </span>
            </button>
        </div>
        </div>
        <div className={css.imgWrapper}>
            <img className={css.heroImg} src="/HeroPicture.jpg" width="699" height="736" alt="Hero Picture" />
            <div className={css.badgeWrapper}>
            <div className={css.badjeInfo}>
                <p className={css.badjeText}>Experienced nannies</p>
                <h3 className={css.badjeNumber}>15,000</h3>
            </div>
        </div>
        </div>
    
        </section>
    )
}