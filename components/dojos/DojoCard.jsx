import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../../styles/dojos.module.css"
import DojoCardCover from "./DojoCardCover";

export default function DojoCard(props) {
    return (
        <div className="d-flex justify-content-around">
            <Card className={styles.dojosCard}>
                <DojoCardCover coverImage={props.coverImage} />
                <Card.Body>
                    <Card.Title className={styles.dojoCardTitle}>{props.club}</Card.Title>
                    <Card.Text className={styles.dojoCardInstructeur}> {props.chiefInstructeur}</Card.Text>
                    <Card.Text className={styles.dojoTown}>{props.town}</Card.Text>
                    <Button variant="primary">DOJO</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
