import React from "react";
import DropdownClub from "./DropdownClub";
import DropdownProvince from "./DropdownProvince";
import DropdownCategory from "./DropdownCategory";
import styles from "../../styles/calendar.module.css"


export default function FilterContainer({ onClubSelected, onProvinceSelected, onCategorySelected }) {
    return (
        <div className={styles.calendarFilterContainer}>
          <DropdownClub onClubSelected={onClubSelected}  />
      <DropdownProvince onProvinceSelected={onProvinceSelected} />
      <DropdownCategory onCategorySelected={onCategorySelected} />
      
        </div>
        
      );
    }


