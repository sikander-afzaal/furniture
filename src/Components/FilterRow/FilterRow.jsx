import React from "react";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FilterRow.css";
function FilterRow({ title, row }) {
  return (
    <div className="filter-col">
      <div className="top-filter-col">
        <h4>{title}</h4>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </div>
      {row.map((elem, key) => {
        return (
          <div className="filter-row">
            <div className="flex">
              <input type="checkbox" />
              <p className="filter-title">{elem.name}</p>
            </div>

            <p className={`stock ${elem.red ? "red-stock" : ""}`}>{elem.num}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FilterRow;
