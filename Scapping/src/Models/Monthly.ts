import { monthlyWeatherData } from "../../../Types/types";

export default class MonthlyModel {

    private _monthly_data: monthlyWeatherData  = {
        search_parameter: "",
        weather_site: "accuweather",
        month: "",
        year: "",
        data: []
    };

    public get model(): monthlyWeatherData{
      return this._monthly_data;
    }
  }
