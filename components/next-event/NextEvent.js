import React from "react";
import Image from "next/image";
import Tanaka2023Tour from "../../public/assets/images/posters/Tanaka-2023-tour.webp"
import styles from "./NextEvent.module.css";
import { useTranslation } from "react-i18next";
import { useTranslationReady } from "../hook/useTranslationReady";

export default function NextEvent() {
    const { t, i18n } = useTranslation('nextevent');
	const isReady = useTranslationReady();
    if (!isReady) {
		return null; 
	}

    return (
        <div>
            <Image src={Tanaka2023Tour} alt="Prochain évenement" width={362} height={512} className={styles.nextEvent} />
            
        </div>
    );
}
