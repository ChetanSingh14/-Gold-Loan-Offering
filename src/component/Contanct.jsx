import React, { useState } from "react";
import NavBar from "./NavBar";
import styles from "./Contanct.module.css";
export default function Contanct() {
  const [wishlist, setWishList] = useState([]);
  function addToWishlist(newWish) {
    setWishList([...wishlist, newWish]);
  }
  const [wish, setWish] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addToWishlist(wish);
    setWish("");
 alert("Thank you,your response is submitted")
  }
  function handleChange(e) {
    e.preventDefault();
    setWish(e.target.value);}
    let list = wishlist.map((item, index) => <li key={index}>{item}</li>);
    return (
      <>
        <NavBar />
        <div className={styles.mains}>
        <div className={styles.user}>
          <form onSubmit={handleSubmit} className={styles.inpt}>
            <label htmlFor="wish">Feedback: </label>
            <input type="text" id="wish" value={wish} onChange={handleChange} />
            <button className={styles.btn}>update</button>
          </form>
        </div>
        <div className={styles.datalist}>
  
          <ul>{list}</ul>
         
        </div>
        </div>
        <footer className={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <p>Contact: example@email.com</p>
    </footer>
      </>
    );
  }

