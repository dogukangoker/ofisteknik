import React from "react";
import styles from "../styles/Home.module.css";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerelement}>
        <a href="https://www.instagram.com/ofisteknik_kirtasiye/">
          <BsInstagram size={36} />
          <span>Instagram</span>
        </a>
      </div>
      <div className={styles.footerelement}>
        <a href="https://www.instagram.com/ofisteknik_kirtasiye/">
          <BsFacebook size={36} />
          <span>Facebook</span>
        </a>
      </div>
      <div className={styles.footerelement}>
        <a href="https://www.instagram.com/ofisteknik_kirtasiye/">
          <FiMail size={36} />
          <span>info@ofisteknikkirtasiye.com</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
