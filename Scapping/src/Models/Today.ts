import { todayDataType } from "../../../Types/types";

export default class TodayModel {
  
  private _data_by_location: todayDataType = {
    search_parameter: "",
    weather_site: "accuweather",
    data: {
      title: "Current weather",
      time: "",
      offset: "",
      date: new Date(),
      temp: "",
      real_feel: "",
      air_quality: "",
      wind: "",
      wind_gusts: "",
      type: "",
      icon: "",
    },
  };

  public get model(): todayDataType {
    return this._data_by_location;
  }
}
