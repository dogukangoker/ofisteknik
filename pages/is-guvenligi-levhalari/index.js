import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Ofisgerecleri.module.css";
const Index = () => {
  return (
    <div>
      <Head>
        <title>İş Güvenliği Levhaları - Ofis Teknik Kırtasiye</title>
        <meta
          name="description"
          content="İş Güvenliği Levhaları - Ofis Teknik Kırtasiye"
        />
        <meta
          name="keywords"
          content="ostim reklam, ostim reklamcı, ostim grafik, ostim iş güvenliği, ankara ostim reklam, ankara ostim reklamcı, ofis gereçleri, ostim ofis malzemesi, ostim ofis gereçleri, ankara ostim ofis, ostim fotokopi kağıdı, ostim poşet dosya,
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
          <div className={styles.headerText}>Taşıma Kolileri</div>
        </div>
        <div className={styles.pdftext}>
          <a href="/katalog.pdf">PDF görüntülemek için tıklayınız.</a>
        </div>
        <object
          className={styles.pdf}
          data="katalog.pdf"
          type="application/pdf"
          width="100%"
          height="1000px"
        ></object>
      </div>
    </div>
  );
};

export default Index;
