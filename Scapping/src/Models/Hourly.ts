import { hourlyDataType } from "../../../Types/types";

export default class HourlyModel {
  
  private _hourlyData: hourlyDataType = {
    search_parameter: "",
    weather_site: "accuwether",
    data: [],
  };

  public get model(): hourlyDataType {
    return this._hourlyData;
  }
}
