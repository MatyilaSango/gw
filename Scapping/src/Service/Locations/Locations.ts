import cheerio from "cheerio";
import { locationsType } from "../../../../Types/types";
import LocationModel from "../../Models/Location";
import getRootHTMLPage from "../../Addon/RootPage/RootPage";

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
      classThis._locations.available_locations.push({location: $(this).find(".location-name").text().trim(), link: ($(this).attr("href") as string).toString()})
    })
  };

  public getLocations = (): locationsType => {
    return this._locations;
  };
}
