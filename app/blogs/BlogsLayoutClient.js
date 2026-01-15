// // app/blogs/BlogsLayoutClient.jsx
// "use client";

// import { useMemo, useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import styles from "./blogs.module.css";
// import BlogFeedClient from "./BlogFeedClient";

// export default function BlogsLayoutClient({ posts, apiUrl, featuredConfig }) {
//   const [activeSlug, setActiveSlug] = useState(null);

//   // controls the subscribe modal
//   const [showSubscribeModal, setShowSubscribeModal] = useState(false);
//   const timerRef = useRef(null);

//   const lead = posts[0];
//   const rest = posts.slice(1);

//   // ===== FEATURED POSTS (default vs per-post) =====
//   const featuredList = useMemo(() => {
//     const perPost = featuredConfig?.perPost || {};
//     if (activeSlug && perPost[activeSlug]?.length) {
//       return perPost[activeSlug];
//     }
//     return featuredConfig.default || [];
//   }, [activeSlug, featuredConfig]);

//   // called by BlogFeedClient whenever a post is opened/closed
//   const handleActivePostChange = (slugOrNull) => {
//     setActiveSlug(slugOrNull || null);
//   };

//   // ===== 10s TIMER FOR SUBSCRIBE MODAL =====
//   useEffect(() => {
//     // clear any existing timer whenever activeSlug changes
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }

//     // no active post: don't start a timer, but DO NOT auto-hide the modal
//     if (!activeSlug) {
//       return;
//     }

//     // there is an active post → start 10s timer
//     timerRef.current = setTimeout(() => {
//       setShowSubscribeModal(true);
//       timerRef.current = null;
//     }, 10000);

//     // cleanup on unmount / dependency change
//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//         timerRef.current = null;
//       }
//     };
//   }, [activeSlug]);

//   // lock body scroll while modal is open
//   useEffect(() => {
//     if (!showSubscribeModal) return;

//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [showSubscribeModal]);

//   // only way to close the modal: successful submit
//   const handleSubscribeSubmit = (e) => {
//     e.preventDefault();
//     // TODO: integrate with backend / HubSpot / Mailchimp, etc.
//     setShowSubscribeModal(false);

//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }
//   };

//   return (
//     <>
//       <div className={styles.main}>
//         {/* LEFT: Blog feed */}
//         <section className={styles.leftCol}>
//           <BlogFeedClient
//             lead={lead}
//             rest={rest}
//             apiUrl={apiUrl}
//             onActivePostChange={handleActivePostChange}
//           />

//           {/* Newsletter (BOTTOM-LEFT) */}
//           <section className={`${styles.widget} ${styles.newsletterCard}`}>
//             <h4>Sign up for News Letters</h4>
//             <form className={styles.newsletter}>
//               <div className={styles.checkRow}>
//                 <label><input type="checkbox" /> Weekly</label>
//                 <label><input type="checkbox" /> Monthly</label>
//                 <label><input type="checkbox" /> Social Media</label>
//                 <label><input type="checkbox" /> See all news letters</label>
//               </div>
//               <div className={styles.inputRow}>
//                 <input type="email" placeholder="Email Address" required />
//                 <button type="submit">Subscribe</button>
//               </div>
//             </form>
//           </section>
//         </section>

//         {/* RIGHT: Sidebar */}
//         <aside className={styles.sidebar}>
//           <section className={styles.widget}>
//             <h4>Featured Posts</h4>
//             <ul className={styles.featuredList}>
//               {featuredList.map((item) => (
//                 <li key={item.title}>
//                   <a
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title={item.title}
//                   >
//                     {item.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </section>

//           <section className={`${styles.widget} ${styles.adCard}`}>
//             <a
//               href={
//                 "mailto:sales@ivosolutions.co.tz" +
//                 "?subject=" + encodeURIComponent("Inquiry from website") +
//                 "&body=" + encodeURIComponent(
//                   "Hi IVO Solutions,\n\nI’d like to learn more about your services.\n"
//                 )
//               }
//               className={styles.adLink}
//               aria-label="Email sales@ivosolutions.co.tz"
//             >
//               <Image
//                 src="/banners/Lower Banner.gif"
//                 alt="Data Security"
//                 width={360}
//                 height={460}
//                 className={styles.adImg}
//               />
//             </a>
//           </section>
//         </aside>
//       </div>

//       {/* ===== SUBSCRIBE MODAL (after 10s of reading) ===== */}
//       {showSubscribeModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalCard}>
//             {/* X icon is now purely visual; no close action
//             <button
//               type="button"
//               className={styles.modalClose}
//               aria-disabled="true"
//               tabIndex={-1}
//             >
//               ×
//             </button> */}

//             <h2 className={styles.modalTitle}>Subscribe &amp; Stay Informed</h2>

//             <form
//               className={styles.modalForm}
//               onSubmit={handleSubscribeSubmit}
//             >
//               <div className={styles.modalGrid}>
//                 <div className={styles.modalField}>
//                   <label htmlFor="sub-name">Full Name*</label>
//                   <input id="sub-name" type="text" required />
//                 </div>
//                 <div className={styles.modalField}>
//                   <label htmlFor="sub-email">Email Address*</label>
//                   <input id="sub-email" type="email" required />
//                 </div>
//                 <div className={styles.modalField}>
//                   <label htmlFor="sub-company">Company/Organization*</label>
//                   <input id="sub-company" type="text" required />
//                 </div>
//                 <div className={styles.modalField}>
//                   <label htmlFor="sub-role">Job Title/Role</label>
//                   <input id="sub-role" type="text" />
//                 </div>
//                 {/* <div className={styles.modalField}>
//                   <label htmlFor="sub-area">Area(s) of Interest</label>
//                   <select id="sub-area" defaultValue="">
//                     <option value="" disabled>Select an option</option>
//                     <option value="database">Database &amp; Data Platforms</option>
//                     <option value="security">Cybersecurity &amp; Zero Trust</option>
//                     <option value="cloud">Cloud &amp; DR/BCP</option>
//                     <option value="ai">AI &amp; Analytics</option>
//                   </select>
//                 </div>
//                 <div className={styles.modalField}>
//                   <label htmlFor="sub-content">Preferred Content Type</label>
//                   <select id="sub-content" defaultValue="">
//                     <option value="" disabled>Select an option</option>
//                     <option value="blog">Blog articles</option>
//                     <option value="webinar">Webinars &amp; events</option>
//                     <option value="newsletter">Monthly newsletter</option>
//                   </select>
//                 </div> */}
//               </div>

//               <div className={styles.modalCheckboxRow}>
//                 <label>
//                   <input type="checkbox" required />
//                   <span>
//                     I agree to receive updates and communication from IVO Solutions
//                     related to my selected interests.
//                   </span>
//                 </label>
//               </div>

//               <button type="submit" className={styles.modalSubmit}>
//                 Submit Request
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



// app/blogs/BlogsLayoutClient.jsx 
"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./blogs.module.css";
import BlogFeedClient from "./BlogFeedClient";

// List of personal email domains we want to block
const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "hotmail.com",
  "outlook.com",
  "outlook.co.uk",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "proton.me",
  "protonmail.com",
  "yandex.ru",
  "yandex.com",
];

export default function BlogsLayoutClient({ posts, apiUrl, featuredConfig }) {
  const [activeSlug, setActiveSlug] = useState(null);

  // controls the subscribe modal
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const timerRef = useRef(null);

  // email field + validation message
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const lead = posts[0];
  const rest = posts.slice(1);

  // ===== FEATURED POSTS (default vs per-post) =====
  const featuredList = useMemo(() => {
    const perPost = featuredConfig?.perPost || {};
    if (activeSlug && perPost[activeSlug]?.length) {
      return perPost[activeSlug];
    }
    return featuredConfig.default || [];
  }, [activeSlug, featuredConfig]);

  // called by BlogFeedClient whenever a post is opened/closed
  const handleActivePostChange = (slugOrNull) => {
    setActiveSlug(slugOrNull || null);
  };

  // ===== 10s TIMER FOR SUBSCRIBE MODAL =====
  useEffect(() => {
    // clear any existing timer whenever activeSlug changes
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // no active post: don't start a timer, but DO NOT auto-hide the modal
    if (!activeSlug) {
      return;
    }

    // there is an active post → start 10s timer
    timerRef.current = setTimeout(() => {
      setShowSubscribeModal(true);
      timerRef.current = null;
    }, 10000);

    // cleanup on unmount / dependency change
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeSlug]);

  // lock body scroll while modal is open
  useEffect(() => {
    if (!showSubscribeModal) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [showSubscribeModal]);

  // only way to close the modal: successful submit with organizational email
  const handleSubscribeSubmit = (e) => {
    e.preventDefault();

    const raw = email.trim().toLowerCase();
    const parts = raw.split("@");

    // basic sanity check (HTML5 type="email" also helps)
    if (parts.length !== 2) {
      setEmailError("Please enter a valid work email address.");
      return;
    }

    const domain = parts[1];

    if (PERSONAL_EMAIL_DOMAINS.includes(domain)) {
      setEmailError(
        "Please use your official organizational email address not a personal email account."
      );
      return;
    }

    // ✅ valid organizational email → close modal
    setShowSubscribeModal(false);
    setEmailError("");
    setEmail("");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // TODO: plug in your real submit logic (HubSpot/Mailchimp/backend) here
  };

  return (
    <>
      <div className={styles.main}>
        {/* LEFT: Blog feed */}
        <section className={styles.leftCol}>
          <BlogFeedClient
            lead={lead}
            rest={rest}
            apiUrl={apiUrl}
            onActivePostChange={handleActivePostChange}
          />

          {/* Newsletter (BOTTOM-LEFT) */}
          <section className={`${styles.widget} ${styles.newsletterCard}`}>
            <h4>Sign up for News Letters</h4>
            <form className={styles.newsletter}>
              <div className={styles.checkRow}>
                <label><input type="checkbox" /> Weekly</label>
                <label><input type="checkbox" /> Monthly</label>
                <label><input type="checkbox" /> Social Media</label>
                <label><input type="checkbox" /> See all news letters</label>
              </div>
              <div className={styles.inputRow}>
                <input type="email" placeholder="Email Address" required />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </section>
        </section>

        {/* RIGHT: Sidebar */}
        <aside className={styles.sidebar}>
          <section className={styles.widget}>
            <h4>Featured Posts</h4>
            <ul className={styles.featuredList}>
              {featuredList.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={`${styles.widget} ${styles.adCard}`}>
            <a
              href={
                "mailto:sales@ivosolutions.co.tz" +
                "?subject=" + encodeURIComponent("Inquiry from website") +
                "&body=" + encodeURIComponent(
                  "Hi IVO Solutions,\n\nI’d like to learn more about your services.\n"
                )
              }
              className={styles.adLink}
              aria-label="Email sales@ivosolutions.co.tz"
            >
              <Image
                src="/banners/Lower Banner.gif"
                alt="Data Security"
                width={360}
                height={460}
                className={styles.adImg}
              />
            </a>
          </section>
        </aside>
      </div>

      {/* ===== SUBSCRIBE MODAL (after 10s of reading) ===== */}
      {showSubscribeModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            {/* X icon is purely visual; cannot close the modal
            <button
              type="button"
              className={styles.modalClose}
              aria-disabled="true"
              tabIndex={-1}
            >
              ×
            </button> */}

            <h2 className={styles.modalTitle}>Subscribe &amp; Stay Informed</h2>

            <form
              className={styles.modalForm}
              onSubmit={handleSubscribeSubmit}
            >
              <div className={styles.modalGrid}>
                <div className={styles.modalField}>
                  <label htmlFor="sub-name">Full Name*</label>
                  <input id="sub-name" type="text" required />
                </div>
                <div className={styles.modalField}>
                  <label htmlFor="sub-email">Email Address*</label>
                  <input
                    id="sub-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                  />
                  {emailError && (
                    <p className={styles.error}>{emailError}</p>
                  )}
                </div>
                <div className={styles.modalField}>
                  <label htmlFor="sub-company">Company/Organization*</label>
                  <input id="sub-company" type="text" required />
                </div>
                <div className={styles.modalField}>
                  <label htmlFor="sub-role">Job Title/Role</label>
                  <input id="sub-role" type="text" />
                </div>
                {/* <div className={styles.modalField}>
                  <label htmlFor="sub-area">Area(s) of Interest</label>
                  <select id="sub-area" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="database">Database &amp; Data Platforms</option>
                    <option value="security">Cybersecurity &amp; Zero Trust</option>
                    <option value="cloud">Cloud &amp; DR/BCP</option>
                    <option value="ai">AI &amp; Analytics</option>
                  </select>
                </div>
                <div className={styles.modalField}>
                  <label htmlFor="sub-content">Preferred Content Type</label>
                  <select id="sub-content" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="blog">Blog articles</option>
                    <option value="webinar">Webinars &amp; events</option>
                    <option value="newsletter">Monthly newsletter</option>
                  </select>
                </div> */}
              </div>

              <div className={styles.modalCheckboxRow}>
                <label>
                  <input type="checkbox" required />
                  <span>
                    I agree to receive updates and communication from IVO Solutions
                    related to my selected interests.
                  </span>
                </label>
              </div>

              <button type="submit" className={styles.modalSubmit}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
