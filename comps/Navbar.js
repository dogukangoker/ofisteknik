import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowDownShort } from "react-icons/bs";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9
  const handleClick = () => {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  const handleClick2 = () => {
    var x = document.getElementById("submenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  const handleClick3 = () => {
    var x = document.getElementById("submenu2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <Image
              className={styles.logoimage}
              src="/images/logo.png"
              alt="logo"
              width={250}
              height={120 / ratio}
              priority
            />
          </a>
        </div>

        <div onClick={() => handleClick()} className={styles.mobilebtn}>
          <GiHamburgerMenu size={36} />
        </div>
        <div className={styles.navbaritems}>
          <ul>
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  Kırtasiye <BsArrowDownShort />
                </button>
                <div className={styles.dropdowncontent}>
                  <a href="/ofis-malzemeleri">Ofis Malzemeleri</a>
                  <a href="/okul-ihtiyaclari">Okul İhtiyaçları</a>
                  <a href="/kase">Kaşe</a>
                  <a href="/kopyalama">Kopyalama</a>
                  <a href="/ambalaj">Ambalaj</a>
                  <a href="/cilt-yapimi">Cilt Yapımı</a>
                  <a href="/tasima-kolileri">Taşıma Kolileri</a>
                </div>
              </div>
            </li>
            <li>
              <a href="/is-makineleri">İş Makineleri</a>
            </li>
            <li>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  Reklam & Grafik <BsArrowDownShort />
                </button>
                <div className={styles.dropdowncontent}>
                  <a href="/is-guvenligi-levhalari">İş Güvenliği Levhaları</a>
                </div>
              </div>
            </li>
            <li>
              <a href="/iletisim">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="navbar" className={styles.mobilemenu}>
        <div className={styles.mobilemenusection}>
          <a href="/">Anasayfa</a>
          <div className={styles.dropdown}>
            <button onClick={() => handleClick2()} className={styles.dropbtn}>
              Kırtasiye
            </button>
            <div id="submenu" className={styles.dropdowncontent}>
              <a href="/ofis-malzemeleri">Ofis Malzemeleri</a>
              <a href="/okul-ihtiyaclari">Okul İhtiyaçları</a>
              <a href="/kase">Kaşe</a>
              <a href="/kopyalama">Kopyalama</a>
              <a href="/ambalaj">Ambalaj</a>
              <a href="/cilt-yapimi">Cilt Yapımı</a>
              <a href="/tasima-kolileri">Taşıma Kolileri</a>
            </div>
          </div>
          <a href="/is-makineleri">İş Makineleri</a>
          <div className={styles.dropdown}>
            <button onClick={() => handleClick3()} className={styles.dropbtn}>
              Reklam & Grafik
            </button>
            <div id="submenu2" className={styles.dropdowncontent}>
              <a href="/is-guvenligi-levhalari">İş Güvenliği Levhaları</a>
            </div>
          </div>
          <a href="/iletisim">İletişim</a>
        </div>
      </div>
      <div className={styles.whatsapp}>
        <a rel="noreferrer" target="_blank" href="https://wa.me/905534928479">
          <img src="/images/whatsapplogo.png" alt="whatsapp" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
