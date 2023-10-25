import cheerio from "cheerio";
import { monthlyData, monthlyWeatherData } from "../../../../Types/types";
import MonthlyModel from "../../Models/Monthly";
import { deleteMonthly, getMonthly, setMonthly } from "../../Storage";
import axios from "axios";

export class Month {
  private _monthlyData: monthlyWeatherData = new MonthlyModel().model;
  private readonly MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  private isFreshData = (
    search: string,
    monthly: monthlyWeatherData
  ): boolean => {
    if (monthly) {
      let date = new Date();
      if (monthly.month.toLowerCase() === this.MONTHS[date.getMonth()]) {
        return true;
      } else {
        deleteMonthly(search, monthly.month);
        return false;
      }
    }
    return false;
  };

  public scrapMonthly = async (search: string, rootPage: Promise<any>) => {
    let date = new Date();
    let monthlyData = getMonthly(search, this.MONTHS[date.getMonth()]);
    if (this.isFreshData(search, monthlyData)) {
      this._monthlyData = monthlyData;
    } else {
      this._monthlyData.search_parameter = search;

      let monthlyLink = await rootPage.then((results) => {
        let $ = cheerio.load(results);
        return (
          "https://www.accuweather.com" +
          $(".subnav-item").toArray()[5].attribs.href
        );
      });

      let monthlyResponse = await axios
        .get(monthlyLink)
        .then((prom) => prom.data)
        .then((results) => results);

      var that = this;
      let $ = cheerio.load(monthlyResponse);

      $(".monthly-tools")
        .find(".map-dropdown")
        .each(function (this, indx) {
          const text = $(this)
            .find(".map-dropdown-toggle")
            .find("h2")
            .text()
            .trim();

          indx === 0
            ? (that._monthlyData.month = text)
            : (that._monthlyData.year = text);
        });

      $(".monthly-daypanel").each(function (this) {
        let tempData: monthlyData = {
          day: "",
          icon: "",
          temperature: {
            high: "",
            low: "",
          },
        };

        tempData.day = $(this).find(".date").text().trim();
        tempData.icon = $(this).find(".icon-container").find("svg").data("src")
          ? "https://www.accuweather.com" +
            <string>$(this).find(".icon-container").find("svg").data("src")
          : "";
        tempData.temperature.high = $(this).find(".high").text().trim();
        tempData.temperature.low = $(this).find(".low").text().trim();

        that._monthlyData.data.push(tempData);
      });

      setMonthly(this._monthlyData.search_parameter, this._monthlyData);
    }
  };

  public getData = (location: string) => {
    return getMonthly(location, this._monthlyData.month);
  };
}
