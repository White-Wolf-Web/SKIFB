import React from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslationReady } from "../components/hook/useTranslationReady";

export default function History() {
	const { t, i18n } = useTranslation();
	const isReady = useTranslationReady();
	const paragraphKeys = ["hist_p1", "hist_p2", "hist_p3", "hist_p4", "hist_p5", "hist_p6", "hist_p7", "hist_p8", "hist_p9", "hist_p10", "hist_p11"];

	if (!isReady) {
		return null; 
	}

	return (
		<main>
			<div>
				<h1>{t("history.hist_h1")}</h1>
				<br></br>
				{paragraphKeys.map((key, index) => (
					<p key={index}>{t(`history.${key}`)}</p>
				))}
			</div>
		</main>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["history"])),
		},
	};
}
