import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";

function Layout({ children }) {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="App">
            <Menu menuOpen={menuOpen} openMenu={openMenu} closeMenu={closeMenu} />

            <nav className={menuOpen ? "navLinks active" : "navLinks"}>
                <Link to="/" className="link" onClick={closeMenu}>{t("home")}</Link>
                <Link to="/beaches" className="link" onClick={closeMenu}>{t("beaches")}</Link>
                <Link to="/restaurants" className="link" onClick={closeMenu}>{t("restaurants")}</Link>
                <Link to="/barcelona" className="link" onClick={closeMenu}>{t("bcn")}</Link>
                <Link to="/active" className="link" onClick={closeMenu}>{t("active-nature")}</Link>
                <Link to="/shopping" className="link" onClick={closeMenu}>{t("shopping")}</Link>
            </nav>

            {children}
        </div>
    );
}

export default Layout;