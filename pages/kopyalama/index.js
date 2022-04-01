import React from "react";
import Head from "next/head";
import styles from "../../styles/Ofisgerecleri.module.css";
const index = () => {
  return (
    <div>
      <Head>
        <title>Kopyalama Hizmetleri - Ofis Teknik Kırtasiye</title>
        <meta
          name="description"
          content="Kopyalama Hizmetleri - Ofis Teknik Kırtasiye"
        />
        <meta
          name="keywords"
          content="kopyalama hizmetleri, ostim kopyalama, ostim fotokopi, ofis gereçleri, ostim ofis malzemesi, ostim ofis gereçleri, ankara ostim ofis, ostim fotokopi kağıdı, ostim poşet dosya,
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
          <div className={styles.headerText}>Kopyalama Hizmetleri</div>
          <p style={{ padding: "10px" }}>
            Ankara Ostim&apos;de bulunan Şubemizde siz değerli müşterilerimize
            kopyalama hizmeti sunuyoruz. Bizden fiyat almadan kopyalama hizmeti
            yaptırmamanızı tavsiye ediyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
