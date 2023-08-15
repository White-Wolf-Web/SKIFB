import React from "react";
import DojoData from "../../data/DojoData";
import ChiefInstructorCard from "./ChiefInstructorCard";
import InstructorCard from "./InstructorCard";
import { useRouter } from 'next/router'
import styles from "../../styles/dojos.module.css"
//import "../../i18n";
import { useTranslation } from "react-i18next";

export default function DojoAllInstructors() {
    const router = useRouter()
    const { id } = router.query
    const { t } = useTranslation();
    const dojoClub = DojoData.findIndex((obj) => obj.id === id);
    const instructors = DojoData[dojoClub].instructeurs;
    const chiefInstructors = DojoData[dojoClub].chiefInstructeur;

    return (
        <div className="galleryInstructorDojo">
            <div>
                <ChiefInstructorCard
                    className=""
                    chiefInstructeurPic={chiefInstructors.pic}
                    chiefInstructeurRank={t("words.rank") + chiefInstructors.rank}
                    ChiefInstructeurPosition={t("words.chiefInstructor")}
                    chiefInstructeurName={chiefInstructors.name}
                    key={id + chiefInstructors.name}
                />
            </div>
            {instructors.length !== 0 ? (
                <div className="dojoInstructors">
                    {instructors.map((element) => (
                        <InstructorCard
                            instructeurPic={element.pic}
                            instructeurRank={t("words.rank") + element.rank}
                            instructeurPosition={t("words.instructor")}
                            instructeurName={element.name}
                            key={element.id + element.name}
                        />
                    ))}
                </div>
            ) : (
                <div className="displayNone">
                    <InstructorCard />
                </div>
            )}
        </div>
    );
}
