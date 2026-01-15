import MenuItem from "./MenuItem";
import styles from "./MobileSideDrawer.module.css";
import { navItemsDesktop } from "./Navbar";
export default function MobileSideDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`${styles.drawerContainer} ${
        isOpen ? styles.drawerOpen : styles.drawerClosed
      }`}
    >
      <div className={styles.flexContainer}>
        <div className={styles.menuHeader}>
          <img src='/logos/logo.svg' alt='logo' />
          <img src='/icons/close.svg' alt='hamburger' onClick={onClose} />
        </div>
        <MenuItem navItems={navItemsDesktop} onClose={onClose} />
      </div>
      <p className={styles.bottomBorder}></p>
    </div>
  );
}
