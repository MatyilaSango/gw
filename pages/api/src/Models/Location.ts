import { locationsType } from "@/Types/types";

export default class LocationModel {
    
    private _locations: locationsType = {
        search_parameter: "",
        weather_site: "accuweather",
        available_locations: [],
    };

    public get model() : locationsType  {
        return this._locations;
    }
}