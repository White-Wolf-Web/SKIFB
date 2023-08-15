import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../../styles/dojos.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

export default function DojoContact(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Text className={styles.cardContact}>
                <FontAwesomeIcon icon={faGlobe} style={{ width: 16}} /> &emsp; {props.contactMail}
                </Card.Text>
                <Card.Text className={styles.cardContact}>
                <FontAwesomeIcon icon={faPhone} style={{ width: 16}} />&emsp; {props.phone}
                </Card.Text>
                <Card.Text className={styles.cardContact}>
                <FontAwesomeIcon icon={faAt} style={{ width: 16}} />&emsp; {props.website}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
