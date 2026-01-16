import css from "./Navigation.module.css"
export default function Navigation() {
    return (
        <nav className={css.nav}>
            <ul className={css.navlist}>
                <li className={css.navItem}>Home</li>
                <li className={css.navItem}>Nannies</li>
                <li className={css.navItem}>Favorites</li>
            </ul>
        </nav>
    )
}