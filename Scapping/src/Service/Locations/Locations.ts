import cheerio from "cheerio";
import { locationsType } from "../../../../Types/types";
import LocationModel from "../../Models/Location";
import getRootHTMLPage from "../../Addon/RootPage/RootPage";

export class Locations {
  
  private _locations: locationsType = new LocationModel().model;

  constructor() {}

  public scrapLocations = async (search: string): Promise<void> => {
    this._locations.search_parameter = search;
    let response = await getRootHTMLPage(search)
      .then((results) => results);

    let $ = cheerio.load(response);
    this._locations.available_locations = $(".locations-list a")
      .text()
      .split("\t")
      .filter((cell: string) => cell.trim() !== "");
  };

  public getLocations = (): locationsType => {
    return this._locations;
  };
}
