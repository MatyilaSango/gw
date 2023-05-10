import React from "react";
import stylesTW from "./SunriseSunsetTable.module.css";
import stylesTH from "./TempHistorytable.module.css"

interface props {
    title: String,
    high: String,
    low: String
}

export default function TempHistoryTable({title, high, low }: props| any) {

  return (
    <div className={stylesTH["temp-history-table-wrapper"]}>
      <div className={stylesTH["head"]}>
        <span>{title}</span>
      </div>
      <div className={stylesTW["table-wrapper"]}>
        <table>
          <tbody>
            <tr>
              <td>High</td>
              <td>{high}</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{low}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
