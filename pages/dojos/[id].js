import React, { useState, useEffect } from "react";
import styles from "../../styles/dojos.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Carrousel from "../../components/carrousel/Carrousel";
import DojoAllInstructors from "../../components/dojos/DojoAllInstructors";
//import DojoSchedules from "../../components/dojos/DojoSchedules";
import DojoContact from "../../components/dojos/DojoContact";
import DojoAdress from "../../components/dojos/DojoAdress";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslationReady } from "../../components/hook/useTranslationReady";

export default function DojoClub() {
	const { t, i18n } = useTranslation();
	const isReady = useTranslationReady();
	const router = useRouter();
	const { id } = router.query;

	const [dojoClub, setDojoClub] = useState(null);
	
	useEffect(() => {
		if (id) {
			async function fetchData() {
				try {
					const response = await fetch(`https://skifb-admin.be/api/ClubsAPI/GetClubById?id=${id}`);
					const data = await response.json();
					setDojoClub(data);
				} catch (e) {
					console.log(e);
				}
			}
			fetchData();
		}
	}, [id]);

	if (!dojoClub || !isReady) {
		return null; // or a loading spinner, or some other placeholder
	}
	const { contact, address } = dojoClub;

	return (
		<main>
			<h1>{dojoClub.club}</h1>
			<div>
				<Carrousel />
			</div>
			<DojoAllInstructors />
			<h2>{t("words.schedule")}</h2>
			<div className={styles.dojoShedules}></div>
			<h2>{t("words.contact")}</h2>
			<div className={styles.dojoContact}>
				{contact.map((item, index) => (
					<DojoContact key={index} contactMail={item.email} phone={item.phone} website={item.website} />
				))}
			</div>
			<h2>{t("words.adress")}</h2>
			<div className={styles.dojoAdressCard}>
				{address.map((element, index) => (
					<DojoAdress
						key={index}
						street={element.street}
						number={element.number}
						postCode={element.postCode}
						city={element.city}
						province={element.province}
						country={element.country}
					/>
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


export async function getStaticPaths() {
	const response = await fetch("https://skifb-admin.be/api/ClubsAPI/GetAllClubsDescription?lang=FR");
	const data = await response.json();
	const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

	return {
		paths: paths,
		fallback: false,
	};
}