import React, { useState } from "react";
import styles from "./MenuItem.module.css";
import { ChevronDown, ChevronUp } from "react-feather";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={styles.navLabel}
        onClick={() => {
          if (item.subItems) {
            toggleSubmenu();
          } else {
            onClose();
          }
        }}
      >
        <Link
          href={item.href}
          className={pathname === item.href ? styles.activeLink : ""}
          target={item?.target}
        >
          {item.label}
        </Link>
        {item.subItems &&
          (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
      </div>
      {item.subItems && isOpen && (
        <div className={styles.subMenu}>
          {item.subItems.map((subItem, index) => (
            <NavItem key={index} item={subItem} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
};

const Menu = ({ navItems, onClose }) => {
  return navItems?.map((item, index) => (
    <NavItem key={index} item={item} onClose={onClose} />
  ));
};

export default Menu;
