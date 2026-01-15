// // app/components/common/Navbar.js
// "use client";
// import { useRef, useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useScreenWidth } from "@/app/hooks/useScreenWidth";
// import {
//   Home as HomeIcon,
//   Phone as PhoneIcon,
//   Info as InfoIcon,
// } from "react-feather";
// import styles from "./Navbar.module.css";
// import DropDownMenu from "./DropDownMenu";
// import MobileSideDrawer from "./MobileSideDrawer";

// export const navItemsDesktop = [
//   {
//     label: "Solutions",
//     href: "",
//     subItems: [
//       {
//         label: "Cloud Solutions",
//         href: "",
//         subItems: [
//           { label: "AWS", href: "/solutions/cloud-solutions/aws" },
//           { label: "Microsoft", href: "/solutions/cloud-solutions/microsoft" },
//         ],
//       },
//       {
//         label: "Network Solutions",
//         href: "/solutions/network-solutions",
//       },
//       {
//         label: "Cybersecurity Solutions",
//         href: "/solutions/cyber-security-solution",
//       },
//       {
//         label: "Infrastructure Solutions",
//         href: "/solutions/infrastructure-solution",
//       },
//       {
//         label: "Collaboration Solutions",
//         href: "",
//         subItems: [
//           {
//             label: "3CX Commmunication",
//             href: "/solutions/collaboration-solution/3cx-communication",
//           },
//         ],
//       },
//     ],
//   },
//   { label: "Partners", href: "/partners" },
//   {
//     label: "Services",
//     href: "",
//     subItems: [
//       {
//         label: "Vulnerability Assessment",
//         href: "/services/vulnerability-service",
//       },
//       {
//         label: "Database Service",
//         href: "/services/database-service",
//       },
//       {
//         label: "IT Consultancy",
//         href: "/services/it-consultancy",
//       },
//     ],
//   },
//   { label: "Blogs", href: "/blogs" },

//   { label: "Customer Portal", href: "/portal/login", target: "_blank" },
//   { label: "About Us", href: "/about", show: false },
//   { label: "Contact", href: "/contact", show: false },
// ];

// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isTransparentNavbar, setIsTransparentNavbar] = useState(false);
//   const navRef = useRef();
//   const pathname = usePathname();
//   const { screenWidth } = useScreenWidth();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   useEffect(() => {
//     if (pathname && pathname !== "/") {
//       navRef.current?.classList.add(styles.scrollNav);
//       setIsTransparentNavbar(false);
//     } else {
//       navRef.current?.classList.remove(styles.scrollNav);
//       setIsTransparentNavbar(true);
//     }
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 50) {
//         navRef.current.classList.add(styles.smallNav);
//       } else {
//         navRef.current.classList.remove(styles.smallNav);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("Scroll", handleScroll);
//   }, []);

//   if (["/portal/login"].includes(pathname)) {
//     return null;
//   }

//   const toggleDrawer = () => {
//     if (!isDrawerOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <nav
//       className={styles.navbar}
//       ref={navRef}
//       style={{
//         backgroundColor:
//           pathname === "/"
//             ? showDropdown
//               ? "var(--white)"
//               : "transparent"
//             : "var(--white)",
//       }}
//     >
//       <div className={styles.innerNav}>
//         <div className={styles.logoContainer}>
//           <Link href='/' aria-label='Home'>
//             <img src='/logos/logo.svg' alt='logo' />
//           </Link>
//         </div>

//         <div className={styles.linksContainer}>
//           <div
//             className={`${styles.navLinks} ${
//               showDropdown ? styles.showNavLinks : null
//             }`}
//           >
//             {navItemsDesktop.map((item, index) => {
//               if (screenWidth <= 768 || item.show === false) return null;
//               return <DropDownMenu item={item} index={index} key={index} />;
//             })}
//           </div>
//         </div>

//         {/* Right Section */}
//         <RightSection
//           isTransparentNavbar={isTransparentNavbar}
//           showDropdown={showDropdown}
//           setShowDropdown={setShowDropdown}
//           onClick={toggleDrawer}
//         />
//       </div>
//       <MobileSideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
//     </nav>
//   );
// }

// function RightSection({ isTransparentNavbar, onClick }) {
//   const pathname = usePathname();

//   return (
//     <div className={styles.rightDiv}>
//       {/* home links*/}
//       {pathname === "/" ? (
//         <div className={styles.homeRightDiv}>
//           <Link href='/' aria-label='Home'>
//             <HomeIcon />
//             Home
//           </Link>
//           <Link href='/about' aria-label='About Us'>
//             <InfoIcon />
//             <span>About Us</span>
//           </Link>
//           <Link href='/contact' aria-label='Contact Us<'>
//             <PhoneIcon />
//             <span>Contact Us</span>
//           </Link>
//         </div>
//       ) : (
//         <div className={styles.awayRightDiv}>
//           <RightSectionLink href='/' label='Home' />
//           <RightSectionLink href='/about' label='About Us' />
//           <RightSectionLink href='/contact' label='Contact Us' />
//         </div>
//       )}

//       <img
//         src={
//           isTransparentNavbar
//             ? "/icons/bars-white.svg"
//             : "/icons/bars-black.svg"
//         }
//         alt='hamburger'
//         className={styles.hamburger}
//         onClick={onClick}
//       />
//     </div>
//   );
// }

// function RightSectionLink({ href, label }) {
//   const [show, setShow] = useState(false);
//   const pathname = usePathname();

//   return (
//     <Link
//       href={href}
//       onMouseOver={() => setShow(true)}
//       onMouseOut={() => setShow(false)}
//       aria-label={label}
//     >
//       {label === "Contact Us" && (
//         <PhoneIcon
//           color={pathname === href || show ? "var(--blue-01)" : "#bbb"}
//         />
//       )}
//       {label === "Home" && (
//         <HomeIcon
//           color={pathname === href || show ? "var(--blue-01)" : "#bbb"}
//         />
//       )}
//       {label === "About Us" && (
//         <InfoIcon
//           color={pathname === href || show ? "var(--blue-01)" : "#bbb"}
//         />
//       )}
//       {(pathname === href || show) && (
//         <span className={styles.rightNavLinkText}>{label}</span>
//       )}
//     </Link>
//   );
// }




// app/components/common/Navbar.js
"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScreenWidth } from "@/app/hooks/useScreenWidth";
import { Home as HomeIcon, Phone as PhoneIcon, Info as InfoIcon } from "react-feather";
import styles from "./Navbar.module.css";
import DropDownMenu from "./DropDownMenu";
import MobileSideDrawer from "./MobileSideDrawer";

export const navItemsDesktop = [
  {
    label: "Solutions",
    href: "",
    subItems: [
      {
        label: "Cloud Solutions",
        href: "",
        subItems: [
          { label: "AWS", href: "/solutions/cloud-solutions/aws" },
          { label: "Microsoft", href: "/solutions/cloud-solutions/microsoft" },
        ],
      },
      { label: "Network Solutions", href: "/solutions/network-solutions" },
      { label: "Cybersecurity Solutions", href: "/solutions/cyber-security-solution" },
      { label: "Infrastructure Solutions", href: "/solutions/infrastructure-solution" },
      {
        label: "Collaboration Solutions",
        href: "",
        subItems: [
          { label: "3CX Commmunication", href: "/solutions/collaboration-solution/3cx-communication" },
        ],
      },
    ],
  },
  { label: "Partners", href: "/partners" },
  {
    label: "Services",
    href: "",
    subItems: [
      { label: "Vulnerability Assessment", href: "/services/vulnerability-service" },
      { label: "Database Service", href: "/services/database-service" },
      { label: "IT Consultancy", href: "/services/it-consultancy" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  // { label: "Customer Portal", href: "/portal/login", target: "_blank" },
  { label: "About Us", href: "/about", show: false },
  { label: "Contact", href: "/contact", show: false },
];

export default function Navbar() {
  const navRef = useRef(null);
  const pathname = usePathname();
  const { screenWidth } = useScreenWidth();

  const [showDropdown, setShowDropdown] = useState(false);
  const [isTransparentNavbar, setIsTransparentNavbar] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Solid vs transparent based on route
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    if (pathname && pathname !== "/") {
      el.classList.add(styles.scrollNav);
      setIsTransparentNavbar(false);
    } else {
      el.classList.remove(styles.scrollNav);
      setIsTransparentNavbar(true);
    }
  }, [pathname]);

  // Shrink on scroll (with guards)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY >= 50) {
        navRef.current.classList.add(styles.smallNav);
      } else {
        navRef.current.classList.remove(styles.smallNav);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize state once

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don’t render the visual nav on this page (effects above are guarded)
  if (pathname === "/portal/login") {
    return null;
  }

  const toggleDrawer = () => {
    const next = !isDrawerOpen;
    document.body.style.overflow = next ? "hidden" : "auto";
    setIsDrawerOpen(next);
  };

  return (
    <nav
      ref={navRef}
      className={styles.navbar}
      style={{
        backgroundColor:
          pathname === "/"
            ? (showDropdown ? "var(--white)" : "transparent")
            : "var(--white)",
      }}
    >
      <div className={styles.innerNav}>
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Home">
            <img src="/logos/logo.svg" alt="logo" />
          </Link>
        </div>

        <div className={styles.linksContainer}>
          <div className={`${styles.navLinks} ${showDropdown ? styles.showNavLinks : ""}`}>
            {navItemsDesktop.map((item, index) => {
              if (screenWidth <= 768 || item.show === false) return null;
              return <DropDownMenu item={item} index={index} key={index} />;
            })}
          </div>
        </div>

        <RightSection
          isTransparentNavbar={isTransparentNavbar}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          onClick={toggleDrawer}
        />
      </div>

      <MobileSideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </nav>
  );
}

function RightSection({ isTransparentNavbar, onClick }) {
  const pathname = usePathname();

  return (
    <div className={styles.rightDiv}>
      {pathname === "/" ? (
        <div className={styles.homeRightDiv}>
          <Link href="/" aria-label="Home">
            <HomeIcon />
            Home
          </Link>
          <Link href="/about" aria-label="About Us">
            <InfoIcon />
            <span>About Us</span>
          </Link>
          <Link href="/contact" aria-label="Contact Us">
            <PhoneIcon />
            <span>Contact Us</span>
          </Link>
        </div>
      ) : (
        <div className={styles.awayRightDiv}>
          <RightSectionLink href="/" label="Home" />
          <RightSectionLink href="/about" label="About Us" />
          <RightSectionLink href="/contact" label="Contact Us" />
        </div>
      )}

      <img
        src={isTransparentNavbar ? "/icons/bars-white.svg" : "/icons/bars-black.svg"}
        alt="hamburger"
        className={styles.hamburger}
        onClick={onClick}
      />
    </div>
  );
}

function RightSectionLink({ href, label }) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      aria-label={label}
    >
      {label === "Contact Us" && (
        <PhoneIcon color={pathname === href || show ? "var(--blue-01)" : "#bbb"} />
      )}
      {label === "Home" && (
        <HomeIcon color={pathname === href || show ? "var(--blue-01)" : "#bbb"} />
      )}
      {label === "About Us" && (
        <InfoIcon color={pathname === href || show ? "var(--blue-01)" : "#bbb"} />
      )}
      {(pathname === href || show) && (
        <span className={styles.rightNavLinkText}>{label}</span>
      )}
    </Link>
  );
}



