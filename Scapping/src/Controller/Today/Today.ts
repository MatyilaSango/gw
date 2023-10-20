import { todayObj } from "../../Addon/Objects/Objects";

export default async function todayHandler(query: string, rootPage: Promise<any>) {
  await todayObj.scrapToday(query, rootPage);
  return todayObj.getData(query);
}
