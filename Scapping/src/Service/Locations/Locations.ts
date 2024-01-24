import cheerio from "cheerio";
import { locationsType } from "../../../../Types/types";
import LocationModel from "../../Models/Location";

export class Locations {
  
  private _locations: locationsType = new LocationModel().model;

  constructor() {}

  public scrapLocations = async (search: string): Promise<void> => {
    this._locations.search_parameter = search;
    let response = await (await fetch(`https://www.accuweather.com/en/search-locations?query=${search}`)).text()
      .then((results) => results);

    let $ = cheerio.load(response);
    let classThis = this
    classThis._locations.available_locations = []
      $(".locations-list a").each(function(this){
        const link = ($(this).attr("href") as string).toString()
        const geoData = link.replace("/web-api/three-day-redirect?key=GEO_", "").split("&")[0].split("%2c")
        classThis._locations.available_locations.push({city: $(this).find(".location-name").text().trim(), geo: {long: geoData[0], lat: geoData[1]}})
      })
  };

  public getLocations = (): locationsType => {
    return this._locations;
  };
}
