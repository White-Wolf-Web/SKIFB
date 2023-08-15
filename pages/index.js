import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NextEvent from "../components/next-event/NextEvent";
import Modal from "react-modal";
import Image from "next/image";
//import "../i18n";
import styles from "../styles/home.module.css";

Modal.setAppElement('#__next');


export default function Home() {
	const { t, i18n } = useTranslation();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (i18n.isInitialized) {
			setIsReady(true);
		} else {
			i18n.on('initialized', () => setIsReady(true));
		}
	}, [i18n]);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};
	if (!isReady) {
		return null; // ou un composant de chargement
	}

	return (
		<div>
			<main>
				{" "}
				<h1 className={styles.homeH1}>{t("home.title")}</h1>
				<div>
					<section>
						<h2>{t("home.section1_h2")}</h2>
						<p>{t("home.section1_text")}</p>
					</section>
					<section>
						<h2>{t("home.section2_h2")}</h2>
						<p>{t("home.section2_text")}</p>
					</section>
					<section>
						<h2>{t("home.section3_h2")}</h2>
						<p>{t("home.section3_text")}</p>
					</section>
					<section>
						<h2>{t("home.section4_h2")}</h2>
						<p>{t("home.section4_text")}</p>
					</section>
				</div>
				<div className={styles.bottomSection} >
                <Image src="/assets/images/senseis/stephaneCastrique.jpg" alt="kata enpi" className={styles.picBottomSection} width={572} height={539} />
                <div className={styles.sousSectionBottomSection}   >  
                <p className={styles.japaneseKanjiSkifb}>國 際 松 濤 館 空 手 道 ベ ル ギ ー 連 盟</p>
					<button onClick={openModal} className={styles.nextEventButton} >Next Event</button>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						contentLabel="Next Event"
						style={{
							overlay: {
								backgroundColor: "rgba(0, 0, 0, 0.75)",
							},
							content: {
								color: "lightsteelblue",
								height: "650px",
								width: "500px",
								margin: "auto",
								padding: "20px",
								border: "1px solid #ccc",
								borderRadius: "4px",
							},
						}}
					>
						<h2>Next Event</h2>
						<button onClick={closeModal} className={styles.nextEventCloseModal}  >Close</button>
						<NextEvent />
					</Modal>
					
				</div></div>
			</main>
		</div>
	);
}
