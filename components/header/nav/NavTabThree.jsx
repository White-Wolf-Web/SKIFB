import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../../hook/useTranslationReady";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavTabThree() {
	const { t, i18n } = useTranslation('nav');
	const isReady = useTranslationReady();

	if (!isReady) {
		return null; 
	}
	return (
		<Dropdown>
			<Dropdown.Toggle id="dropdown-basic" className="nav-link">
				SKIF-B
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item href="/board">{t("nav.board")}</Dropdown.Item>
				<Dropdown.Item href="/board">{t("nav.statutes")}</Dropdown.Item>
				<Dropdown.Item href="/board">{t("footer.legal_notice")}</Dropdown.Item>
				<Dropdown.Item href="/board">{t("footer.becoming_a_member")}</Dropdown.Item>
				<Dropdown.Item href="/karatekas">{t("nav.who_s_who")}</Dropdown.Item>
				<Dropdown.Item href="/dojos">{t("footer.dojo")}</Dropdown.Item>
				<Dropdown.Item href="/board">Google Map</Dropdown.Item>
				<Dropdown.Item href="/photos">{t("nav.photo_gallery")}</Dropdown.Item>
				<Dropdown.Item href="/board">YŪDANSHA KAI</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
export async function getServerSideProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["nav"])),
		},
	};
}
