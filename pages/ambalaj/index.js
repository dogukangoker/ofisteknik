import React from "react";
import Head from "next/head";
import styles from "../../styles/Ambalaj.module.css";
const index = () => {
  return (
    <div>
      <Head>
        <title>Ambalaj - Ofis Teknik Kırtasiye</title>
        <meta
          name="description"
          content="Ambalaj Malzemeleri - Ofis Teknik Kırtasiye"
        />
        <meta
          name="keywords"
          content="ostim ambalaj, ostim ambalajlar, ambalaj ankara, ofis gereçleri, ostim ofis malzemesi, ostim ofis gereçleri, ankara ostim ofis, ostim fotokopi kağıdı, ostim poşet dosya,
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
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.headerText}>Ambalaj Çeşitleri</div>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featurescard}>
              <h5>Ambalaj Naylonu</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Poşet Çeşitleri</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Paketleme Naylonu</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Balonlu Naylon</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Ambalaj Kağıtları</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Kurban Poşetleri</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Et Taşıma Poşetleri</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>İp</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Halat</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Urgan</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Çöp Poşetleri</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Hediyelik Eşya Paketleri</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Hediyelik Poşetler</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Karton Çanta</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Karton Kutu</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Taşıma Kolileri</h5>
            </div>
            <div className={styles.featurescard}>
              <h5>Hediye Kutuları</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
