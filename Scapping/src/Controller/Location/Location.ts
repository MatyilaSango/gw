import { locationObj } from "../../Addon/Objects/Objects";

export default async function locationsHandler(query: string) {
  await locationObj.scrapLocations(query);
  return locationObj.getLocations();
}
