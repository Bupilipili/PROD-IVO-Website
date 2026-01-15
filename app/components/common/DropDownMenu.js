"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./DropDownMenu.module.css";

const DropDownMenu = ({ item, index }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const pathname = usePathname();

  const showDropdown = (index) => {
    setActiveDropdown(index);
    setActiveSubDropdown(null);
  };

  const showSubDropdown = (index) => {
    setActiveSubDropdown(index);
  };

  const hideDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const isActive = (href) => pathname === href;
  const shouldShowDropdown = (index) =>
    activeDropdown === index || activeSubDropdown === index;
  return (
    <div
      className={`${styles.relative} `}
      key={index}
      onMouseEnter={() => showDropdown(index)}
      onMouseLeave={hideDropdowns}
    >
      <Link
        href={item.href}
        target={item?.target}
        className={`${styles.cursorPointer} ${styles.textBlock} 
        ${isActive(item.href) ? styles.activeTextBlock : ""}`}
      >
        {item.label}
      </Link>
      {item.subItems && shouldShowDropdown(index) && (
        <div className={`${styles.dropdownMenu}`}>
          {item?.subItems?.map((subItem, subIndex) => (
            <div
              className={`${styles.relative}`}
              key={subIndex}
              onMouseEnter={() => showSubDropdown(subIndex)}
            >
              <Link
                href={subItem.href}
                className={`${styles.textBlock} ${styles.textBlockHover} ${
                  isActive(subItem.href) ? styles.activeTextBlock : ""
                }`}
              >
                {subItem.label}
              </Link>
              {subItem.subItems && activeSubDropdown === subIndex && (
                <div className={`${styles.subDropdownMenu}`}>
                  {subItem?.subItems?.map((nestedSubItem, nestedSubIndex) => (
                    <Link
                      href={nestedSubItem.href}
                      key={nestedSubIndex}
                      className={`${styles.textBlock} ${
                        styles.textBlockHover
                      } ${
                        isActive(nestedSubItem.href)
                          ? styles.activeTextBlock
                          : ""
                      }`}
                    >
                      {nestedSubItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
