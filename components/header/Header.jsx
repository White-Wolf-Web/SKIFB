import React from "react";
import styles from "./Header.module.css";
import SkifBLogo from "../../public/assets/images/logos/logoSkifB2.webp";
import Navigation from "./nav/Navigation";
import Image from "next/image";

export default function Header() {
	return (
		<>
			<div className={styles.enTete}>
				<Image src={SkifBLogo} alt="Logo de la skif en Belgique" width={153} height={150} className={styles.logoSkifB} title="logo Skif Belgium" priority />

				<div className={styles.skifb}>
					<div className="">
						<p>SKIF</p>
					</div>
					<div className={styles.colorGold}>
						<p>&nbsp;&nbsp;BEL</p>
					</div>
					<div className={styles.colorRed}>
						<p>GIUM</p>
					</div>
				</div>
			</div>
			<Navigation />{" "}
		</>
	);
}
