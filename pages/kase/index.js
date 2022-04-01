import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Kase.module.css";

const Index = () => {
  const [ratio, setRatio] = useState(4 / 3); // default to 16:9
  return (
    <div>
      <Head>
        <title>Acil Kaşe Ostim - Ofis Teknik Kırtasiye</title>
        <meta
          name="description"
          content="Acil Kaşe Hizmeti - Ofis Teknik Kırtasiye"
        />
        <meta
          name="keywords"
          content="ostim kaşe yaptırma, ostim ofis malzemesi, ostim ofis gereçleri, ankara ostim ofis, ostim fotokopi kağıdı, ostim poşet dosya,
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
          <div className={styles.headerText}>Acil Kaşe Ostim</div>
          <p style={{ padding: "10px" }}>
            Ankara Ostim&apos;de bulunan Şubemizde siz değerli müşterilerimize
            Acil Kaşe hizmeti sunuyoruz. Firma kaşeleri, tarih kaşeleri, isim
            kaşeleri, eczane kaşeleri, öğretmen kaşeleri, numaratör kaşeler,
            mühür yapımı, renkli kaşeler gibi bol çeşit ile siz değerli
            müşterilerimize hizmet veriyoruz. Acil kaşe yapımında farklı marka
            model çeşitler için bizimle iletişime geçebilirsiniz Bizden fiyat
            almadan kaşe yaptırmayın!
          </p>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src="/images/kase1.png" alt="Acil Kaşe Görsel 1" />
          </div>
          <div className={styles.item}>
            <img src="/images/kase2.png" alt="Acil Kaşe Görsel 2" />
          </div>
          <div className={styles.item}>
            <img src="/images/kase2.png" alt="Acil Kaşe Görsel 3" />
          </div>
        </div>
        <div className={styles.card}>
          <p style={{ padding: "10px" }}>
            Diğer marka/model ürünler için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
