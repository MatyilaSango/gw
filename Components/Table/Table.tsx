import React from "react";
import { dataType } from "../../Types/types";
import styles from "./Table.module.css";

export default function Table({
  temp,
  real_feel,
  real_feel_shade,
  phrase,
  max_uv_index,
  wind,
  wind_gusts,
  prob_of_precip,
  prob_of_thunderstorm,
  precip,
  cloud_cover,
}: dataType | any) {

  return <div className={styles["table-wrapper"]}>
    <table>
      <tbody>
        <tr>
          <td>Temperature</td>
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
          <td>Phrase</td>
          <td>{phrase}</td>
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
          <td>Wind gusts</td>
          <td>{wind_gusts}</td>
        </tr>
        <tr>
          <td>Prob. of precipitation</td>
          <td>{prob_of_precip}</td>
        </tr>
        <tr>
          <td>Prob. of thunderstorm</td>
          <td>{prob_of_thunderstorm}</td>
        </tr>
        <tr>
          <td>Precipitation</td>
          <td>{precip}</td>
        </tr>
        <tr>
          <td>Cloud  cover</td>
          <td>{cloud_cover}</td>
        </tr>
      </tbody>
    </table>
  </div>;
}
