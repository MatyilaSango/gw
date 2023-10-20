import { dailyObj } from "../../Addon/Objects/Objects";

export default async function dailyHandler(
  search: string,
  dailyOption: string,
  rootPage: Promise<any>
) {
  await dailyObj.scrapDaily(search, dailyOption, rootPage);
  return dailyObj.getData(search, dailyOption);
}
