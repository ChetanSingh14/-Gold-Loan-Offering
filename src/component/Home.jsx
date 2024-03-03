import React from "react";
import NavBar from "./NavBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heading}>
        <NavBar />
      </div>
      <div className={styles.heading1}>
        <h1>"Golden Loan Opportunities" </h1>
        <p>
          Cultivate prosperity effortlessly: Seamlessly access funds through our
          Gold Loan Solutions
          <br /> unlocking newfound financial freedom at the click of a button
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src="https://plus.unsplash.com/premium_photo-1678766103399-baae3e250990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZCUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D"
            className={styles.cardimgtop}
            alt="..."
            height={300}
            width={450}
          />
          <div className={styles.cardbody}>
            <h5 clasName={styles.cardtitle}>Unlock Financial Freedom: Explore Our Gold Loan Product"</h5>
            <p className={styles.cardtext}>
            Experience the golden opportunity of financial freedom with our exclusive Gold Loan product. Unveil a world of benefits tailored to your needs, offering competitive interest rates and flexible repayment options.
            </p>
            
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://img.freepik.com/premium-photo/golden-house-icon-broken-christmas-ball-full-coins_290464-302.jpg?w=1380"
            className={styles.cardimgtop}
            alt="..."
            height={300}
            width={450}
          />
          <div className={styles.cardbody}>
            <h5 clasName={styles.cardtitle}>Empower Your Finances: Discover the Benefits of Our Gold Loan</h5>
            <p className={styles.cardtext}>
            Explore our comprehensive sections showcasing the features, benefits, eligibility criteria, interest rates, and application process of our Gold Loan product. Dive into an interactive journey where every step is tailored to ensure clarity and convenience.
            </p>
           
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://www.shutterstock.com/image-photo/gold-mortgage-loan-260nw-664109545.jpg"
            className={styles.cardimgtop}
            alt="..."
            height={300}
            width={450}
          />
          <div className={styles.cardbody}>
            <h5 clasName={styles.cardtitle}>"Unlock Financial Freedom: Explore Our Gold Loan Product"</h5>
            <p className={styles.cardtext}>
            Take charge of your financial future today! Seamlessly apply for a gold loan or request more information with our prominent call-to-action button. Join the countless individuals who have embraced financial empowerment through our Gold Loan product.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

