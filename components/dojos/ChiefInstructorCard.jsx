import React from "react";
import styles from "../../styles/dojos.module.css"
import Card from "react-bootstrap/Card";

export default function ChiefInstructorCard(props) {
    return (
        <div className={styles.galleryInstructorDojo}>
            <div className="d-flex justify-content-around">
                <Card className={styles.instructorCardCard} id={props.id}>
                    <Card.Img
                        variant="top"
                        src={props.chiefInstructeurPic}
                        className={styles.instructorCardCardImgTop}
                    />
                    <Card.Body>
                        <Card.Title className={styles.instructorCardTitle}>
                            {" "}
                            {props.ChiefInstructeurPosition}{" "}
                        </Card.Title>
                        <Card.Text className="">
                            {" "}
                            {props.chiefInstructeurName} <br></br>
                            {props.chiefInstructeurRank}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
