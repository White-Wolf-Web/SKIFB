import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CalendarPoster(props) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendar");
        const data = await response.json();
        setItem(data[0]); // Set only the first item in the array
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="calendarCardCoverImg">
      {item && (
        <Image src={`data:image/jpeg;base64,${props.coverImage}`} alt={item.title} width={200} height={300}/>
      )}
    </div>
  );
}