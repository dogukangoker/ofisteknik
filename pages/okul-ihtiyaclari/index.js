import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Ofisgerecleri.module.css";

const Index = () => {
  const [ratio, setRatio] = useState(4 / 3); // default to 16:9
  return (
    <div>
      <Head>
        <title>Okul İhtiyaçları - Ofis Teknik Kırtasiye</title>
        <meta
          name="description"
          content="Okul İhtiyaçları - Ofis Teknik Kırtasiye"
        />
        <meta
          name="keywords"
          content="okul ihtiyaçları, ostim okul, ofis gereçleri, ostim ofis malzemesi, ostim ofis gereçleri, ankara ostim ofis, ostim fotokopi kağıdı, ostim poşet dosya,
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
          <div className={styles.headerText}>Okul İhtiyaçları</div>
          <p>
            {" "}
            ANKARA&apos;NIN HER YERİNE ÜCRETSİZ TESLİMAT KAPIDA ÖDEME KOLAYLIĞI
          </p>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image
              src="/images/1.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/2.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/3.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/4.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/5.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/6.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/7.png"
              width={250}
              height={250 / ratio}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/8.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/9.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/10.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/11.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/12.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/13.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/14.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/15.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/16.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/17.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/18.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/19.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/20.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/21.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/22.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/images/23.png"
              width={250}
              height={250 / ratio}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.card}>
          <p>
            Diğer marka/model ürünler için bizimle iletişime geçebilirsiniz.
          </p>
          <p>
            Siparişlerinizi adresinize teslim ediyoruz. Fiyatlarımıza %8 - %18
            KDV dahil değildir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
