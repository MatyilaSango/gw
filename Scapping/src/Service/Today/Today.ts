import cheerio from "cheerio";
import { todayDataType } from "../../../../Types/types";
import { setToday, getToday, deleteToday } from "../../Storage";
import TodayModel from "../../Models/Today";

export class Today {
  private _data_by_location: todayDataType = new TodayModel().model;
  constructor() {}

  private isFreshData = (data: todayDataType): boolean => {
    if (data) {
      let date_now: Date = new Date();
      var data_time = new Date(data.data.date.getTime());
      data_time.setMinutes(data_time.getMinutes() + 5);
      if (date_now.getTime() > data_time.getTime()) {
        deleteToday(data.search_parameter);
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  public scrapToday = async (
    search: string,
    rootPage: Promise<any>
  ): Promise<void> => {
    let todayData: todayDataType = getToday(search);
    if (todayData && this.isFreshData(todayData)) {
      this._data_by_location = todayData;
    } else {
      let response = await rootPage.then((results) => results);

      let $ = cheerio.load(response);
      var that = this;
      this._data_by_location.data.time = $(".cur-con-weather-card")
        .find(".cur-con-weather-card__subtitle")
        .text()
        .trim();
      this._data_by_location.data.date = new Date();
      this._data_by_location.data.temp = $(".cur-con-weather-card")
        .find(".temp-container .temp")
        .text()
        .trim();
      this._data_by_location.data.type = $(".cur-con-weather-card")
        .find(".phrase")
        .text();

      this._data_by_location.data.icon =
        "https://www.accuweather.com" +
        <string>$(".cur-con-weather-card").find(".weather-icon").data("src");

      $(".cur-con-weather-card")
        .find(".spaced-content")
        .each(function (this: any) {
          switch ($(this).find(".label").text()) {
            case "RealFeel Shade™":
              that._data_by_location.data.real_feel = $(this)
                .find(".value")
                .text();
              break;

            case "Air Quality":
              that._data_by_location.data.air_quality = $(this)
                .find(".value")
                .text();
              break;

            case "Wind":
              that._data_by_location.data.wind = $(this).find(".value").text();
              break;

            case "Wind Gusts":
              that._data_by_location.data.wind_gusts = $(this)
                .find(".value")
                .text();
              break;
          }
        });
      this._data_by_location.search_parameter = search;
      this._data_by_location.data.offset.hours = `${
        this._data_by_location.data.time.includes("PM")
          ? Number(this._data_by_location.data.time.split(":")[0]) +
            12 -
            new Date().getUTCHours()
          : Number(this._data_by_location.data.time.split(":")[0]) -
            new Date().getUTCHours()
      }`;
      this._data_by_location.data.offset.minutes = `${
        Number(this._data_by_location.data.time.split(":")[1]?.split(" ")[0]) -
        new Date().getUTCMinutes()
      }
      `;
      setToday(this._data_by_location);
    }
  };

  public getData = (location: string): todayDataType => {
    return getToday(location);
  };
}
