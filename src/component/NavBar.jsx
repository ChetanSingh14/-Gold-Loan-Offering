import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img
            src="https://images-platform.99static.com//6WO9qslvX4z_KVsmYm4VLDtyJX0=/142x158:1152x1168/fit-in/500x500/projects-files/42/4285/428536/65c33d19-f7d2-48ad-9e14-08519c8eebd1.jpg"
            alt="tech"
            className={styles.icn}
          />
          <div className={styles.logoName}>GOLD LOAN COMPANY</div>
        </div>
        <div className={styles.menu}>
          <ul className={styles.ul1}>
            <li className={styles.lia}>
              <Link to="/">
                <span className={styles.menuText}> Home</span>
              </Link>
            </li>

            <li className={styles.lic}>
              <Link to="/interest">
                <span className={styles.menuText}>InterestRate</span>
              </Link>
            </li>
            <li class="lid">
              <Link to="/application">
                <span className={styles.menuText}>Application</span>
              </Link>
            </li>
            <li class="lid">
              <Link to="/contanct">
                <span className={styles.menuText}>Contanct</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
