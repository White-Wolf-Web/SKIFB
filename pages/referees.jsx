import React, { useState, useEffect } from "react";
import styles from "../styles/referees.module.css";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslationReady } from "../components/hook/useTranslationReady";

export default function Referees() {
	const { t, i18n } = useTranslation();
	const isReady = useTranslationReady();

	const [items, setItems] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://skifb-admin.be/api/RefereesApi/GetReferees");
				const data = await response.json();
				setItems(data);
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
			<h1>{t("referees.referee")}</h1>
			<table className="table table-striped table-dark table-hover">
				<thead>
					<tr>
						<th scope="col">{t("referees.firstName")}</th>
						<th scope="col">{t("referees.lastName")}</th>
						<th scope="col" className={styles.colDojo}>
							{t("referees.dojo")}
						</th>
						<th scope="col" className={styles.refereeLevel}>
							{t("referees.nationalLevel")}
						</th>
						<th scope="col" className={styles.refereeLevel}>
							{t("referees.internationalLicenceKata")}
						</th>
						<th scope="col" className={styles.refereeLevel}>
							{t("referees.internationalLicenseKumite")}
						</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td className={styles.colDojo}>{item.dojo}</td>
							<td className={styles.refereeCenter}>{item.nationalLevel}</td>
							<td className={styles.refereeCenter}>{item.kataLevel}</td>
							<td className={styles.refereeCenter}>{item.kumiteLevel}</td>
						</tr>
					))}
				</tbody>
			</table>
			<p className={styles.refereeAsterix}>* &ensp;{t("referees.1asterix")}</p>
			<p className={styles.refereeAsterix}>**&ensp;{t("referees.2asterix")}</p>
		</main>
	);
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["referees"])),
		},
	};
}
