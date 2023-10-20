import { locationObj } from "../../Addon/Objects/Objects";

export default async function locationsHandler(query: string, getRootHTMLPage: (search: string) => Promise<any>) {
  await locationObj.scrapLocations(query, getRootHTMLPage);
  return locationObj.getLocations();
}
