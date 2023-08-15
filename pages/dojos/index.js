import React, { useState, useEffect } from "react";
import styles from "../../styles/dojos.module.css";
import Link from "next/link";
import DojoCard from "../../components/dojos/DojoCard";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslationReady } from "../../components/hook/useTranslationReady";

export default function Dojos() {
  const { t, i18n } = useTranslation();
  const isReady = useTranslationReady();
  const [items, setItems] = useState([]);
  const urlPdf = "https://skifb-admin.be/api/CalendarAPI/GetFile?filename=";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://skifb-admin.be/api/ClubsAPI/GetAllClubsDescription?lang=FR");
        const data = await response.json();
        setItems(data);
        const ids = data.map((item) => item.id);
        console.log(ids);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  if (!isReady) {
    return null;
  }
  return (
    <main>
      <h1>Dojos SKIF-B</h1>
      <div className={styles.DojoGallery}>
        {items.map((item) => (
          <Link href={"/dojos/" + item.id} key={item.id}>
            <DojoCard coverImage={item.imageData} club={item.title} chiefInstructeur={item.chiefInstructor} town={item.city} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dojos"])),
    },
  };
}
