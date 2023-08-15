import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.module.css";
import DojoData from "../../data/DojoData";
import { useRouter } from 'next/router'
import Image from "next/image";


export default function Carrousel() {
  const router = useRouter()
  const { id } = router.query
  const dojoClub = DojoData.findIndex((obj) => obj.id === id);
  const carrouselPic = DojoData[dojoClub].pictures;

  console.log(carrouselPic.toString());
  return (
    <div className="moduleCarrousel">
      <Carousel className="dojoClubCarrousel">
        {carrouselPic.map((item, index) => (
          <Carousel.Item key={`carousel-item-${id}-${index}`}>
            <Image
              width={764}
              className="d-block w-100 carrouselImg"
              src={item}
              alt="groupe de kateka"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
