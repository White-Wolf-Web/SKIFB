import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../../hook/useTranslationReady";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function NavTabTwo() {
	const { t, i18n } = useTranslation('nav');
	const isReady = useTranslationReady();

	const [isOpen, setIsOpen] = useState(false);
	const [isClient, setClient] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);
  
	if (!isReady) {
		return null; 
	}
	return (
		<Dropdown>
		<Dropdown.Toggle id="dropdown-basic" className="nav-link" >SKIF</Dropdown.Toggle>
		<Dropdown.Menu>
		  <Dropdown.Item href="/history">{t("nav.history")}</Dropdown.Item>
		  <Dropdown.Item href="/karateconcept">{t("nav.concept")}</Dropdown.Item>
		  <Dropdown.Item href="/kanazawasoke">Kanazawa Soke</Dropdown.Item>
		  <Dropdown.Item href="/kanazawakancho">Kanazawa Kancho</Dropdown.Item>
		  <Dropdown.Item href="/murakamimanabu">Murakami Manabu</Dropdown.Item>
		  <Dropdown.Item href="/dojokun">Dojo Kun</Dropdown.Item>
		  <Dropdown.Item href="/">SKIEF</Dropdown.Item>
		</Dropdown.Menu>
	  </Dropdown>
	);
}
