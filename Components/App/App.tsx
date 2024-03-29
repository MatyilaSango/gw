"use client";
import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import todayStyles from "../Today/Today.module.css";
import Image from "next/image";
import loadingGif from "../../Pics/loading-anim.gif";
import gweatherLogo from "../../Pics/GW-weather.png";
import leftRightArrow from "../../Pics/back-right-arrow.svg";
import Today from "../Today/Today";
import {
  dailyDataType,
  dataType,
  hourlyDataType,
  hourlydataType,
  monthlyWeatherData,
  todayDataType,
  searchDataType
} from "../../Types/types";
import Hourly from "../Hourly/Hourly";
import Options from "../Options/Options";
import DayNight from "../Daily/DayNight";
import SunriseSunset from "../Daily/SunriseSunset";
import TempHistory from "../Daily/TempHistory";
import Head from "next/head";
import dailyHandler from "../../Scapping/src/Controller/Daily/Daily";
import hourlyHandler from "../../Scapping/src/Controller/Hourly/Hourly";
import todayHandler from "../../Scapping/src/Controller/Today/Today";
import HourlyFullView from "../Hourly/HourlyFullView";
import getRootHTMLPage from "../../Scapping/src/Addon/RootPage/RootPage";
import monthlyHandler from "../../Scapping/src/Controller/Mothly/Monthly";
import Calender from "../Calender/Calender";
import WeatherMap from "../Map/WeatherMap";

let wallpaper = require("../../Pics/weather_wallpaper.jpg");
let wallpaperNight = require("../../Pics/gweatherNight.png");

function App() {
  const [search, setSearch] = useState<searchDataType>();
  const [ipData, setIpData] = useState<any>()
  const [todayData, setTodayData] = useState<todayDataType>();
  const [hourlyData, setHourlyData] = useState<hourlyDataType>();
  const [dailyData, setDailyData] = useState<dailyDataType>();
  const [monthlyData, setMonthlyData] = useState<monthlyWeatherData>();
  const [day_night, setDay_night] = useState<dataType[] | any[]>([]);
  const [reRender, setreRender] = useState<boolean>(true);
  const [dailyOption, setDailyOption] = useState<string>("1");
  const [backgroundPic, setBackgroundPic] = useState<string>("");
  const [showHourlyFullView, setShowHourlyFullView] = useState<boolean>(false);
  const [hourlyFullViewdata, setHourlyFullViewdata] = useState<hourlydataType>();
  const [rootPage, setRootPage] = useState<Promise<any>>();

  useEffect(() => {
    if (!search) {
      const getMyLocation = async (): Promise<void> => {
        const ipdata = await (await fetch("https://surfshark.com/api/v1/server/user")).json()
        const data = await (await fetch(`https://ipapi.co/${await ipdata.ip}/json/`)).json()
        setSearch(prev => prev = {city: data.city, geo: {lat: data.latitude, long: data.longitude}})
        setIpData(data)
      }
      getMyLocation()
    }
  }, [])

  useEffect(() => {
    if (reRender && search) {
      const _rootPage = getRootHTMLPage(search.city, search.geo)
      setRootPage(prev => prev = _rootPage)

      const todayPromise = new Promise((reslove, reject) => {
        reslove(todayHandler(search.city, _rootPage).then((res) => setTodayData(res as todayDataType)))
      })

      const hourlyPromise = new Promise((reslove, reject) => {
        reslove(hourlyHandler(search.city, _rootPage).then((res) => setHourlyData(res as hourlyDataType)))
      })

      const dailyPromise = new Promise((reslove, reject) => {
        reslove(dailyHandler(search.city, dailyOption, _rootPage).then((res) =>
          setDailyData(res as dailyDataType)
        ))
      })

      const monthlyPromise = new Promise((reslove, reject) => {
        reslove(monthlyHandler(search.city, _rootPage).then((res) =>
          setMonthlyData(res as monthlyWeatherData)
        ))
      })

      Promise.all([todayPromise, hourlyPromise, dailyPromise, monthlyPromise]) // To do add monthly promise
      document.title = "GW-Weather | " + search.city;
    }
  }, [search]);

  useEffect(() => {
    if (rootPage && search) {
      dailyHandler(search.city, dailyOption, rootPage as Promise<any>).then((res) =>
        setDailyData(res as dailyDataType)
      );
    }
  }, [dailyOption])

  useEffect(() => {
    if (dailyData) {
      const tempDN = [];
      dailyData?.data.day_night?.day
        ? tempDN.push(dailyData?.data.day_night?.day)
        : 0;
      dailyData?.data.day_night?.night
        ? tempDN.push(dailyData?.data.day_night?.night)
        : 0;
      setDay_night(tempDN);
      setreRender(false);
    }
  }, [dailyData])

  useEffect(() => {
    if(backgroundPic) document.body.style.backgroundImage = `url(${(backgroundPic as any).default.src})`
  }, [backgroundPic])

  const handleSetSearch = (parameter: searchDataType): void => {
    setSearch(parameter);
    setIpData({...ipData, latitude: parameter.geo.lat, longitude: parameter.geo.long})
    setDailyData(undefined);
    setMonthlyData(undefined)
    setreRender(true);
    document
      .querySelector(`.${todayStyles["today-wrapper__input-search__search"]}`)
      ?.classList.add(`${todayStyles["removeLocations"]}`);
  };

  const handleHourlySideScroll = (direction: string) => {
    const hourlyContainer: HTMLDivElement = document.getElementById(
      "components-container-top__hourly"
    ) as HTMLDivElement;
    switch (direction) {
      case "left":
        hourlyContainer.scrollLeft -= 170;
        break;

      case "right":
        hourlyContainer.scrollLeft += 170;
        break;
    }
  };

  const handleSetDailyOption = (parameter: string): void => {
    setDailyOption((prev) => (prev = parameter));
    setreRender((prev) => (prev = true));
    setDailyData((prev) => (prev = undefined));
  };

  const handleHourlyFullView = (id: number) => {
    setHourlyFullViewdata(prev => (prev = hourlyData?.data[id]));
  };

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

      {/* {backgroundPic ? <Image src={backgroundPic} className={styles["App-img"]} alt="pic" /> : ""} */}

      {search ? (<div
        className={styles["components-container"]}
        id="components-container"
      >
        <div className={styles["logo-wrapper"]}> 
            <Image src={gweatherLogo} alt="logo" className={styles["logo"]} />
        </div>
        <div className={styles["components-container-top"]}>
          {todayData && (
            <Today
              data={todayData?.data}
              search={todayData?.search_parameter}
              handleSetSearch={handleSetSearch}
              setBackgroundPic={setBackgroundPic}
              wallpaper={wallpaper}
              wallpaperNight={wallpaperNight}
            />
          )}
          <div className={styles["components-container-top__hourly"]}>
            <div
              className={styles["components-container-top__hourly--left_arrow"]}
            >
              <Image
                className={
                  styles["components-container-top__hourly--left_arrow--img"]
                }
                id="components-container-top__hourly--left_arrow--img"
                src={leftRightArrow}
                alt="left-arrow"
                onClick={() => handleHourlySideScroll("left")}
              />
            </div>
            <div
              className={styles["components-container-top__hourly--data-view"]}
              id="components-container-top__hourly"
            >
              {hourlyData?.data.map((data_, i) => (
                <Hourly
                  key={i}
                  id={i}
                  hour={data_.hour}
                  icon={data_.icon}
                  temp={data_.temp}
                  type={data_.type}
                  setShowHourlyFullView={setShowHourlyFullView}
                  handleHourlyFullView={handleHourlyFullView}
                />
              ))}
            </div>
            <div
              className={
                styles["components-container-top__hourly--right_arrow"]
              }
            >
              <Image
                className={
                  styles["components-container-top__hourly--right_arrow--img"]
                }
                id="components-container-top__hourly--right_arrow--img"
                src={leftRightArrow}
                alt="right-arrow"
                onClick={() => handleHourlySideScroll("right")}
              />
            </div>
          </div>
        </div>
        {dailyData ? (
          <div className={styles["components-container-bottom"]}>
            <div className={styles["components-container-bottom-nav"]}>
              <div className={styles["components-container-bottom-nav__text"]}>
                <span>Daily Weather</span>
              </div>
              <div className={styles["components-container-bottom-nav__options"]}>
                <Options
                  handleSetDailyOption={handleSetDailyOption}
                  offsetHours={Number(todayData?.data.offset.hours)}
                />
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
                  icon={dailyData?.data.sunrise_sunset.sunrise.icon}
                  duration={dailyData?.data.sunrise_sunset.sunrise.duration}
                  rise={dailyData?.data.sunrise_sunset.sunrise.rise}
                  set={dailyData?.data.sunrise_sunset.sunrise.set}
                />
                <SunriseSunset
                  title="Sunset"
                  icon={dailyData?.data.sunrise_sunset.sunset.icon}
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

        <div className={styles["Calender-map-wrapper"]}>
          <div className={styles["App__Calender-wrapper"]}>
            <Calender month={monthlyData?.month} year={monthlyData?.year} data={monthlyData?.data} />
          </div>
        </div>

        <div className={`${styles["Calender-map-wrapper"]} ${styles["Map-wrapper"]}`}>
          <div className={`${styles["components-container-bottom-nav"]} ${styles["Map-wrapper__nav"]}`}>
            <div className={styles["components-container-bottom-nav__text"]}>
              <span>Weather Map</span>
            </div>
          </div>
          <div className= {styles["Map-wrapper__body"]}>
            <div className={`${styles["App__Calender-wrapper"]} ${styles["App__Calender-wrapper_map"]}`}>
              <WeatherMap latitude={ipData.latitude} longitude={ipData.longitude} />
            </div>
          </div>
          
        </div>
        
      </div>
      ) : (
        ""
      )}

      {reRender ? (
        <div className={styles["loading-wrapper"]}>
          <div className={styles["loading-wrapper__gif"]}>
            <Image src={loadingGif} alt="loading" width={100} height={100} />
          </div>
        </div>
      ) : (
        ""
      )}

      {(showHourlyFullView && hourlyFullViewdata) ? (
        <HourlyFullView
          hourlyFullViewdata={hourlyFullViewdata as hourlydataType}
          setShowHourlyFullView={setShowHourlyFullView}
        />
      ) : (
        ""
      )}

      <div className={styles['cprght-wrapper']}>
        <span>&copy; {new Date().getUTCFullYear()} GW-Weather</span>
      </div>
    </div>
  );
}

export default App;
