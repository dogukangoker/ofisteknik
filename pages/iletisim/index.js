import React from "react";
import Head from "next/head";
import styles from "../../styles/Iletisim.module.css";
import { GoLocation } from "react-icons/go";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
const index = () => {
  return (
    <div>
      <Head>
        <title>İletişim - Ofis Teknik Kırtasiye</title>
        <meta name="description" content="İletişim - Ofis Teknik Kırtasiye" />
        <meta
          name="keywords"
          content="ofis gereçleri, ostim ofis malzemesi, ostim ofis gereçleri, ankara ostim ofis, ostim fotokopi kağıdı, ostim poşet dosya,
      ostim acil kaşe, acil kaşe ostim, ofis kırtasiye, ostim kırtasiye, teknik kırtasiye, ostim reklam"
        />
        <meta name="author" content="Ofis Teknik Kırtasiye" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="tr" />
        <meta name="geo.country" content="tr" />
        <meta name="copyright" content="Ofis Teknik Kırtasiye" />
      </Head>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        İletişim Adreslerimiz
      </h1>
      <div className={styles.iletisim}>
        <div className={styles.iletisimOne}>
          <h2>Kırtasiye İletişim</h2>
          <p>
            <span>
              <GoLocation />
            </span>
            <span>100. Yıl Bulvarı Bosna İş Merkezi 35/47 Ostim/ANKARA</span>
          </p>
          <p>
            <span>
              <AiFillPhone />
            </span>
            <span>0312 385 38 83 & 0312 354 62 89</span>
          </p>
          <p>
            <span>
              <AiFillMail />
            </span>
            <span>
              <a href="mailto:info@ofisteknikkirtasiye.com">
                info@ofisteknikkirtasiye.com
              </a>
            </span>
          </p>
        </div>
        <div className={styles.iletisimOne}>
          <h2>İş Makinesi Kiralama İletişim</h2>
          <p>
            <span>
              <GoLocation />
            </span>
            <span>
              Saray Kent Sanayi Sitesi 52. sokak No:38 Kahramankazan / ANKARA
            </span>
          </p>
          <p>
            <span>
              <AiFillPhone />
            </span>
            <span>TEL - FAKS: 0312 385 38 84 - 83</span>
          </p>
          <p>
            <span>
              <AiFillMail />
            </span>
            <span>
              <a href="mailto:info@ofisteknikkirtasiye.com">
                info@ofisteknikkirtasiye.com
              </a>
            </span>
          </p>
        </div>

        <div className={styles.wpimage}>
          <div className={styles.wptext}>
            WhatsApp Sipariş Hattımıza ulaşmak için aşağıdaki butona
            tıklayabilirsiniz.
          </div>
          <a target="_blank" rel="noreferrer" href="https://wa.me/905534928479">
            <img src="/images/whatsappsiparisbuyuk.png" alt="iletisim" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
