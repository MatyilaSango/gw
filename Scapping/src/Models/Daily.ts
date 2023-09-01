import { dailyDataType } from "../../../Types/types";

export default class DailyModel {
  private _dailyData: dailyDataType = {
    search_parameter: "",
    weather_site: "accuweather",
    date: "",
    data: {
      day_night: {
        day: {
          title: "",
          temperature: "",
          real_feel: "",
          real_feel_shade: "",
          phrase: "",
          max_uv_index: "",
          wind: "",
          wind_gusts: "",
          prob_of_precip: "",
          prob_of_thunderstorm: "",
          precip: "",
          cloud_cover: "",
          icon: "",
        },
        night: {
          title: "",
          temperature: "",
          real_feel: "",
          real_feel_shade: "",
          phrase: "",
          max_uv_index: "",
          wind: "",
          wind_gusts: "",
          prob_of_precip: "",
          prob_of_thunderstorm: "",
          precip: "",
          cloud_cover: "",
          icon: "",
        },
      },
      sunrise_sunset: {
        sunrise: {
          duration: "",
          rise: "",
          set: "",
        },
        sunset: {
          duration: "",
          rise: "",
          set: "",
        },
      },
      temperature_history: {
        forcast: {
          high: "",
          low: "",
        },
        average: {
          high: "",
          low: "",
        },
        last_yr: {
          high: "",
          low: "",
        },
      },
    },
  };

  public get model(): dailyDataType {
    return this._dailyData;
  }
}
