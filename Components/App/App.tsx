import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import todayStyles from "../Today/Today.module.css"
import Image from "next/image";
import loadingGif from "../../Pics/loading-anim.gif";
import gweatherLogo from "../../Pics/gweather.png";
import Today from "../Today/Today";
import {
  dailyDataType,
  dataType,
  hourlyDataType,
  todayDataType,
} from "../../Types/types";
import Hourly from "../Hourly/Hourly";
//import Options from "../Options/Options";
import DayNight from "../Daily/DayNight";
import SunriseSunset from "../Daily/SunriseSunset";
import TempHistory from "../Daily/TempHistory";
import Head from "next/head";

let wallpaper = require("../../Pics/weather_wallpaper.jpg");
let wallpaperNight = require("../../Pics/gweatherNight.png");

function App() {
  const [search, setSearch] = useState<string>("Cape Town, Western Cape");
  const [todayData, setTodayData] = useState<todayDataType>();
  const [hourlyData, setHourlyData] = useState<hourlyDataType>();
  const [dailyData, setDailyData] = useState<dailyDataType>();
  const [day_night, setDay_night] = useState<dataType[] | any[]>([]);
  const [reRender, setreRender] = useState<boolean>(true);
  const [dailyOption] = useState<string>("0");
  const [backgroundPic, setBackgroundPic] = useState<string>("");
  const [locTime, setLocTime] = useState<Date>(new Date());
  //const TEN_MINUTES: number = 600000;

  useEffect(() => {
    if (reRender) {
      document
        .querySelector(`.${styles["loading-wrapper"]}`)
        ?.classList.remove(`.${styles["loading-wrapper__hide"]}`);

      //Fetching today data
      fetch("../../api/src/Controller/Today/Today", {
        method: "post",
        body: JSON.stringify(search)
      }).then(res => {
        res.json().then(res => {
          setTodayData(res)
        })
      })

      //Fetching hourly data
      fetch("../../api/src/Controller/Hourly/Hourly", {
        method: "post",
        body: JSON.stringify(search)
      }).then(res => {
        res.json().then(res => {
          setHourlyData(res)
        })
      })

      //Fetching daily data
      fetch("../../api/src/Controller/Daily/Daily", {
        method: "post",
        body: JSON.stringify({search, dailyOption})
      }).then(res => {
        res.json().then(res => {
          setDailyData(res)
        })
      })

      if (dailyData) {
        const tempDN = []
        dailyData?.data.day_night?.day ? tempDN.push(dailyData?.data.day_night?.day) : 0
        dailyData?.data.day_night?.night ? tempDN.push(dailyData?.data.day_night?.night) : 0
        setDay_night(tempDN);

        document
          .querySelector(`.${styles["loading-wrapper"]}`)
          ?.classList.add(`${styles["loading-wrapper__hide"]}`);
        setreRender(false);
      }
    }
  }, [dailyData, search, dailyOption, reRender]);

  useEffect(() => {
    setInterval(() => {
      if (
        (locTime?.getHours() >= 18 && locTime?.getHours() <= 24) ||
        (locTime?.getHours() >= 0 && locTime?.getHours() <= 6)
      ) {
        setBackgroundPic(prev => prev = wallpaperNight);
      } else {
        setBackgroundPic(prev => prev = wallpaper);
      }
    }, 3000);
  }, [locTime]);

  const handleSetSearch = (parameter: string): void => {
    setSearch(parameter);
    setDailyData(undefined);
    setreRender(true);
    document
      .querySelector(`.${todayStyles["today-wrapper__input-search__search"]}`)
      ?.classList.add(`${todayStyles["removeLocations"]}`);
  };
  
  //const handleSetDailyOption = (parameter: String): void => {};

  return (
    <div className={styles["App"]}>
      <Head>
        <title>GW | {todayData?.search_parameter}</title>
        <link rel="icon" href="./gweather.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Global weather application that shaows the current, today, hourly, and daily wather."
        />
      </Head>

      <Image src={backgroundPic} className={styles["App-img"]} alt="pic" />
      
      <div className={styles["components-container"]} id="components-container ">
        <div className={styles["components-container-top"]}>
          {todayData && (
            <Today
              data={todayData?.data}
              search={todayData?.search_parameter}
              handleSetSearch={handleSetSearch}
              setLocTime={setLocTime}
            />
          )}
          <div className={styles["components-container-top__hourly"]}>
            {hourlyData?.data.map((data_, i) => (
              <Hourly
                key={i}
                hour={data_.hour}
                icon={data_.icon}
                temp={data_.temp}
                type={data_.type}
              />
            ))}
          </div>
        </div>
        {dailyData ? (
          <div className={styles["components-container-bottom"]}>
            <div className={styles["components-container-bottom-nav"]}>
              <div className={styles["components-container-bottom-nav__text"]}>
                <span>Daily Weather</span>
              </div>
              <div className={styles["components-container-bottom-nav__options"]}>
                {/* <Options handleSetDailyOption={handleSetDailyOption} /> */}
              </div>
            </div>
            <div className={styles["components-container-bottom-dnsstal"]}>
              {day_night.map((data, i) => (
                <DayNight
                  key={i}
                  icon={data.icon}
                  title={data.title}
                  temp={data.temperature}
                  real_feel={data.real_feel}
                  real_feel_shade={data.real_feel_shade}
                  phrase={data.phrase}
                  max_uv_index={data.max_uv_index}
                  wind={data.wind}
                  wind_gusts={data.wind_gusts}
                  prob_of_precip={data.prob_of_precip}
                  prob_of_thunderstorm={data.prob_of_thunderstorm}
                  precip={data.precip}
                  cloud_cover={data.cloud_cover}
                  date={dailyData?.date}
                />
              ))}
              <div className={styles["sunrise-sunset-wrapper"]}>
                <SunriseSunset
                  title="Sunrise"
                  duration={dailyData?.data.sunrise_sunset.sunrise.duration}
                  rise={dailyData?.data.sunrise_sunset.sunrise.rise}
                  set={dailyData?.data.sunrise_sunset.sunrise.set}
                />
                <SunriseSunset
                  title="Sunset"
                  duration={dailyData?.data.sunrise_sunset.sunset.duration}
                  rise={dailyData?.data.sunrise_sunset.sunset.rise}
                  set={dailyData?.data.sunrise_sunset.sunset.set}
                />
              </div>
              <div className={styles["temperature-history-wrapper"]}>
                <div className={styles["temperature-history-wrapper__top"]}>
                  <span>Temperature History</span>
                </div>
                <TempHistory
                  tempHistory={dailyData?.data.temperature_history}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Image src={gweatherLogo} alt="logo" className={styles["logo"]} />
      </div>
      <div className={styles["loading-wrapper"]}>
        <div className={styles["loading-wrapper__gif"]}>
          <Image src={loadingGif} alt="loading" />
        </div>
      </div>
    
    </div>
  );
}

export default App;
