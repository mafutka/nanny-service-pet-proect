import Navigation from "../Navigation/Navigation"
import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={css.header}>
            <p className={css.headerLogo}>Nanny.Services</p>
            <Navigation />
        </header>
    )

}