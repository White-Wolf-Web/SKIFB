import React, { useState, useEffect } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../../hook/useTranslationReady";
import Link from "next/link";
import Referees from "../../../pages/referees"
import styles from  "./Navigation.module.css";


export default function NavTabSix() {
	const { t, i18n } = useTranslation('nav');
	const isReady = useTranslationReady();
	const [isClient, setClient] = useState(false);

	if (!isReady) {
		return null; 
	}
	
	return (
		<Dropdown as={NavItem}>
			<Dropdown.Toggle id="dropdown-basic" className="nav-link" >{t("nav.refereeing")}</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item href="/referees" >{t("nav.referee")} </Dropdown.Item>
				<Dropdown.Item href="/" >{t("nav.rules")}</Dropdown.Item>
				<Dropdown.Item href="/" >{t("nav.score_sheet")}</Dropdown.Item>
				<Dropdown.Item href="/" >{t("nav.referee_gestures")}</Dropdown.Item>
				<Dropdown.Item href="/" >{t("nav.referee_comittee")}</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
