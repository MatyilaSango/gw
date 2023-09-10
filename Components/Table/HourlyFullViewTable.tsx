import React from "react";
import { hourlydataType } from "../../Types/types";
import styles from "./Table.module.css";
import hourlyStyles from "./HourlyFullViewTable.module.css"

export default function Table({
  temp,
  precip,
  type,
  real_feel,
  real_feel_shade,
  max_uv_index,
  wind,
  wind_gusts,
  humidity,
  indoor_humidity,
  dew_point,
  air_quality,
  cloudy_cover,
  visibility,
  cloud_ceiling,
}: hourlydataType | any) {

  return <div className={styles["table-wrapper"]}>
    <table className={hourlyStyles["table-wrapper--font"]}>
      <tbody>
        <tr>
          <td>Type</td>
          <td>{type}</td>
        </tr>
        <tr>
          <td>Tempereture</td>
          <td>{temp}</td>
        </tr>
        <tr>
          <td>Real feel</td>
          <td>{real_feel}</td>
        </tr>
        <tr>
          <td>Real feel shade</td>
          <td>{real_feel_shade}</td>
        </tr>
        <tr>
          <td>Max UV index</td>
          <td>{max_uv_index}</td>
        </tr>
        <tr>
          <td>Wind</td>
          <td>{wind}</td>
        </tr>
        <tr>
          <td>Wind Gusts</td>
          <td>{wind_gusts}</td>
        </tr>
        <tr>
          <td>Precipitation</td>
          <td>{precip}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{humidity}</td>
        </tr>
        <tr>
          <td>Indoor Humidity</td>
          <td>{indoor_humidity}</td>
        </tr>
        <tr>
          <td>Due point</td>
          <td>{dew_point}</td>
        </tr>
        <tr>
          <td>Air Quality</td>
          <td>{air_quality}</td>
        </tr>
        <tr>
          <td>Precipitation</td>
          <td>{precip}</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>{visibility}</td>
        </tr>
        <tr>
          <td>Cloud Ceiling</td>
          <td>{cloud_ceiling}</td>
        </tr>
        <tr>
          <td>Cloudy Cover</td>
          <td>{cloudy_cover}</td>
        </tr>
      </tbody>
    </table>
  </div>;
}
