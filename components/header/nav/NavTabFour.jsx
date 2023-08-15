import React, { useState, useEffect } from 'react';

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../../hook/useTranslationReady";
import Calendar from "../../../pages/calendar";
import styles from "./Navigation.module.css";

export default function NavTabFour() {
	const { t, i18n } = useTranslation('nav');
	const isReady = useTranslationReady();
	const [isClient, setClient] = useState(false);

	useEffect(() => {
		setClient(true);
	}, []);

	if (!isReady) {
		return null; 
	}
/*
	if (!ready || !isClient) {
		return null; // ou un composant de chargement
	}
*/

	return (
		<div>
			<Link href="/calendar" className="nav-no-dropdown nav-link">
				{t("nav.calendar")}
			</Link>
		</div>
	);
}
