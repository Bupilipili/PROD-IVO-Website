"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { dmSans } from "@/app/layout";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <footer
      className={styles.footer}
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-back'
      data-aos-delay='300'
      data-aos-offset='0'
    >
      <div className={styles.innerContainer}>
        <div className={styles.footerTopContainer}>
          <FooterSectionOne />
          <FooterSectionTwo />
          <FooterSectionThree />
          <FooterSectionFour />
        </div>
      </div>

      <img
        src='/shapes/footer-ellipse-1.svg'
        alt=''
        className={styles.ellipse1}
      />
      <img
        src='/shapes/footer-ellipse-2.svg'
        alt=''
        className={styles.ellipse2}
      />
      <img
        src='/shapes/footer-ellipse-3.svg'
        alt=''
        className={styles.ellipse3}
      />
      <img
        src='/shapes/footer-ellipse-4.svg'
        alt=''
        className={styles.ellipse4}
      />

      <img
        src='/shapes/footer-ellipse-1-mobile.svg'
        alt=''
        className={styles.ellipse1Mobile}
      />
      <img
        src='/shapes/footer-ellipse-2-mobile.svg'
        alt=''
        className={styles.ellipse2Mobile}
      />
      <img
        src='/shapes/footer-ellipse-3-mobile.svg'
        alt=''
        className={styles.ellipse3Mobile}
      />
      <img
        src='/shapes/footer-ellipse-4-mobile.svg'
        alt=''
        className={styles.ellipse4Mobile}
      />
    </footer>
  );
}

function FooterSectionOne() {
  return (
    <div className={styles.footerSection}>
      <img src='/logos/logo.svg' alt='' className={styles.logo} />
      <h4>Quick Links</h4>
      <Link href='/'>Solutions</Link>
      <Link href='/partners'>Partners</Link>
      <Link href='/services'>Services</Link>
      {/* <Link href="#">Customer Portal</Link> */}
      <Link href='/about'>About Us</Link>
      <Link href='/contact'>Get in Touch</Link>
    </div>
  );
}

function FooterSectionTwo() {
  return (
    <div className={styles.footerSection}>
      <h4>Legal Links</h4>
      <Link href='/terms-of-use' target='_blank'>
        Term of Use
      </Link>
      <Link href='/data-protection-policy' target='_blank'>
        Data Protection Policy
      </Link>
      <Link href='/website-disclaimer' target='_blank'>
        Website Disclaimer
      </Link>
      <Link href='/isms-policy' target='_blank'>
        Information Security Policy
      </Link>
    </div>
  );
}

function FooterSectionThree() {
  return (
    <div className={styles.footerSection}>
      <h4>Contact</h4>
      <div className={styles.contactItem} style={{ alignItems: "flex-start" }}>
        <img src='/icons/map-pin.svg' alt='map pin' style={{ marginTop: 5 }} />
        <p>
          PO Box 45886
          <br />
          4th Floor, Office Suite 401,
          <br />
          Alfa Plaza, AIi Hassani Mwinyi Road,
          <br />
          Dar es salaam, Tanzania.
        </p>
      </div>
      <Link
        href='mailto:service@ivosolutions.co.tz'
        className={styles.contactItem}
      >
        <img src='/icons/mail.svg' alt='mail' style={{ marginTop: 2 }} />
        service@ivosolutions.co.tz
      </Link>
      <div>
        <Link href='tel:+255712001236' className={styles.contactItem}>
          <img src='/icons/phone.svg' alt='phone' />
          +255 712 001 236
        </Link>
        <Link href='https://wa.me/255743001236' className={styles.contactItem}>
          <img src='/icons/whatsapp_gray.svg' alt='phone' />
          +255 743 001 236
        </Link>
      </div>
      <div className={styles.contactItem}>
        <img src='/icons/clock.svg' alt='clock' />
        <p>Opening Hours: 08:00 - 17:00</p>
      </div>
    </div>
  );
}

function FooterSectionFour() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerTopContainer}>
        <SocialLinks />
        {/* <CompanyProfile /> */}
      </div>
      {/* <NewsLetter /> */}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className={styles.footerSection}>
      <h4>Follow us</h4>
      <div className={styles.socialMediaLinks}>
        <Link href='https://www.linkedin.com/company/51657797' target='_blank'>
          <img src='/icons/linkedin.svg' alt='linkedin' />
        </Link>
        {/* <Link href="#" target="_blank">
          <img src="/icons/twitter.svg" alt="twitter" />
        </Link>
        <Link href="#" target="_blank">
          <img src="/icons/instagram.svg" alt="instagram" />
        </Link>
        <Link href="#" target="_blank">
          <img src="/icons/facebook.svg" alt="facebook" />
        </Link> */}
      </div>
    </div>
  );
}

function CompanyProfile() {
  return (
    <div className={styles.footerSection}>
      <h4>Get Company Profile</h4>
      <Link
        href='#'
        // target="_blank"
        className={styles.downloadCompanyProfileButton}
      >
        DOWNLOAD NOW
      </Link>
    </div>
  );
}

function NewsLetter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  return (
    <div className={`${styles.footerSection} ${styles.newsletterContainer}`}>
      <h4>Subscribe to our newsletter</h4>
      <div className={styles.newsletterForm} style={{ width: "100%" }}>
        <input
          type='email'
          placeholder='Enter your email id'
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
        />
        <button className={`${dmSans.className} main-button`}>
          Let&apos;s Talk
        </button>
      </div>
    </div>
  );
}

export function FooterBottomContainer() {
  const pathname = usePathname();
  if (["/", "/portal/login"].includes(pathname)) return null;
  return (
    <div
      className={styles.footerBottomContainer}
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-back'
      data-aos-delay='300'
      data-aos-offset='0'
    >
      <div className={styles.logoContainer}>
        <img src='/logos/logo.svg' alt='' />
        <p>@2025 All Rights Reserved</p>
        <Link href='https://dotsyndicate.com' target='_blank'>
          Developer by <span>Dotsyndicate</span>
        </Link>
      </div>
    </div>
  );
}
