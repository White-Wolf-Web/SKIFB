import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import useDocumentDownload from "../hook/useDocumentDownload";
import ContactModal from "../contact/ContactModal";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../hook/useTranslationReady";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faDungeon, faCamera, faEnvelope, faFile, faPerson, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	const { t, i18n } = useTranslation('footer');
	const isReady = useTranslationReady();

	const handleDocumentDownload = useDocumentDownload();
	const [showContactModal, setShowContactModal] = useState(false);

	const handleContactClick = () => {
		setShowContactModal(true);
	};

	const handleCloseModal = () => {
		setShowContactModal(false);
	};
	if (!isReady) {
		return null; // Or a loading spinner or any placeholder you want to show while translations are loading
	}
	return (
		<footer id="footer" className={styles.footer}>
			<div className={styles.container}>
				<ul className={styles.footerLiens}>
					<li>
						<a href="https://skifb-link.be/p_nieuw_lid.php" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faCertificate} style={{ width: 16 }} />
							{t("footer.becoming_a_member")}
						</a>
					</li>
					<li>
						<Link href="/dojolist">
							<FontAwesomeIcon icon={faDungeon} style={{ width: 16 }} />
							&nbsp;{t("footer.dojo")}
						</Link>
					</li>
					<li>
						<Link href="/photos">
							<FontAwesomeIcon icon={faCamera} style={{ width: 16 }} />
							{t("footer.photo")}
						</Link>
					</li>
					<>
						<li>
							<button onClick={handleContactClick} className={styles.linkButton}>
								<FontAwesomeIcon icon={faEnvelope} style={{ width: 16 }} /> Contact
							</button>
						</li>

						{showContactModal && <ContactModal show={showContactModal} handleClose={handleCloseModal} />}
					</>

					<li>
						<div onClick={() => handleDocumentDownload("39ffc7ac-72db-43cf-a8c1-e942d78ef96d")}>
							<FontAwesomeIcon icon={faScaleBalanced} style={{ width: 16 }} />
							&nbsp;{t("footer.legal_notice")}
						</div>
					</li>
					<li>
						<FontAwesomeIcon icon={faPerson} style={{ width: 16 }} />
						&nbsp;
						<div onClick={() => handleDocumentDownload("c0b4a7ef-6f9d-4ec8-905e-1a08722198a2")}>{t("footer.privacy_policy")}</div>
					</li>

					<li>
						<Link href="/termsconditions">
							<FontAwesomeIcon icon={faFile} />
							{t("footer.conditions")}
						</Link>
					</li>
				</ul>
				<div className={styles.broderieSociale}>
					<Image
						src="/assets/images/logos/skifBroderie.png"
						alt="Broderie que l'on retrouve sur les kimonos de karaté skif"
						className={styles.skifBroderie}
						width={70}
						height={130}
						loading="lazy"
						title="true"
					/>
					<ul className={styles.icons}>
						<li>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
								<i className="fa-brands fa-instagram" alt="icon Instagram"></i>
							</a>
						</li>

						<li>
							<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
								<i className="fa-brands fa-twitter" alt="icon twitter"></i>
							</a>
						</li>

						<li>
							<a href="https://www.facebook.com/groups/124325430968790" target="_blank" rel="noopener noreferrer" title="Facebook">
								<i className="fa-brands fa-facebook" alt="icon Facebook"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.logoSkifWorld}>
					<Image src="/assets/images/logos/logoSkif.webp" alt="logo Skif world basé au Japon" width={175} height={175} title="true" loading="lazy" />
				</div>
			</div>
			<div className={styles.postFooter}>©copyright 2023</div>
		</footer>
	);
}

