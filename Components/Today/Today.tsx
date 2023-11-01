import React, { useEffect, useRef, useState } from "react";
import { locationsType, todayType } from "../../Types/types";
import styles from "./Today.module.css";
import appStyles from "../App/App.module.css";
import SearchOption from "../SearchOptions/SearchOption";
import locationsHandler from "../../Scapping/src/Controller/Location/Location";

interface ITodayProps {
  data: todayType;
  search: String;
  handleSetSearch: (parameter: string) => void;
  setBackgroundPic: (value: React.SetStateAction<string>) => void;
  wallpaper: string;
  wallpaperNight: string;
}

export default function Today({
  data,
  search,
  handleSetSearch,
  setBackgroundPic,
  wallpaper,
  wallpaperNight,
}: ITodayProps) {
  const [locations, setLocations] = useState<locationsType>();

  let inputRef = useRef<String | any>();

  const [time, setTime] = useState<Date>();

  useEffect(() => {
    const timeInterval = setInterval(async () => {
      let date = new Date();
      date.setHours(date.getUTCHours() + Number(data.offset));
      if (date.getHours() === 12) {
        date.setHours(0)
      } else if (date.getHours() === 0) {
        date.setHours(12)
      }
      setTime((prev) => (prev = date));
      if (
        (date.getHours() >= 18 && date?.getHours() <= 24) ||
        (date?.getHours() >= 0 && date?.getHours() <= 6)
      ) {
        setBackgroundPic((prev) => (prev = wallpaperNight));
      } else {
        setBackgroundPic((prev) => (prev = wallpaper));
      }
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  const handleSearch = async (e: any): Promise<void> => {
    const inpitValue: string = e.target.value;
    if (inpitValue === "") return;
    try {
      document
        .querySelector(`.${appStyles["loading-wrapper"]}`)
        ?.classList.remove(`${appStyles["loading-wrapper__hide"]}`);

      let res: locationsType = await locationsHandler(inpitValue);
      
      if (res.hasOwnProperty("available_locations")) {
        document
          .querySelector(`.${styles["today-wrapper__input-search__search"]}`)
          ?.classList.remove(`${styles["removeLocations"]}`);
        setLocations(res);
        document
          .querySelector(`.${appStyles["loading-wrapper"]}`)
          ?.classList.add(`${appStyles["loading-wrapper__hide"]}`);
      } else {
        handleSetSearch(inpitValue);
      }

      inputRef.current = "";
    } catch {
      alert("No such locations found!");
    }
  };

  return (
    <div className={styles["today-wrapper"]}>
      <div className={styles["today-wrapper__input-search"]}>
        <input
          id="input"
          type="text"
          placeholder="Search..."
          ref={inputRef}
          onChange={handleSearch}
        />
        <div className={styles["today-wrapper__input-search__search"]}>
          {locations
            ? locations?.available_locations.map((location, i) => (
              <SearchOption
                key={i}
                location={String(location)}
                handleSetSearch={handleSetSearch}
              />
            ))
            : ""}
        </div>
      </div>
      <div className={styles["wrapper-weather"]}>
        <div className={styles["wrapper-weather-top-det"]}>
          <div className={styles["wrapper-weather-top-det__loc-type"]}>
            <div className={styles["loc"]}>
              <div className={styles["loc-text"]}>{search}</div>
            </div>
            <div className={styles["type"]}>
              <span>{data.type}</span>
            </div>
          </div>
          <div className={styles["wrapper-weather-top-det__time"]}>
            <div className={styles["time"]}>
              <span>{time?.toString().split(" ")[4]}</span>
            </div>
          </div>
        </div>
        <div className={styles["wrapper-weather-bottom-det"]}>
          <div className={styles["wrapper-weather-bottom-det__det-pic"]}>
            <div className={styles["wrapper-weather-bottom-det__det"]}>
              <div className={styles["temp"]}>
                <span>{data.temp}</span>
              </div>
              <div className={styles["wind"]}>
                <span>Wind: {data.wind}</span>
              </div>
              <div className={styles["air-quality"]}>
                <span>Air quality: {data.air_quality}</span>
              </div>
            </div>
            <div className={styles["wrapper-weather-bottom-det__pic"]}>
              <img src={data.icon} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
