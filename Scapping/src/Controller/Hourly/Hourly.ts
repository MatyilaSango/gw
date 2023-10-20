import { hourlyObj } from "../../Addon/Objects/Objects";

export default async function hourlyHandler(query: string, rootPage: Promise<any>) {
  await hourlyObj.scrapHourly(query, rootPage);
  return hourlyObj.getData(query);
}
