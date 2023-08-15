import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./Navigation.module.css"
import NavTabTwo from "./NavTabTwo";
import NavTabThree from "./NavTabThree";
import NavTabFour from "./NavTabFour";
import NavTabFive from "./NavTabFive";
import NavTabSix from "./NavTabSix";
import NavTabSeven from "./NavTabSeven";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../../hook/useTranslationReady";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";



export default function Navigation() {
    const { t, i18n } = useTranslation('nav');
	const isReady = useTranslationReady();

    if (!isReady) {
		return null;
	}

    return (
        <Nav defaultActiveKey="/" className={styles.nav}>
            <Nav.Item>
                <Nav.Link href="/" key={"nav.home.string"}>
                <FontAwesomeIcon icon={faHouseChimney} style={{ width: 16}} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <NavTabTwo eventKey="link-2" />
            </Nav.Item>
            <Nav.Item>
                <NavTabThree eventKey="link-3" />
            </Nav.Item>
            <Nav.Item>
                <NavTabFour eventKey="link4" />
            </Nav.Item>
            <Nav.Item>
                <NavTabFive eventKey="link5" />
            </Nav.Item>
            <Nav.Item>
                <NavTabSix eventKey="link6" />
            </Nav.Item>
            <Nav.Item>
                <NavTabSeven eventKey="link7" />
            </Nav.Item>
        </Nav>
    );
}
